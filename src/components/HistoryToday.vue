<template>
  <div class="history-today">
    <h2 class="title">{{ $t('historyToday.title') }}</h2>
    <div class="history-content" v-if="events.length">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" class="event-wrapper">
          <div class="event-year">{{ currentEvent.year }}{{ $t('historyToday.year') }}</div>
          <div class="event-description">{{ currentEvent.text }}</div>
        </div>
      </transition>
      <div class="navigation">
        <button @click="previousEvent" :disabled="isAutoPlay">
          <span class="arrow">←</span>
        </button>
        <div class="controls">
          <span class="counter">{{ currentIndex + 1 }}/{{ events.length }}</span>
          <button class="play-button" @click="toggleAutoPlay">
            {{ isAutoPlay ? $t('historyToday.controls.pause') : $t('historyToday.controls.play') }}
          </button>
        </div>
        <button @click="nextEvent" :disabled="isAutoPlay">
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
    <div v-else class="loading">
      <div class="loading-spinner"></div>
      <span>{{ $t('historyToday.loading') }}</span>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'HistoryToday',
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data() {
    return {
      currentIndex: 0,
      events: [],
      isAutoPlay: true,
      autoPlayInterval: null,
      isLoading: true,
      lastCheckedDay: null
    }
  },
  computed: {
    currentEvent() {
      return this.events[this.currentIndex];
    },
    apiLanguage() {
      // 根据当前语言选择API语言
      return this.locale === 'zh' ? 'zh' : 'en';
    }
  },
  methods: {
    async fetchTodayEvents() {
      try {
        const today = new Date();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        
        // API配置
        const headers = {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxYWViMmUwZDZmZjZlMTRjNWUzMTBhYTY3YjBjZDYwYiIsImp0aSI6ImYxOWU4MzM4ODFjY2U5ODdhNzIzOTYxMjhjM2YxNWUwM2U1NDA5ZGRkNWJlOWE0M2E3OWQzZDBmOGZmYmNiY2M4NWY5YTVlM2Q3ZDg4OTMxIiwiaWF0IjoxNzM0NTEwODk3Ljc3NTc5LCJuYmYiOjE3MzQ1MTA4OTcuNzc1Nzk0LCJleHAiOjMzMjkxNDE5Njk3Ljc3NDAzMywic3ViIjoiNzcyMDM1NDAiLCJpc3MiOiJodHRwczovL21ldGEud2lraW1lZGlhLm9yZyIsInJhdGVsaW1pdCI6eyJyZXF1ZXN0c19wZXJfdW5pdCI6NTAwMCwidW5pdCI6IkhPVVIifSwic2NvcGVzIjpbImJhc2ljIl19.Nf5M3llpEb4XC_42vuh_-vfWW4YK3zf4zYG3SXMOcwk45hcuGonQk5Y2P9O6fQRRjrDdE9PJoVRzepwARpc4xgu0bJHrFVtbceMuTk1dhBhVT4gI3eEq6nwIcSOkYbbG2-xS9LSg5YI85fpB5Lu9-YfLn_0_wDXIvpZYxUbbXmrRFtHVpdr73j464IA77ieyr9ox7VRVjGENX6XD53SFKPWARfkR1L5MAZD-GRu2razLZESEb0dHBaSmD9-ZcMFMjPaYZ-tcFdibVjQ8ksC4OwKKrW6vzL4uVLujOMycjnzqZmXhQXBIBh9JCHdGz_u2nLyELooMTI87YCgnFP3C9FRucXOtO8LKjvUVYMRSWhHN84FWHRikudn5_fmgwnbwm4ltmGfwoSFWQ_861czAWbkknWY4g_T7wZhfsHQpmlmr_MlFNPuwG4uCvQ5mrvNrweJcjFWipFFKtk2ryXw_VqJPPzPVWHoKOAD3Dza9RyQ7_D8RXUZGRSxOBaoyswfsXMG7SNvUbeOvr7COJnFv-Gsj6RBxu9MNYVU01iqr5sKGlgZhIb9o_JZdR045TSa76g-4KjBUZZiKpsm_JdxaFxkRzZaW7zkKEY_fcymCimiYgK3PO3Q9X-KhxhE2P5yyvhPvpUkhBuV5t7-j9mcoctMYAHt70JUq_P4Lx5bgIbs',
          'Api-User-Agent': 'CJ_Smart/1.0 (https://github.com/your-username/CJ_Smart; your-email@example.com)'
        };

        // 使用维基百科的 On this day API，根据当前语言选择API端点
        const response = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/${this.apiLanguage}/onthisday/events/${month}/${day}`, {
          headers: headers
        });

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        
        // 处理并转换数据，限制事件数量为10个最新事件
        this.events = data.events
          .map(event => ({
            year: event.year,
            text: event.text || (event.pages && event.pages[0] && event.pages[0].extract) || this.$t('historyToday.noDescription')
          }))
          .sort((a, b) => b.year - a.year) // 按年份降序排序
          .slice(0, 10); // 只取前10个事件
        
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching events:', error);
        // 如果API调用失败，使用备用数据
        this.events = [
          {
            year: '1271',
            text: '忽必烈改国号为元，定都大都（今北京）。'
          },
          {
            year: '1865',
            text: '美国通过宪法第十三修正案，正式废除奴隶制。'
          },
          {
            year: '1903',
            text: '莱特兄弟成功进行了人类历史上首次持续受控的动力飞行。'
          }
        ];
        this.isLoading = false;
      }
    },
    nextEvent() {
      if (this.currentIndex < this.events.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    previousEvent() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.events.length - 1;
      }
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextEvent();
      }, 5000); // 每5秒切换一次
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    },
    toggleAutoPlay() {
      if (this.isAutoPlay) {
        this.stopAutoPlay();
      } else {
        this.startAutoPlay();
      }
      this.isAutoPlay = !this.isAutoPlay;
    },
    checkNewDay() {
      const now = new Date();
      const currentDay = now.getDate();
      if (this.lastCheckedDay !== currentDay) {
        this.fetchTodayEvents();
        this.lastCheckedDay = currentDay;
      }
    }
  },
  watch: {
    // 监听语言变化，重新获取数据
    locale() {
      this.fetchTodayEvents();
    }
  },
  async mounted() {
    await this.fetchTodayEvents();
    this.startAutoPlay();
    this.lastCheckedDay = new Date().getDate();
    
    // 每小时检查一次是否需要更新数据
    setInterval(() => {
      this.checkNewDay();
    }, 3600000); // 1小时 = 3600000毫秒
  },
  beforeUnmount() {
    this.stopAutoPlay();
  }
}
</script>

<style scoped>
.history-today {
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}

.history-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

.event-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.event-year {
  font-size: 1.2rem;
  color: #2a5298;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.event-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  flex: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #2a5298;
  transition: all 0.3s ease;
}

button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  color: #1a365d;
}

.play-button {
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid #2a5298;
  border-radius: 4px;
}

.counter {
  font-size: 0.9rem;
  color: #666;
}

.arrow {
  font-size: 1.2rem;
  font-weight: bold;
}

.loading {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #666;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2a5298;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 自定义滚动条样式 */
.event-description::-webkit-scrollbar {
  width: 4px;
}

.event-description::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.event-description::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.event-description::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
