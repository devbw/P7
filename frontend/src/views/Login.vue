<template>
<div class="background">
  <div class="form-login__div-container">
    <img src="../assets/icon_white.png"/>
    <p>Votre reseau social !</p>
  </div>
  <div>
    <div id="connect-text">JE ME CONNECTE !</div>
    <form-login />
    <router-link tag="div" to="/user/register" id="login-text">Pas encore inscrit ? Inscrivez-vous ici !</router-link>
  </div>
  <div>
    <img src="../assets/icon-left-font-monochrome-white.png" alt="logo-entreprise"/>
  </div>
</div>
</template>

<script>
import FormLogin from '@/components/Forms/Login.vue'

export default {
  name: 'Login',
  components: {
    FormLogin
  }
}
</script>

<style scoped>
  img{
    width: 105px;
  }
  #connect-text{
    font-size: 1.5em;
    color:white;
    margin-top : 15%;
  }
  p{
    font-size: 1.3em;
    color : white;
    opacity: 0.5;
  }
</style>