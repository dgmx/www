#!/usr/bin/env python3
import re
import os

BASE_DIR = '/Users/diego/WEB/diegojgonzalez.org/www/oposiciones'

def extract_headings(content):
    headings = []
    for line in content.split('\n'):
        m = re.match(r'^(#{2,3})\s+(\d+(?:\.\d+)?)\s*\.?\s*(.+)$', line)
        if m:
            level = len(m.group(1))
            num = m.group(2)
            text = m.group(3).strip().rstrip(':')
            headings.append((level, num, text))
    return headings

def build_index_block(headings):
    parts = ["## ÍNDICE ", "```bash"]
    for level, num, text in headings:
        if level == 2:
            parts.append(f"{num}. {text}")
        elif level == 3:
            parts.append(f"    {num}. {text}")
    parts.append("```")
    return '\n'.join(parts)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already has proper ## ÍNDICE
    if re.search(r'^##\s*ÍNDICE\s*$', content, re.MULTILINE):
        return None  # unchanged

    headings = extract_headings(content)
    if not headings:
        return None

    index_block = build_index_block(headings)
    lines = content.split('\n')

    # Find the # title line
    title_end = -1
    for i, line in enumerate(lines):
        if re.match(r'^#\s+\S', line):
            title_end = i + 1
            break

    # Find the first ## numbered heading (this is where content starts)
    first_h2 = -1
    for i, line in enumerate(lines):
        if re.match(r'^##\s+\d+\.?\s', line):
            first_h2 = i
            break

    if first_h2 == -1:
        return None

    # If no # heading found, insert before first ##
    if title_end == -1:
        title_end = 0
        while title_end < first_h2 and lines[title_end].strip() == '':
            title_end += 1

    # Remove any existing index-like content between title and first h2
    # (e.g. raw ``` blocks in tema69.md, or ## Índice in tema15-sistemas-operativos.md)
    content_start = first_h2

    # Build new content
    new_lines = lines[:title_end]
    if new_lines and new_lines[-1].strip() != '':
        new_lines.append('')
    new_lines.append(index_block)
    new_lines.append('')
    new_lines.append('---')
    new_lines.append('')
    # Skip blank lines before first h2
    while content_start < len(lines) and lines[content_start].strip() == '':
        content_start += 1
    new_lines.extend(lines[content_start:])

    return '\n'.join(new_lines)

def main():
    files = sorted(os.listdir(BASE_DIR))
    count_modified = 0
    count_skipped = 0
    for fname in files:
        if not fname.startswith('tema') or not fname.endswith('.md'):
            continue
        if fname == 'temas.md':
            continue
        filepath = os.path.join(BASE_DIR, fname)
        result = process_file(filepath)
        if result is not None:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(result)
            print(f"  MODIFIED: {fname}")
            count_modified += 1
        else:
            print(f"  SKIPPED: {fname}")
            count_skipped += 1

    print(f"\nDone. Modified: {count_modified}, Skipped: {count_skipped}")

if __name__ == '__main__':
    main()
