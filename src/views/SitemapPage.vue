<template>
  <div class="sitemap-container">
    <div class="sitemap-header">
      <h1>{{ $t('sitemap.title') }}</h1>
    </div>
    
    <div class="sitemap-content">
      <!-- Products & Services Section -->
      <div class="sitemap-section">
        <h2>{{ $t('sitemap.categories.products') }}</h2>
        <ul>
          <li>
            <router-link to="/warehouse">{{ $t('nav.warehouse') }}</router-link>
          </li>
          <li>
            <router-link to="/scm">{{ $t('nav.scm') }}</router-link>
          </li>
          <li>
            <router-link to="/products">{{ $t('nav.products') }}</router-link>
          </li>
        </ul>
      </div>

      <!-- About Section -->
      <div class="sitemap-section">
        <h2>{{ $t('sitemap.categories.about') }}</h2>
        <ul>
          <li>
            <router-link to="/about-zetra">{{ $t('nav.aboutZetra') }}</router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t('nav.aboutUs') }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Legal Section -->
      <div class="sitemap-section">
        <h2>{{ $t('sitemap.categories.legal') }}</h2>
        <ul>
          <li>
            <router-link to="/privacy">{{ $t('footer.privacy') }}</router-link>
          </li>
          <li>
            <router-link to="/terms">{{ $t('footer.terms') }}</router-link>
          </li>
          <li>
            <router-link to="/cookies">{{ $t('footer.cookies') }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SitemapPage'
};
</script>

<style scoped>
.sitemap-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.sitemap-header {
  text-align: center;
  margin-bottom: 60px;
}

.sitemap-header h1 {
  font-size: 48px;
  font-weight: 600;
  color: var(--text-color);
}

.sitemap-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin: 0 auto;
}

.sitemap-section {
  margin-bottom: 40px;
}

.sitemap-section h2 {
  font-size: 24px;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);
}

.sitemap-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sitemap-section li {
  margin-bottom: 12px;
}

.sitemap-section a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
}

.sitemap-section a:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .sitemap-container {
    padding: 60px 20px;
  }

  .sitemap-header h1 {
    font-size: 36px;
  }

  .sitemap-content {
    grid-template-columns: 1fr;
  }
}
</style>
