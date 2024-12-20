<template>
  <div class="privacy-container">
    <div class="privacy-header">
      <h1>{{ $t('privacy.title') }}</h1>
    </div>
    <div class="privacy-content">
      <div class="content-section">
        <p>{{ $t('privacy.introduction') }}</p>
      </div>
      
      <div class="content-section">
        <h2>{{ $t('privacy.history.title') }}</h2>
        <p>{{ $t('privacy.history.content') }}</p>
      </div>
      
      <div class="content-section">
        <h2>{{ $t('privacy.fairPractices.title') }}</h2>
        <p>{{ $t('privacy.fairPractices.content') }}</p>
      </div>
      
      <div class="content-section">
        <h2>{{ $t('privacy.enforcement.title') }}</h2>
        <p>{{ $t('privacy.enforcement.content') }}</p>
      </div>
      
      <div class="content-section">
        <h2>{{ $t('privacy.laws.title') }}</h2>
        <div class="subsection">
          <h3>{{ $t('privacy.laws.us.title') }}</h3>
          <p>{{ $t('privacy.laws.us.content') }}</p>
        </div>
        <div class="subsection">
          <h3>{{ $t('privacy.laws.eu.title') }}</h3>
          <p>{{ $t('privacy.laws.eu.content') }}</p>
        </div>
        <div class="subsection">
          <h3>{{ $t('privacy.laws.other.title') }}</h3>
          <p>{{ $t('privacy.laws.other.content') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'PrivacyPage',
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  }
}
</script>

<style scoped>
.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  color: var(--text-color);
}

.privacy-header {
  text-align: center;
  margin-bottom: 40px;
}

.privacy-header h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.privacy-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

.content-section {
  margin-bottom: 40px;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.subsection {
  margin: 30px 0;
}

.subsection h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

p {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 20px;
  }

  .privacy-header h1 {
    font-size: 2rem;
  }

  .privacy-content {
    font-size: 1rem;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }

  .subsection h3 {
    font-size: 1.2rem;
  }
}
</style>
