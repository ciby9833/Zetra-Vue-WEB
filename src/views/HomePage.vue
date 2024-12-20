<template>
  <div class="home">
    <!-- 第一部分 -->
    <section class="hero-section">
      <div class="tech-background">
        <div class="particles"></div>
      </div>
      <div id="globe-container" ref="globeContainer">
        <!-- Loading state -->
        <div v-if="isLoading" class="loading-overlay">
          <div class="loading-spinner"></div>
          <p>Loading Globe...</p>
        </div>
        <!-- Error state -->
        <div v-if="error" class="error-overlay">
          <p>{{ error }}</p>
          <button @click="retryInitialization">Retry</button>
        </div>
      </div>
      <div class="hero-content">
        <h1>{{ $t('home.hero.title') }}</h1>
        <p>{{ $t('home.hero.description') }}</p>
      
      </div>
    </section>
    
    <!-- 第二部分，组件轮播效果-->
    <section class="image-section">
      <div class="carousel-container">
        <CarouselHome />
      </div>
    </section>

    <!--时钟-->
    <section class="clock-section">
      <div class="clock-container">
        <ClockHome />
      </div>
      <div class="history-container">
        <HistoryToday />
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { SpaceEarth } from '@/components/spaceearth.js';
import CarouselHome from '@/components/CarouselHome.vue';
import ClockHome from '@/components/ClockHome.vue';
import HistoryToday from '@/components/HistoryToday.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    CarouselHome,
    ClockHome,
    HistoryToday
  },
  data() {
    return {
      earth: null,
      isLoading: true,
      error: null
    };
  },

  async mounted() {
    try {
      const container = this.$refs.globeContainer;
      this.earth = new SpaceEarth(container);
      await this.earth.init();
      this.isLoading = false;
    } catch (error) {
      console.error('Failed to initialize Earth:', error);
      this.error = '加载失败，请重试';
      this.isLoading = false;
    }
  },

  beforeUnmount() {
    if (this.earth) {
      this.earth.cleanup();
    }
  },

  methods: {
    async retryInitialization() {
      this.error = null;
      this.isLoading = true;
      try {
        const container = this.$refs.globeContainer;
        this.earth = new SpaceEarth(container);
        await this.earth.init();
        this.isLoading = false;
      } catch (error) {
        console.error('Failed to initialize Earth:', error);
        this.error = '加载失败，请重试';
        this.isLoading = false;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}

.hero-section,
.image-section {
  background-color: white;
  width: 100%;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#globe-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 90%;
}

.hero-title {
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}

.hero-description {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .hero-description {
    font-size: 0.6rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
  
  .hero-description {
    font-size: 0.5rem;
  }
}

/* Image Section */
.image-section {
  position: relative;
  z-index: 3;
  padding: 4rem 2rem;
  background-color: white;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
  }
}

.carousel-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  background: transparent;

  @media (max-width: 768px) {
    margin: 0;
  }
}

.carousel-header {
  text-align: center;
  margin-bottom: 2rem;
}

.carousel-header h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.carousel-header p {
  font-size: 1.2rem;
  color: #666;
}

.carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel-content {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dots span.active-dot {
  background-color: #2a5298;
}

/* Clock Section */
.clock-section {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  background-color: white;

  .clock-container,
  .history-container {
    flex: 1;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .clock-section {
    flex-direction: column;
    padding: 1rem;
  }
}

/* Scrollbar Styles */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: rgba(26, 74, 122, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(26, 74, 122, 0.7);
}
</style>