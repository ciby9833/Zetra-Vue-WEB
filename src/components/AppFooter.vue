<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-sections">
        <div class="footer-section">
          <div class="section-header" @click="toggleSection('product')">
            <h3>{{ $t('footer.product') }}</h3>
            <span class="toggle-icon" :class="{ 'open': openSections.product }"></span>
          </div>
          <ul :class="{ 'open': openSections.product }">
            <li><router-link to="/warehouse">{{ $t('footer.warehouse') }}</router-link></li>
            <li><router-link to="/scm">{{ $t('footer.scm') }}</router-link></li>
            <li><router-link to="/products">{{ $t('footer.logistics') }}</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <div class="section-header" @click="toggleSection('services')">
            <h3>{{ $t('footer.about') }}</h3>
            <span class="toggle-icon" :class="{ 'open': openSections.services }"></span>
          </div>
          <ul :class="{ 'open': openSections.services }">
            <li><router-link to="/about-zetra">{{ $t('footer.aboutZetra') }}</router-link></li>
            <li><router-link to="/about">{{ $t('footer.aboutUs') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <div class="section-header" @click="toggleSection('legal')">
            <h3>{{ $t('footer.legal') }}</h3>
            <span class="toggle-icon" :class="{ 'open': openSections.legal }"></span>
          </div>
          <ul :class="{ 'open': openSections.legal }">
            <li><router-link to="/privacy">{{ $t('footer.privacy') }}</router-link></li>
            <li><router-link to="/terms">{{ $t('footer.terms') }}</router-link></li>
            <li><router-link to="/cookies">{{ $t('footer.cookies') }}</router-link></li>
            <li><router-link to="/sitemap">{{ $t('footer.sitemap') }}</router-link></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-region">
          <div class="region-group left">
            <div class="lang-selector" @click.stop="toggleLangMenu">
              <span 
                class="lang-text"
                :class="{ active: isLangMenuOpen }"
              >
                {{ currentLangLabel }}
              </span>
              <transition name="fade">
                <div class="lang-dropdown" v-if="isLangMenuOpen" @click.stop>
                  <button 
                    v-for="lang in languages" 
                    :key="lang.code"
                    class="lang-option"
                    :class="{ active: currentLang === lang.code }"
                    @click="setLanguage(lang.code)"
                  >
                    {{ lang.label }}
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="footer-legal">
          <p> {{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isLangMenuOpen: false,
      currentLang: 'en',
      languages: [
        { code: 'en', label: 'English' },
        { code: 'id', label: 'Indonesia' },
        { code: 'zh', label: 'chinese simplified' }
      ],
      openSections: {}
    }
  },
  computed: {
    currentLangLabel() {
      const lang = this.languages.find(l => l.code === this.currentLang)
      return lang ? lang.label : ''
    }
  },
  created() {
    // 初始化当前语言
    this.currentLang = this.$i18n.locale
  },
  watch: {
    '$route'() {
      // 路由变化时关闭所有展开的菜单
      this.openSections = {}
    }
  },
  methods: {
    toggleLangMenu() {
      this.isLangMenuOpen = !this.isLangMenuOpen
    },
    setLanguage(code) {
      this.currentLang = code
      this.$i18n.locale = code
      this.isLangMenuOpen = false
    },
    toggleSection(section) {
      this.openSections[section] = !this.openSections[section]
    },
    isSectionOpen(section) {
      return this.openSections[section]
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.isLangMenuOpen = false
    })
  },
  beforeUnmount() {
    document.removeEventListener('click', () => {
      this.isLangMenuOpen = false
    })
  }
}
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  color: #333333;
  width: 100%;
  padding: 40px 0 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 30px;
}

.footer-section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.section-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
}

.toggle-icon {
  display: none;
  width: 20px;
  height: 20px;
  position: relative;
}

.toggle-icon::before,
.toggle-icon::after {
  content: '';
  position: absolute;
  background-color: #666666;
  transition: transform 0.3s ease;
}

.toggle-icon::before {
  width: 2px;
  height: 10px;
  top: 5px;
  left: 9px;
}

.toggle-icon::after {
  width: 10px;
  height: 2px;
  top: 9px;
  left: 5px;
}

.toggle-icon.open::before {
  transform: rotate(90deg);
}

.toggle-icon.open::after {
  transform: rotate(180deg);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #666666;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
  display: block;
  padding: 8px 0;
}

.footer-section ul li a:hover {
  color: #1a1a2e;
}

@media (max-width: 768px) {
  .footer {
    padding: 0;
  }

  .footer-content {
    padding: 0;
  }

  .footer-sections {
    display: block;
    margin: 0;
    padding: 0;
  }

  .footer-section {
    margin: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .footer-section:first-child {
    margin-top: 0;
  }

  .section-header {
    padding: 15px 20px;
    cursor: pointer;
    min-height: 50px;
    margin: 0;
  }

  .section-header h3 {
    font-size: 14px;
  }

  .footer-section ul {
    display: none;
    padding: 10px 20px;
    background-color: var(--bg-secondary);
  }

  .footer-section ul.open {
    display: block;
  }

  .footer-section ul li {
    margin: 0;
  }

  .footer-section ul li a {
    padding: 12px 0;
    font-size: 14px;
  }

  .toggle-icon {
    display: block;
  }
}

.footer-bottom {
  padding: 20px;
  padding-top: 20px;
}

.footer-region {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.region-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.region-group.left {
  margin-right: auto;
}

.footer-legal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.85rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}

.footer-legal p {
  margin: 0;
  color: #666666;
}

.lang-selector {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.lang-text {
  color: #666666;
  font-size: 14px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.lang-text:hover,
.lang-text.active {
  color: #1a1a2e;
}

.lang-dropdown {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 0;
  transform: none;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 160px;
  overflow: hidden;
}

.lang-option {
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: #666666;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  transition: all 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lang-option:hover,
.lang-option.active {
  background: #f7f7f7;
  color: #1a1a2e;
}

@media (max-width: 768px) {
  .lang-dropdown {
    bottom: calc(100% + 4px);
    top: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
