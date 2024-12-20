<template>
  <div class="scm-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="title">{{ $t('scm.title') }}</h1>
        <h2 class="subtitle">{{ $t('scm.subtitle') }}</h2>
        <p class="intro">{{ $t('scm.intro') }}</p>
      </div>
    </section>

    <!-- Core Functions Section -->
    <section class="core-functions">
      <div class="container">
        <h2 class="section-title">{{ $t('scm.coreFunctions.title') }}</h2>
        <div class="functions-grid">
          <div v-for="(func, key) in coreFunctions" :key="key" class="function-card">
            <div class="icon">
              <i :class="func.icon"></i>
            </div>
            <h3>{{ $t(`scm.coreFunctions.${key}.title`) }}</h3>
            <p>{{ $t(`scm.coreFunctions.${key}.desc1`) }}</p>
            <p>{{ $t(`scm.coreFunctions.${key}.desc2`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="advantages">
      <div class="container">
        <h2 class="section-title">{{ $t('scm.advantages.title') }}</h2>
        <div class="highlights-grid">
          <div v-for="(adv, key) in advantages" :key="key" class="highlight-card">
            <div class="icon">
              <i :class="adv.icon"></i>
            </div>
            <h3>{{ $t(`scm.advantages.${key}.title`) }}</h3>
            <p>{{ $t(`scm.advantages.${key}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Scenarios Section -->
    <section class="scenarios">
      <div class="container">
        <h2 class="section-title">{{ $t('scm.scenarios.title') }}</h2>
        <div class="scenarios-grid">
          <div v-for="(scenario, key) in scenarios" :key="key" class="scenario-card">
            <div class="icon">
              <i :class="scenario.icon"></i>
            </div>
            <p>{{ $t(`scm.scenarios.${key}`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ $t('scm.cta.slogan') }}</h2>
        <p>{{ $t('scm.cta.action') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ScmPage',
  data() {
    return {
      coreFunctions: {
        visualization: {
          icon: 'fas fa-chart-line'
        },
        inventory: {
          icon: 'fas fa-boxes'
        },
        supplier: {
          icon: 'fas fa-handshake'
        },
        transport: {
          icon: 'fas fa-truck'
        },
        intelligence: {
          icon: 'fas fa-brain'
        },
        collaboration: {
          icon: 'fas fa-users'
        }
      },
      advantages: {
        integration: {
          icon: 'fas fa-link'
        },
        data: {
          icon: 'fas fa-database'
        },
        scalable: {
          icon: 'fas fa-expand-arrows-alt'
        },
        efficiency: {
          icon: 'fas fa-tachometer-alt'
        },
        monitoring: {
          icon: 'fas fa-desktop'
        }
      },
      scenarios: {
        manufacturing: {
          icon: 'fas fa-industry'
        },
        retail: {
          icon: 'fas fa-store'
        },
        medical: {
          icon: 'fas fa-hospital'
        },
        fmcg: {
          icon: 'fas fa-shopping-cart'
        }
      }
    }
  }
}
</script>

<style scoped>
.scm-page {
  min-height: 100vh;
}

.hero-section {
  background: #fff;
  color: #333;
  padding: 4rem 0;
  text-align: center;
}

.hero-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section .title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero-section .subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: normal;
  color: #666;
}

.hero-section .intro {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #666;
}

section {
  padding: 4rem 0;
  background: #fff;
}

section .container {
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

.functions-grid,
.highlights-grid,
.scenarios-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.functions-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.highlights-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.scenarios-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.function-card,
.highlight-card,
.scenario-card {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid #eee;
}

.function-card:hover,
.highlight-card:hover,
.scenario-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.cta-section {
  background: #fff;
  color: #333;
  text-align: center;
  border-top: 1px solid #eee;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #666;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0;
  }

  .hero-section .title {
    font-size: 2rem;
  }

  .hero-section .subtitle {
    font-size: 1.25rem;
  }

  section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .functions-grid,
  .highlights-grid,
  .scenarios-grid {
    grid-template-columns: 1fr;
  }
}
</style>
