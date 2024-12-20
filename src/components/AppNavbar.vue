<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="Logo" />
      </router-link>

      <div class="nav-center">
        <div class="nav-links" :class="{ 'is-active': isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">{{ $t('home.welcome') }}</router-link>
          
          <!-- Desktop: Products Dropdown -->
          <div class="dropdown desktop-only">
            <span class="nav-link">{{ $t('home.products') }}</span>
            <div class="dropdown-content">
              <router-link to="/warehouse" class="dropdown-item">{{ $t('nav.warehouse') }}</router-link>
              <router-link to="/scm" class="dropdown-item">{{ $t('nav.scm') }}</router-link>
              <router-link to="/products" class="dropdown-item">{{ $t('nav.products') }}</router-link>
            </div>
          </div>
          
          <!-- Mobile: Products Links -->
          <div class="mobile-only">
            <router-link to="/warehouse" class="nav-link" @click="closeMenu">{{ $t('nav.warehouse') }}</router-link>
            <router-link to="/scm" class="nav-link" @click="closeMenu">{{ $t('nav.scm') }}</router-link>
            <router-link to="/products" class="nav-link" @click="closeMenu">{{ $t('nav.products') }}</router-link>
          </div>

          <!-- Desktop: About Dropdown -->
          <div class="dropdown desktop-only">
            <span class="nav-link">{{ $t('home.about') }}</span>
            <div class="dropdown-content">
              <router-link to="/about-zetra" class="dropdown-item">{{ $t('nav.aboutZetra') }}</router-link>
              <router-link to="/about" class="dropdown-item">{{ $t('nav.aboutUs') }}</router-link>
            </div>
          </div>

          <!-- Mobile: About Links -->
          <div class="mobile-only">
            <router-link to="/about-zetra" class="nav-link" @click="closeMenu">{{ $t('nav.aboutZetra') }}</router-link>
            <router-link to="/about" class="nav-link" @click="closeMenu">{{ $t('nav.aboutUs') }}</router-link>
          </div>

          <router-link to="/support" class="nav-link" @click="closeMenu">{{ $t('home.support') }}</router-link>
        </div>
      </div>

      <button class="menu-toggle" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--bg-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
}

.nav-center {
  justify-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 12px 0;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: calc(100% - 2rem);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bg-primary);
  min-width: 220px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s ease;
}

.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
}

.dropdown-item {
  display: block;
  padding: 0.8rem 1.2rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}

.dropdown-item:hover {
  color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.05);
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background-color: var(--primary-color);
  transition: height 0.3s ease;
}

.dropdown-item:hover::before {
  height: 70%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    margin: 0;
    display: none;
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--bg-primary);
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-top: 1px solid var(--border-color);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-links.is-active {
    display: flex;
  }

  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: block;
    width: 100%;
  }

  .mobile-only .nav-link {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 4px;
  }

  .nav-link::after,
  .dropdown-item::before {
    display: none;
  }

  .nav-link:hover,
  .nav-link.router-link-active {
    background-color: var(--bg-secondary);
  }

  .dropdown-item:hover {
    background-color: var(--bg-secondary);
  }

  .menu-toggle.is-active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .menu-toggle.is-active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.is-active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>