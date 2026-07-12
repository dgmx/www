<template>
  <div class="moodle-wrapper">
    <!-- Course list view -->
    <div v-if="view === 'courses'" class="moodle-main">
      <div class="moodle-header">
        <div class="moodle-header-inner">
          <div class="moodle-brand">
            <span class="moodle-brand-icon">&#x1F393;</span>
            <span class="moodle-brand-text">TCM</span>
          </div>
          <a class="moodle-login-link" href="#" @click.prevent="goToLogin">Log in</a>
        </div>
      </div>

      <div class="moodle-content">
        <div class="moodle-courses">
          <div class="moodle-section-header">
            <h2 class="moodle-section-title">Available courses</h2>
          </div>

          <div class="moodle-course-list">
            <article
              v-for="(course, i) in courses"
              :key="i"
              class="moodle-course-card"
              @click="goToLogin"
            >
              <div class="moodle-course-img">
                <img :src="course.img" :alt="course.title">
              </div>
              <div class="moodle-course-body">
                <h3 class="moodle-course-title">{{ course.title }}</h3>
                <p class="moodle-course-desc">{{ course.desc }}</p>
                <div class="moodle-course-teacher">
                  Teacher: <a href="#" @click.stop="goToLogin">{{ course.teacher }}</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="moodle-footer">
        <div class="moodle-footer-inner">
          <div class="moodle-logininfo">You are not logged in. (<a href="#" @click.prevent="goToLogin">Log in</a>)</div>
          <div class="moodle-powered">Powered by <a href="https://moodle.com" target="_blank">Moodle</a></div>
        </div>
      </div>
    </div>

    <!-- Login view -->
    <div v-else class="moodle-login-page">
      <div class="moodle-login-wrapper">
        <div class="moodle-login-container">
          <div class="moodle-login-form-wrapper">
            <h1 class="moodle-login-heading">Log in to The Constructor Method</h1>

            <form class="moodle-login-form" @submit.prevent="handleLogin">
              <div class="moodle-field">
                <label for="moodle-username" class="moodle-sr-only">Username</label>
                <input
                  id="moodle-username"
                  v-model="username"
                  type="text"
                  class="moodle-input"
                  placeholder="Username"
                  autocomplete="username"
                >
              </div>
              <div class="moodle-field">
                <label for="moodle-password" class="moodle-sr-only">Password</label>
                <input
                  id="moodle-password"
                  v-model="password"
                  type="password"
                  class="moodle-input"
                  placeholder="Password"
                  autocomplete="current-password"
                >
              </div>
              <div v-if="error" class="moodle-error">{{ error }}</div>
              <div class="moodle-field">
                <button type="submit" class="moodle-btn-primary">Log in</button>
              </div>
              <div class="moodle-field">
                <a href="#" class="moodle-forgot" @click.prevent>Lost password?</a>
              </div>
            </form>

            <div class="moodle-divider"></div>

            <h2 class="moodle-guest-heading">Some courses may allow guest access</h2>
            <form class="moodle-guest-form" @submit.prevent>
              <button type="submit" class="moodle-btn-secondary" @click.prevent="handleLogin">Access as a guest</button>
            </form>

            <div class="moodle-divider"></div>

            <div class="moodle-login-footer-links">
              <button type="button" class="moodle-btn-back" @click="goBack">&#8592; Back to courses</button>
            </div>
          </div>
        </div>
      </div>

      <div class="moodle-footer moodle-login-footer">
        <div class="moodle-footer-inner">
          <div class="moodle-logininfo">You are not logged in.</div>
          <div class="moodle-powered">Powered by <a href="https://moodle.com" target="_blank">Moodle</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const view = ref('courses')
const username = ref('')
const password = ref('')
const error = ref('')

const courses = [
  {
    title: 'Planificación y administración de redes',
    desc: 'Curso del módulo Planificación y Administración de Redes del Ciclo Formativo de Grado Superior Administración de Sistemas Informáticos y Redes (ASIR)',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/1361/course/overviewfiles/redes.jpg'
  },
  {
    title: 'Administración de sistemas operativos',
    desc: 'Curso del módulo Administración de sistemas operativos del Ciclo Formativo de Grado Superior Administración de Sistemas Informáticos y Redes (ASIR)',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/1040/course/overviewfiles/operating-system-t.jpg'
  },
  {
    title: 'Programación Python',
    desc: 'Curso práctico de introducción a Python para ingeniería y ciencia de datos',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/1014/course/overviewfiles/Captura%20de%20pantalla%202024-06-28%20a%20las%2011.10.30.png'
  },
  {
    title: 'Programación de servicios y procesos',
    desc: 'Curso del módulo Programación de servicios y procesos del Ciclo Formativo de Grado Superior Desarrollo de aplicaciones multiplataforma. (DAM)',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/835/course/overviewfiles/lenguaje-de-programacion-java-codificacion-papel-pintado-1280x720_45.jpg'
  },
  {
    title: 'Lenguajes de marcas y sistemas de gestión de información',
    desc: 'Curso del módulo Lenguajes de marcas y sistemas de gestión de información del Ciclo Formativo de Grado Superior Desarrollo de aplicaciones web (DAW)',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/463/course/overviewfiles/AdobeStock_297078136-1920x1080.jpg'
  },
  {
    title: 'Programación',
    desc: 'Curso del módulo Programación del Ciclo Formativo de Grado Superior Desarrollo de aplicaciones web y multiplataforma (DAW) (DAM)',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/285/course/overviewfiles/programacion-java.jpg'
  },
  {
    title: 'Bases de Datos',
    desc: 'Curso del módulo Bases de Datos del Ciclo Formativo de Grado Superior Desarrollo de aplicaciones web y multiplataforma (DAW) (DAM)',
    teacher: 'Diego J. Gonzalez',
    img: 'https://dgmx.duckdns.org/pluginfile.php/15/course/overviewfiles/unnamed.jpg'
  }
]

