<template>
  <div class="clock-wrapper">
    <div class="clock">
      <!-- 刻度 -->
      <div class="ticks">
        <div
          v-for="n in 60"
          :key="n"
          :class="['tick', n % 5 === 0 ? 'tick-large' : '']"
          :style="getTickStyle(n)"
        ></div>
      </div>
      <!-- 钟表指针 -->
      <div class="hand hour-hand" :style="hourHandStyle"></div>
      <div class="hand minute-hand" :style="minuteHandStyle"></div>
      <div class="hand second-hand" :style="secondHandStyle"></div>
      <div class="center-dot"></div>
      <!-- 数字标记 -->
      <div class="numbers">
        <span v-for="n in 12" :key="n" :style="getNumberStyle(n)">{{ n }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClockHome",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  computed: {
    hourHandStyle() {
      const degrees = ((this.hours % 12) + this.minutes / 60) * 30;
      return { transform: `rotate(${degrees}deg)` };
    },
    minuteHandStyle() {
      const degrees = (this.minutes + this.seconds / 60) * 6;
      return { transform: `rotate(${degrees}deg)` };
    },
    secondHandStyle() {
      const degrees = this.seconds * 6;
      return { transform: `rotate(${degrees}deg)` };
    }
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
    },
    getTickStyle(tick) {
      return { transform: `rotate(${(tick - 1) * 6}deg)` };
    },
    getNumberStyle(number) {
      const angle = (number - 3) * 30;
      const radius = 120; 
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      
      return {
        transform: `translate(${x}px, ${y}px)`,
        fontSize: '1.2rem',
        fontWeight: '600',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-12px',
        marginTop: '-12px'
      };
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }
};
</script>

<style scoped>
.clock-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.clock {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 刻度 */
.ticks {
  position: absolute;
  width: 100%;
  height: 100%;
}

.tick {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 10px;
  background: #999;
  transform-origin: 50% 150px;
}

.tick-large {
  width: 3px;
  height: 15px;
  background: #666;
}

/* 指针 */
.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: 50% 100%;
  border-radius: 5px;
  transition: transform 0.05s cubic-bezier(0.4, 2.08, 0.55, 0.44);
}

.hour-hand {
  width: 4px;
  height: 60px;
  margin-left: -2px;
  background: #333;
}

.minute-hand {
  width: 3px;
  height: 80px;
  margin-left: -1.5px;
  background: #666;
}

.second-hand {
  width: 2px;
  height: 90px;
  margin-left: -1px;
  background: #e74c3c;
}

/* 中心点 */
.center-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: #e74c3c;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 数字标记 */
.numbers {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.numbers span {
  position: absolute;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 响应式设计 */
@media (min-width: 1440px) {
  .clock {
    width: 350px;
    height: 350px;
  }
  .hour-hand { height: 70px; }
  .minute-hand { height: 90px; }
  .second-hand { height: 100px; }
  .numbers span { font-size: 1.3rem; }
  .tick { transform-origin: 50% 175px; }
}

@media (max-width: 768px) {
  .clock {
    width: 280px;
    height: 280px;
  }
  .hour-hand { height: 55px; }
  .minute-hand { height: 75px; }
  .second-hand { height: 85px; }
  .numbers span { font-size: 1.1rem; }
  .tick { transform-origin: 50% 140px; }
}

@media (max-width: 480px) {
  .clock {
    width: 250px;
    height: 250px;
  }
  .hour-hand { height: 50px; }
  .minute-hand { height: 70px; }
  .second-hand { height: 80px; }
  .numbers span { font-size: 1rem; }
  .tick { transform-origin: 50% 125px; }
}

@media (max-width: 360px) {
  .clock {
    width: 220px;
    height: 220px;
  }
  .hour-hand { height: 45px; }
  .minute-hand { height: 65px; }
  .second-hand { height: 75px; }
  .numbers span { font-size: 0.9rem; }
  .tick { transform-origin: 50% 110px; }
}
</style>