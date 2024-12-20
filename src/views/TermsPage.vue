<!-- Terms of Service Page -->
<template>
  <div class="privacy-container">
    <div class="privacy-header">
      <h1>{{ $t('terms.title') }}</h1>
      <p>{{ $t('terms.lastUpdated') }}</p>
    </div>
    <div class="privacy-content">
      <div class="content-section">
        <p>{{ $t('terms.intro') }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.content.title') }}</h2>
        <p v-html="$t('terms.sections.content.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.provider.title') }}</h2>
        <p v-html="$t('terms.sections.provider.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.age.title') }}</h2>
        <p v-html="$t('terms.sections.age.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.services.title') }}</h2>
        <p v-html="$t('terms.sections.services.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.expectations.title') }}</h2>
        <p v-html="$t('terms.sections.expectations.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.contentInZetra.title') }}</h2>
        <p v-html="$t('terms.sections.contentInZetra.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.issues.title') }}</h2>
        <p v-html="$t('terms.sections.issues.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.changes.title') }}</h2>
        <p v-html="$t('terms.sections.changes.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.contact.title') }}</h2>
        <p v-html="$t('terms.sections.contact.text').replace(/\\n/g, '<br>')"></p>
      </div>

      <div class="content-section">
        <h2>{{ $t('terms.sections.other.title') }}</h2>
        <p v-html="$t('terms.sections.other.text').replace(/\\n/g, '<br>')"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'TermsPage',
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

.content-section p {
  margin-bottom: 15px;
}

.content-section ul {
  list-style-type: none;
  padding-left: 20px;
  margin-bottom: 15px;
}

.content-section li {
  margin-bottom: 10px;
  position: relative;
}

.content-section li::before {
  content: "•";
  color: var(--primary-color);
  font-weight: bold;
  position: absolute;
  left: -20px;
}

.address, .contact-info {
  margin: 15px 0;
  padding-left: 20px;
}
</style>