function goToLogin() {
  view.value = 'login'
  username.value = ''
  password.value = ''
  error.value = ''
}

function goBack() {
  view.value = 'courses'
  error.value = ''
}

function handleLogin() {
  error.value = 'Invalid login, please try again'
}
</script>

<style scoped>
.moodle-wrapper {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.5;
  background: #fff;
}

/* ===== Header ===== */
.moodle-header {
  background: #fff;
  border-bottom: 1px solid #e3e3e3;
  box-shadow: 0 2px 4px rgba(0,0,0,.08);
}
.moodle-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.moodle-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}
.moodle-brand-icon {
  font-size: 1.8em;
}
.moodle-brand-text {
  font-size: 1.1em;
  font-weight: 700;
  color: #1a1a2e;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.moodle-login-link {
  color: #1a1a2e;
  text-decoration: none;
  font-weight: 600;
  font-size: .9em;
  padding: 6px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: all .15s;
}
.moodle-login-link:hover {
  background: #f5f5f5;
  border-color: #999;
}

/* ===== Content ===== */
.moodle-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 60px;
}
.moodle-section-header {
  margin-bottom: 24px;
}
.moodle-section-title {
  font-size: 1.5em;
  font-weight: 300;
  color: #1a1a2e;
}
.moodle-course-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.moodle-course-card {
  display: flex;
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow .15s;
}
.moodle-course-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
}
.moodle-course-img {
  flex: 0 0 220px;
  min-height: 140px;
  overflow: hidden;
}
.moodle-course-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.moodle-course-body {
  flex: 1;
  padding: 18px 24px;
}
.moodle-course-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 6px;
}
.moodle-course-desc {
  font-size: .9em;
  color: #555;
  line-height: 1.5;
  margin-bottom: 8px;
}
.moodle-course-teacher {
  font-size: .85em;
  color: #777;
}
.moodle-course-teacher a {
  color: #f98012;
  text-decoration: none;
}
.moodle-course-teacher a:hover {
  text-decoration: underline;
}

/* ===== Footer ===== */
.moodle-footer {
  background: #f5f5f5;
  border-top: 1px solid #e3e3e3;
  padding: 16px 0;
}
.moodle-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .85em;
  color: #666;
}
.moodle-logininfo a,
.moodle-powered a {
  color: #f98012;
  text-decoration: none;
}
.moodle-logininfo a:hover,
.moodle-powered a:hover {
  text-decoration: underline;
}

/* ===== Login Page ===== */
.moodle-login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.moodle-login-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}
.moodle-login-container {
  width: 100%;
  max-width: 420px;
}
.moodle-login-form-wrapper {
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  padding: 40px 36px 30px;
  box-shadow: 0 1px 6px rgba(0,0,0,.08);
}
.moodle-login-heading {
  font-size: 1.5em;
  font-weight: 300;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 28px;
}
.moodle-field {
  margin-bottom: 14px;
}
.moodle-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
.moodle-input {
  display: block;
  width: 100%;
  padding: 12px 14px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color .15s;
  background: #fff;
  color: #333;
}
.moodle-input:focus {
  outline: none;
  border-color: #1a1a2e;
  box-shadow: 0 0 0 2px rgba(26,26,46,.12);
}
.moodle-error {
  background: #fdecea;
  color: #b71c1c;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: .88em;
  margin-bottom: 14px;
  border: 1px solid #f5c6cb;
}
.moodle-btn-primary {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 1em;
  font-weight: 600;
  color: #fff;
  background: #0f6cbf;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background .15s;
}
.moodle-btn-primary:hover {
  background: #0b5ba3;
}
.moodle-btn-secondary {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: .95em;
  font-weight: 500;
  color: #333;
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background .15s;
}
.moodle-btn-secondary:hover {
  background: #e8e8e8;
}
.moodle-forgot {
  display: block;
  text-align: center;
  font-size: .9em;
  color: #0f6cbf;
  text-decoration: none;
}
.moodle-forgot:hover {
  text-decoration: underline;
}
.moodle-divider {
  border-top: 1px solid #e3e3e3;
  margin: 24px 0;
}
.moodle-guest-heading {
  font-size: 1em;
  font-weight: 300;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 18px;
}
.moodle-guest-form {
  margin-bottom: 14px;
}
.moodle-login-footer-links {
  text-align: center;
}
.moodle-btn-back {
  background: none;
  border: none;
  color: #0f6cbf;
  font-size: .9em;
  cursor: pointer;
  padding: 6px 12px;
}
.moodle-btn-back:hover {
  text-decoration: underline;
}
.moodle-login-footer .moodle-footer-inner {
  justify-content: center;
}

@media (max-width: 640px) {
  .moodle-course-card {
    flex-direction: column;
  }
  .moodle-course-img {
    flex: 0 0 160px;
  }
  .moodle-login-form-wrapper {
    padding: 30px 20px;
  }
}
</style>
