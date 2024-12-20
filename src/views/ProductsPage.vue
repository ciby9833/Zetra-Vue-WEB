<template>
  <div class="products-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="title">{{ $t('logistics.title') }}</h1>
        <h2 class="subtitle">{{ $t('logistics.subtitle') }}</h2>
        <p class="intro">{{ $t('logistics.intro') }}</p>
      </div>
    </section>

    <!-- Core Functions Section -->
    <section class="core-functions">
      <div class="container">
        <h2 class="section-title">{{ $t('logistics.coreFunctions.title') }}</h2>
        <div class="functions-grid">
          <!-- TMS -->
          <div class="function-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'truck']" />
            </div>
            <h3>{{ $t('logistics.coreFunctions.tms.title') }}</h3>
            <ul>
              <li>{{ $t('logistics.coreFunctions.tms.desc1') }}</li>
              <li>{{ $t('logistics.coreFunctions.tms.desc2') }}</li>
              <li>{{ $t('logistics.coreFunctions.tms.desc3') }}</li>
            </ul>
          </div>

          <!-- WMS -->
          <div class="function-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'warehouse']" />
            </div>
            <h3>{{ $t('logistics.coreFunctions.wms.title') }}</h3>
            <ul>
              <li>{{ $t('logistics.coreFunctions.wms.desc1') }}</li>
              <li>{{ $t('logistics.coreFunctions.wms.desc2') }}</li>
              <li>{{ $t('logistics.coreFunctions.wms.desc3') }}</li>
            </ul>
          </div>

          <!-- Delivery -->
          <div class="function-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'box']" />
            </div>
            <h3>{{ $t('logistics.coreFunctions.delivery.title') }}</h3>
            <ul>
              <li>{{ $t('logistics.coreFunctions.delivery.desc1') }}</li>
              <li>{{ $t('logistics.coreFunctions.delivery.desc2') }}</li>
              <li>{{ $t('logistics.coreFunctions.delivery.desc3') }}</li>
            </ul>
          </div>

          <!-- Analytics -->
          <div class="function-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'chart-line']" />
            </div>
            <h3>{{ $t('logistics.coreFunctions.analytics.title') }}</h3>
            <ul>
              <li>{{ $t('logistics.coreFunctions.analytics.desc1') }}</li>
              <li>{{ $t('logistics.coreFunctions.analytics.desc2') }}</li>
              <li>{{ $t('logistics.coreFunctions.analytics.desc3') }}</li>
            </ul>
          </div>

          <!-- Collaboration -->
          <div class="function-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'handshake']" />
            </div>
            <h3>{{ $t('logistics.coreFunctions.collaboration.title') }}</h3>
            <ul>
              <li>{{ $t('logistics.coreFunctions.collaboration.desc1') }}</li>
              <li>{{ $t('logistics.coreFunctions.collaboration.desc2') }}</li>
              <li>{{ $t('logistics.coreFunctions.collaboration.desc3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights">
      <div class="container">
        <h2 class="section-title">{{ $t('logistics.highlights.title') }}</h2>
        <div class="highlights-grid">
          <!-- Intelligence -->
          <div class="highlight-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'brain']" />
            </div>
            <h3>{{ $t('logistics.highlights.intelligence.title') }}</h3>
            <p>{{ $t('logistics.highlights.intelligence.desc') }}</p>
          </div>

          <!-- Visibility -->
          <div class="highlight-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'eye']" />
            </div>
            <h3>{{ $t('logistics.highlights.visibility.title') }}</h3>
            <p>{{ $t('logistics.highlights.visibility.desc') }}</p>
          </div>

          <!-- Efficiency -->
          <div class="highlight-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'bolt']" />
            </div>
            <h3>{{ $t('logistics.highlights.efficiency.title') }}</h3>
            <p>{{ $t('logistics.highlights.efficiency.desc') }}</p>
          </div>

          <!-- Scalability -->
          <div class="highlight-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'expand']" />
            </div>
            <h3>{{ $t('logistics.highlights.scalability.title') }}</h3>
            <p>{{ $t('logistics.highlights.scalability.desc') }}</p>
          </div>

          <!-- Data Driven -->
          <div class="highlight-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'database']" />
            </div>
            <h3>{{ $t('logistics.highlights.datadriven.title') }}</h3>
            <p>{{ $t('logistics.highlights.datadriven.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scenarios Section -->
    <section class="scenarios">
      <div class="container">
        <h2 class="section-title">{{ $t('logistics.scenarios.title') }}</h2>
        <div class="scenarios-grid">
          <!-- E-commerce -->
          <div class="scenario-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </div>
            <p>{{ $t('logistics.scenarios.ecommerce') }}</p>
          </div>

          <!-- Supply Chain -->
          <div class="scenario-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'link']" />
            </div>
            <p>{{ $t('logistics.scenarios.supplychain') }}</p>
          </div>

          <!-- Cold Chain -->
          <div class="scenario-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'snowflake']" />
            </div>
            <p>{{ $t('logistics.scenarios.coldchain') }}</p>
          </div>

          <!-- Cross-border -->
          <div class="scenario-card">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'globe']" />
            </div>
            <p>{{ $t('logistics.scenarios.crossborder') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ $t('logistics.cta.slogan') }}</h2>
        <p>{{ $t('logistics.cta.action') }}</p>
        <router-link to="/support" class="cta-button">
          {{ $t('common.contactUs') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
  metaInfo() {
    return {
      title: this.$t('logistics.title')
    }
  }
}
</script>

<style lang="scss" scoped>
.products-page {
  .hero-section {
    background: #fff;
    color: #333;
    padding: 4rem 0;
    text-align: center;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      font-weight: normal;
      color: #666;
    }

    .intro {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
      color: #666;
    }
  }

  section {
    padding: 4rem 0;
    background: #fff;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
      color: #333;
    }
  }

  .functions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    .function-card {
      background: #fff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      border: 1px solid #eee;

      &:hover {
        transform: translateY(-5px);
      }

      .icon {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: #333;
      }

      ul {
        list-style-type: none;
        padding: 0;

        li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
          color: #666;
        }
      }
    }
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    .highlight-card {
      text-align: center;
      padding: 2rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      border: 1px solid #eee;

      &:hover {
        transform: translateY(-5px);
      }

      .icon {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: #333;
      }

      p {
        line-height: 1.5;
        color: #666;
      }
    }
  }

  .scenarios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    .scenario-card {
      text-align: center;
      padding: 2rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      border: 1px solid #eee;

      &:hover {
        transform: translateY(-5px);
      }

      .icon {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
      }

      p {
        line-height: 1.5;
        color: #666;
      }
    }
  }

  .cta-section {
    background: #fff;
    color: #333;
    text-align: center;
    border-top: 1px solid #eee;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #333;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      color: #666;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: #333;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background: #444;
      }
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 0;

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }
    }

    section {
      padding: 3rem 0;

      .section-title {
        font-size: 1.75rem;
      }
    }

    .functions-grid,
    .highlights-grid,
    .scenarios-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>