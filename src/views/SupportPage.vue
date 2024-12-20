<template>
  <div class="support">
    <!-- 标题 -->
    <h1 class="support-title">{{ $t('home.support') }}</h1>

    <!-- 第一部分 -->
    <section class="contact-section">
      <!-- 左边联系方式 -->
      <div class="contact-info">
        <h2>{{ $t('support.contactTitle') }}</h2>
        <ul>
          <li>
            <strong>{{ $t('support.phone') }}:</strong> +62 81319039501
          </li>
          <li>
            <strong>{{ $t('support.whatsapp') }}:</strong>
            <a href="https://wa.me/081319039501" target="_blank">WhatsApp</a>
          </li>
          <li>
            <strong>{{ $t('support.email') }}:</strong>
            <a href="mailto:support@example.com">support@example.com</a>
          </li>
        </ul>
      </div>

      <!-- 右边联系表单 -->
      <div class="contact-form">
        <h2>{{ $t('support.contactFormTitle') }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">{{ $t('support.name') }}</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="phone">{{ $t('support.phone') }}</label>
            <input type="tel" id="phone" v-model="form.phone" required />
          </div>
          <div class="form-group">
            <label for="email">{{ $t('support.email') }}</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="message">{{ $t('support.message') }}</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">{{ $t('support.submit') }}</button>
        </form>
      </div>
    </section>

    <!-- 第二部分 -->
    <section class="map-section">
      <h2>{{ $t('support.officeLocation') }}</h2>
      <div class="map-container">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.7714751411605!2d106.79907506548705!3d-6.124592029875716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1deddaac03e1%3A0xe72b69bb2e8ab5dd!2sPT.%20World%20Innovative%20Telecommunication%20(OPPO%20New%20HQ)!5e0!3m2!1szh-TW!2sid!4v1733243965571!5m2!1szh-TW!2sid"
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
      alert(this.$t('support.formSubmitted'));
      // 清空表单
      this.form = {
        name: '',
        phone: '',
        email: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
/* 全局样式 */
.support {
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.support-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

/* 第一部分布局 */
.contact-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
}

.contact-info {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
}

.contact-info a {
  color: #0073e6;
  text-decoration: none;
}

.contact-form {
  flex: 2;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.submit-btn {
  display: inline-block;
  background-color: #0073e6;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-btn:hover {
  background-color: #005bb5;
}

/* 第二部分地图样式 */
.map-section {
  text-align: center;
}

.map-container {
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}
</style>