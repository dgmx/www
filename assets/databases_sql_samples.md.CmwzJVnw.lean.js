import{_ as n,o as s,c as t,j as e}from"./chunks/framework.DiS-pR0X.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"databases/sql/samples.md","filePath":"databases/sql/samples.md","lastUpdated":1775585594000}'),r={name:"databases/sql/samples.md"};function i(d,a,o,l,m,c){return s(),t("div",null,[...a[0]||(a[0]=[e("div",{class:"language-mermaid mermaid-container","data-mermaid":"true"},[e("pre",null,[e("code",{class:"language-mermaid"},`
erDiagram
    direction LR
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
`)])],-1)])])}const g=n(r,[["render",i]]);export{u as __pageData,g as default};
