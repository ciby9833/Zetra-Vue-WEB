<template>
  <div class="carousel-container">
    <!-- 文字区域 -->
    <div class="carousel-text">
      <h2>{{ slides[currentIndex].title }}</h2>
      <p>{{ slides[currentIndex].description }}</p>
    </div>

    <!-- 轮播主体区域 -->
    <div class="carousel-content">
      <div class="carousel-image">
        <img :src="slides[currentIndex].image" :alt="slides[currentIndex].title" />
      </div>
    </div>

    <!-- 指示器 -->
    <div class="carousel-indicators desktop-only">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      currentIndex: 0, // 当前索引
      timer: null,     // 定时器
      slides: [
        {
          image: require("@/assets/images/logistics/lsm.png"),
          title: this.$t("CarouselHome.slides.lsm.title"),
          description: this.$t("CarouselHome.slides.lsm.description"),
        },
        {
          image: require("@/assets/images/logistics/ls1.png"),
          title: this.$t("CarouselHome.slides.ls1.title"),
          description: this.$t("CarouselHome.slides.ls1.description"),
        },
        {
          image: require("@/assets/images/logistics/scm1.png"),
          title: this.$t("CarouselHome.slides.scm1.title"),
          description: this.$t("CarouselHome.slides.scm1.description"),
        },
        {
          image: require("@/assets/images/logistics/wh1.png"),
          title: this.$t("CarouselHome.slides.wh1.title"),
          description: this.$t("CarouselHome.slides.wh1.description"),
        },
      ],
    };
  },
  methods: {
    startAutoSlide() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }, 5000); // 每5秒切换
    },
    stopAutoSlide() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    switchLanguage(currentLang) {
      this.$i18n.locale = currentLang; // 切换语言
  }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.carousel-text {
  text-align: center;
  margin-bottom: 2rem;
}

.carousel-text h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.carousel-text p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.carousel-image {
  width: 2560px; /* 2K默认宽度 */
  height: 950px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.carousel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* 4K (3840x2160) */
@media (min-width: 3840px) {
  .carousel-image {
    width: 3200px;
    height: 1200px;
  }
}

/* 2K (2560x1440) */
@media (max-width: 2560px) {
  .carousel-image {
    width: 2560px;
    height: 950px;
  }
}

/* 1080p (1920x1080) */
@media (max-width: 1920px) {
  .carousel-image {
    width: 1920px;
    height: 750px;
  }
}

/* 720p (1280x720) */
@media (max-width: 1280px) {
  .carousel-image {
    width: 1280px;
    height: 550px;
  }
}

/* Tablet Landscape */
@media (max-width: 1024px) {
  .carousel-image {
    width: 1024px;
    height: 450px;
  }
}

/* Tablet Portrait */
@media (max-width: 850px) {
  .carousel-image {
    width: 768px;
    height: 400px;
  }
}

/* Large Mobile */
@media (max-width: 680px) {
  .carousel-container {
    padding: 1rem;
  }
  
  .carousel-image {
    width: 100%;
    height: 350px;
  }
}

/* Medium Mobile */
@media (max-width: 480px) {
  .carousel-container {
    padding: 0.5rem;
  }
  
  .carousel-image {
    height: 300px;
  }
}

/* Small Mobile */
@media (max-width: 360px) {
  .carousel-image {
    height: 250px;
  }
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicators span.active {
  background-color: #1a4a7a;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 1rem;
    border-radius: 0;
  }

  .carousel-text {
    margin-bottom: 1rem;
  }

  .carousel-text h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .carousel-text p {
    font-size: 1rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }

  .carousel-content {
    margin-bottom: 0;
  }

  .desktop-only {
    display: none;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 0.5rem;
  }

  .carousel-text h2 {
    font-size: 1.2rem;
  }

  .carousel-text p {
    font-size: 0.9rem;
  }
}
</style>