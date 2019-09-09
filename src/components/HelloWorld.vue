<template>

  <div class="home container">

    <p class="lead">Hello, my name is Mussulini Lopez.</p>

    <p>I am a Filipino designer with an extensive knowledge in user interface design 
    who focuses on user experience to create a meaningful product design.</p>

    <ul class="social list-inline">
        <li class="list-inline-item"><b-link href="https://drive.google.com/open?id=1jdFOn0X7NwFwo29TnUu4zlTyE50p7-89" target="_blank"><span id="work" class="font-icon icon-briefcase work"></span></b-link></li>
        <li class="list-inline-item"><b-link href="https://www.behance.net/mussulini" target="_blank"><span class="font-icon icon-behance behance"></span></b-link></li>
        <li class="list-inline-item"><b-link href="https://codepen.io/mussulini" target="_blank"><span class="font-icon icon-codepen codepen"></span></b-link></li>
        <li class="list-inline-item"><b-link href="https://www.linkedin.com/in/mussulini" target="_blank"><span class="font-icon icon-linkedin-square linkedin"></span></b-link></li>
    </ul>

    <b-tooltip target="work" placement="bottom">
      Check out <br> my <strong>résumé!</strong>
    </b-tooltip>

  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
