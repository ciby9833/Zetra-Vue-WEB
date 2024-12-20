<template>
  <div class="about">
    <!-- 页面头部 -->
    <section class="hero-section">
      <h1>{{ $t('about.hero.title') }}</h1>
      <p>{{ $t('about.hero.description') }}</p>
    </section>

    <!-- 公司愿景与价值观 -->
    <section class="vision-values-section">
      <div class="content">
        <div class="image">
          <img src="@/assets/images/AboutTime.png" alt="Company Vision" />
        </div>
        <div class="text">
          <h2>{{ $t('about.vision.title') }}</h2>
          <p>{{ $t('about.vision.description') }}</p>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-section">
      <h2>{{ $t('about.team.title') }}</h2>
      <div class="team-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <img :src="member.photo" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </section>

    <!-- 时间线 -->
    <section class="timeline-section">
      <h2>{{ $t('about.timeline.title') }}</h2>
      <ul class="timeline">
        <li v-for="event in timelineEvents" :key="event.year">
          <span class="year">{{ event.year }}</span>
          <p>{{ event.description }}</p>
        </li>
      </ul>
    </section>

    <!-- 底部联系 -->
    <section class="footer-section">
      <p>{{ $t('about.footer.contact') }}</p>
    </section>
  </div>
</template>


<!--脚本-->
<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: "Alice", role: "CEO", photo: "@/assets/images/Products-chain3.png" },
        { name: "Bob", role: "CTO", photo: "@/assets/images/Products-chain2.png" },
        { name: "Carol", role: "CFO", photo: "@/assets/images/Products-chain1.png" },
      ],
      timelineEvents: [
        { year: "2010", description: "Company founded." },
        { year: "2015", description: "Expanded to international markets." },
        { year: "2020", description: "Launched new product line." },
      ],
    };
  },
};
</script>


<!--样式-->

<style scoped>
.about {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* 页面头部 */
.hero-section {
  text-align: center;
  background: #f4f5f7;
  padding: 50px 20px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-section p {
  font-size: 1.2rem;
}

/* 公司愿景与价值观 */
.vision-values-section .content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 50px 20px;
}

.vision-values-section .image img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
}

.vision-values-section .text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.vision-values-section .text p {
  font-size: 1rem;
}

/* 团队介绍 */
.team-section {
  text-align: center;
  margin: 50px 20px;
}

.team-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.team-member img {
  width: 100%;
  border-radius: 10px;
}

.team-member h3 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.team-member p {
  font-size: 1rem;
  color: #555;
}

/* 时间线 */
.timeline-section {
  margin: 50px 20px;
}

.timeline {
  list-style: none;
  padding: 0;
  border-left: 3px solid #db511f;
}

.timeline li {
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
}

.timeline li::before {
  content: "";
  width: 10px;
  height: 10px;
  background: #db511f;
  border-radius: 50%;
  position: absolute;
  left: -8px;
  top: 0;
}

.timeline .year {
  font-weight: bold;
  color: #db511f;
  margin-bottom: 5px;
}

/* 底部联系 */
.footer-section {
  text-align: center;
  padding: 20px;
  background: #f4f5f7;
  font-size: 1rem;
}
</style>