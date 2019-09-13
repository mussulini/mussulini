<template>

  <div id="app">

    <Masthead />

    <main role="main" class="main">
      <!-- <router-view /> -->
      <Home />
    </main>

    <Mastfoot />

    <vue-particles :particleSize="3" :lineOpacity="0.2"></vue-particles>

  </div>

</template>

<script>
import Masthead from '@/components/header.vue'
import Mastfoot from '@/components/footer.vue'
import Home from '@/views/Home.vue'

export default {
  components: {
    Masthead,
    Mastfoot,
    Home
  }
}

</script>
