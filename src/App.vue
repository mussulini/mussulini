<template>

  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <vue-particles color="#dedede" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1"></vue-particles>
    
    <router-view/>

  </div>

</template>
