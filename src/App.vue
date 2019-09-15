<template>

  <div id="app">

    <Masthead />

    <main role="main" class="main">
      <!-- <router-view /> -->
      <Home />
    </main>

    <Mastfoot />

    <vue-particles :particleSize="3" :lineOpacity="0.2"></vue-particles>

    <div class="overlay"></div>
    <!-- <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="https://r1---sn-un57sn7z.c.drive.google.com/videoplayback?expire=1568578256&ei=kGJ-XdS6FJOiuQXevb3oBg&ip=152.32.100.97&cp=QVNLWkZfV1JTR1hOOkNnQldOM1poV1piclJYZGVUUTcwYzhQaDVmVzRBM3VlQmpBMGFLVF81bDk&id=76e24f9d311075e3&itag=22&source=webdrive&requiressl=yes&mm=30&mn=sn-un57sn7z&ms=nxu&mv=m&mvi=0&pl=22&ttl=transient&susc=dr&driveid=1PF1r48QNpidqbr48Utumvrs1rri5EEV6&app=explorer&mime=video/mp4&dur=117.841&lmt=1568561162504290&mt=1568563772&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,dur,lmt&sig=ALgxI2wwRAIgFk9-tdk0EruSNuSjdbwI2Ml4E0THA_Z2titx2tqYYQ8CIHhRxplbJ8zCStJQNVUqUIcv0C2rHPAM6u30Nh51vpgA&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgY4dtKsQhwKXkAXIlf6O5GfqSOwUYat_dJ7u2eMDmcAgCIQDHFLk0qpJm4MTwHfwtkmOwwBNp0fnj4nvEc98Xad0eUg==&cpn=3lwUDTgrq2pSI96J&c=WEB_EMBEDDED_PLAYER&cver=20190913" type="video/mp4">
    </video> -->

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
