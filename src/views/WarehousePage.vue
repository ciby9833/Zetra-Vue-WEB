<template>
  <div class="warehouse-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="title">{{ $t('warehouse.title') }}</h1>
        <h2 class="subtitle">{{ $t('warehouse.subtitle') }}</h2>
        <p class="intro">{{ $t('warehouse.intro') }}</p>
      </div>
    </section>

    <!-- Core Functions -->
    <section class="core-functions">
      <div class="container">
        <h2 class="section-title">{{ $t('warehouse.coreFunctions.title') }}</h2>
        <div class="functions-grid">
          <div class="function-card" v-for="(func, key) in ['sorting', 'visualization', 'automation', 'inventory', 'intelligence']" :key="key">
            <div class="icon">
              <font-awesome-icon :icon="getIconForFunction(func)" />
            </div>
            <h3>{{ $t(`warehouse.coreFunctions.${func}.title`) }}</h3>
            <ul>
              <li>{{ $t(`warehouse.coreFunctions.${func}.desc1`) }}</li>
              <li>{{ $t(`warehouse.coreFunctions.${func}.desc2`) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages -->
    <section class="highlights">
      <div class="container">
        <h2 class="section-title">{{ $t('warehouse.advantages.title') }}</h2>
        <div class="highlights-grid">
          <div class="highlight-card" v-for="(adv, key) in ['operation', 'data', 'scalable', 'cost', 'efficiency']" :key="key">
            <div class="icon">
              <font-awesome-icon :icon="getIconForAdvantage(adv)" />
            </div>
            <h3>{{ $t(`warehouse.advantages.${adv}.title`) }}</h3>
            <p>{{ $t(`warehouse.advantages.${adv}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scenarios -->
    <section class="scenarios">
      <div class="container">
        <h2 class="section-title">{{ $t('warehouse.scenarios.title') }}</h2>
        <div class="scenarios-grid">
          <div class="scenario-card" v-for="(scenario, key) in ['ecommerce', 'coldChain', 'retail', 'medical', 'distributed']" :key="key">
            <div class="icon">
              <font-awesome-icon :icon="getIconForScenario(scenario)" />
            </div>
            <p>{{ $t(`warehouse.scenarios.${scenario}`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ $t('warehouse.cta.slogan') }}</h2>
        <p>{{ $t('warehouse.cta.action') }}</p>
        <router-link to="/support" class="cta-button">
          {{ $t('common.contactUs') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WarehousePage',
  methods: {
    getIconForFunction(func) {
      const icons = {
        sorting: ['fas', 'sort'],
        visualization: ['fas', 'chart-bar'],
        automation: ['fas', 'robot'],
        inventory: ['fas', 'boxes'],
        intelligence: ['fas', 'brain']
      }
      return icons[func] || ['fas', 'warehouse']
    },
    getIconForAdvantage(adv) {
      const icons = {
        operation: ['fas', 'cogs'],
        data: ['fas', 'database'],
        scalable: ['fas', 'expand'],
        cost: ['fas', 'dollar-sign'],
        efficiency: ['fas', 'bolt']
      }
      return icons[adv] || ['fas', 'star']
    },
    getIconForScenario(scenario) {
      const icons = {
        ecommerce: ['fas', 'shopping-cart'],
        coldChain: ['fas', 'snowflake'],
        retail: ['fas', 'store'],
        medical: ['fas', 'hospital'],
        distributed: ['fas', 'network-wired']
      }
      return icons[scenario] || ['fas', 'box']
    }
  }
}
</script>

<style lang="scss" scoped>
.warehouse-page {
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
