<template>
  <div class="privacy-container">
    <div class="privacy-header">
      <h1>{{ $t('cookie.title') }}</h1>
      <p class="last-update">{{ $t('cookie.lastUpdate') }}</p>
    </div>
    <div class="privacy-content">
      <!-- 介绍 -->
      <div class="content-section">
        <p>{{ $t('cookie.introduction') }}</p>
      </div>

      <!-- 1. 什么是 Cookie -->
      <div class="content-section">
        <h2>1. {{ $t('cookie.sections.whatAreCookies.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.whatAreCookies.text'))"></div>
      </div>

      <!-- 2. Cookie 类型 -->
      <div class="content-section">
        <h2>2. {{ $t('cookie.sections.types.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.types.text'))"></div>
      </div>

      <!-- 3. 第三方 Cookie -->
      <div class="content-section">
        <h2>3. {{ $t('cookie.sections.thirdParty.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.thirdParty.text'))"></div>
      </div>

      <!-- 4. Cookie 管理 -->
      <div class="content-section">
        <h2>4. {{ $t('cookie.sections.management.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.management.text'))"></div>
      </div>

      <!-- 5. 存储和时长 -->
      <div class="content-section">
        <h2>5. {{ $t('cookie.sections.storage.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.storage.text'))"></div>
      </div>

      <!-- 6. 政策更新 -->
      <div class="content-section">
        <h2>6. {{ $t('cookie.sections.updates.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.updates.text'))"></div>
      </div>

      <!-- 7. 联系方式 -->
      <div class="content-section">
        <h2>7. {{ $t('cookie.sections.contact.title') }}</h2>
        <div class="section-content" v-html="formatText($t('cookie.sections.contact.text'))"></div>
      </div>

      <!-- 结论 -->
      <div class="content-section conclusion">
        <p>{{ $t('cookie.conclusion') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'CookiePage',
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const formatText = (text) => {
      if (!text) return '';
      return text
        .replace(/\\n\\n/g, '<br><br>')  // 首先处理双换行
        .replace(/\\n/g, '<br>')         // 然后处理单换行
        .replace(/•\s/g, '<span class="bullet">•</span> ')
        .replace(/(\d+\.\s)/g, '<span class="number">$1</span>');
    };

    return {
      formatText
    };
  }
};
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

.last-update {
  color: var(--text-color-light);
  font-style: italic;
  margin-bottom: 20px;
}

.privacy-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

.content-section {
  margin-bottom: 40px;
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.section-content {
  margin: 20px 0;
}

.section-content :deep(br) {
  margin-bottom: 10px;
  display: block;
  content: "";
}

.section-content :deep(.bullet) {
  margin-right: 8px;
  color: var(--primary-color);
}

.section-content :deep(.number) {
  font-weight: 500;
  color: var(--primary-color);
}

.conclusion {
  margin-top: 40px;
  padding: 20px;
  background-color: var(--color-background-mute);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 20px;
  }

  .privacy-header h1 {
    font-size: 2rem;
  }

  .content-section h2 {
    font-size: 1.6rem;
  }

  .section-content {
    font-size: 1rem;
  }
}
</style>