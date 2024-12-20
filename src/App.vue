<template>
  <div id="app">
    <AppNavbar />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    AppNavbar,
    AppFooter
  }
}
</script>

<style>
:root {
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --accent-color: #0f3460;
  --text-primary: #333333;
  --text-secondary: #666666;
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --header-height: 64px;
  --footer-height: auto;
  --border-color: rgba(0, 0, 0, 0.1);
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: var(--header-height);
  margin-bottom: 40px;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Apply theme variables to existing elements */
.navbar {
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
}

.footer {
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-color);
}
</style>