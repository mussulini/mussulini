<template>

  <div id="app">

    <header class="masthead container">
      <div class="masthead-brand">
        <img class="logo" alt="Mussulini Lopez" src="./assets/img/mussulini.lopez.png">
      </div>
      <!-- <nav class="nav nav-masthead">
        <router-link class="nav-link" to="/">Home</router-link> 
        <router-link class="nav-link" to="/about">About</router-link>
      </nav> -->
    </header>

    <main role="main" class="main">
      <router-view />
    </main>

    <footer class="mastfoot container">
      <div class="colophon">
        &copy; Mussulini Lopez 2019
      </div>

      <ul class="tech list-inline">
        <li class="list-inline-item"><b-link href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"><span class="font-icon icon-html5 html5"></span></b-link></li>
        <li class="list-inline-item"><b-link href="https://sass-lang.com/" target="_blank"><span class="font-icon icon-sass sass"></span></b-link></li>
        <li class="list-inline-item"><b-link href="https://getbootstrap.com/" target="_blank"><span class="font-icon icon-bootstrap bootstrap"></span></b-link></li>
        <li class="list-inline-item"><b-link href="https://vuejs.org/" target="_blank"><span class="font-icon icon-vue vue"></span></b-link></li>
      </ul>
    </footer>

    <vue-particles :particleSize="3" :lineOpacity="0.2"></vue-particles>

  </div>

</template>
