<template>
<div class="background">
  <div class="form-login__div-container">
    <img src="../assets/icon_white.png"/>
    <p>Votre reseau social !</p>
  </div>
  <div>
    <div id="connect-text">JE M'INSCRIS !</div>
    <form-register />
    <router-link tag="div" to="/user/login" id="login-text">Déjà inscrit ? Connectez-vous ici !</router-link>
  </div>
  <div>
    <img src="../assets/icon-left-font-monochrome-white.png"/>
  </div>
</div>
</template>


<script>
import FormRegister from '@/components/Forms/Register.vue'

export default {
  name: 'Register',
  components: {
    FormRegister
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
    margin-top : 1%;
  }
  p{
    font-size: 1.3em;
    color : white;
    opacity: 0.5;
  }
</style>