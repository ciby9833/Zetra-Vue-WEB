<template>
  <div class="about-zetra">
    <!-- Hero Section -->
    <section class="hero bg-gradient-primary text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ $t('about_zetra.hero.title') }}</h1>
        <p class="text-xl md:text-2xl">{{ $t('about_zetra.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">{{ $t('about_zetra.intro.title') }}</h2>
        <p class="text-lg leading-relaxed max-w-4xl">{{ $t('about_zetra.intro.description') }}</p>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-2xl font-bold mb-4">{{ $t('about_zetra.mission.title') }}</h3>
            <p class="text-lg">{{ $t('about_zetra.mission.description') }}</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-2xl font-bold mb-4">{{ $t('about_zetra.vision.title') }}</h3>
            <p class="text-lg">{{ $t('about_zetra.vision.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ $t('about_zetra.values.title') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(value, index) in $t('about_zetra.values.items')" :key="index" 
               class="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-4">{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Stats Section -->
    <section class="bg-primary text-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">{{ $t('about_zetra.stats.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(stat, index) in $t('about_zetra.stats.items')" :key="index" 
               class="text-center">
            <div class="text-4xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('about_zetra.solutions.title') }}</h2>
        <p class="text-lg text-center mb-12">{{ $t('about_zetra.solutions.description') }}</p>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(solution, index) in $t('about_zetra.solutions.items')" :key="index"
               class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold mb-4">{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">{{ $t('about_zetra.future.title') }}</h2>
        <p class="text-lg leading-relaxed max-w-4xl">{{ $t('about_zetra.future.description') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutZetraPage'
}
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
}

.bg-primary {
  background-color: var(--color-primary);
}
</style>
