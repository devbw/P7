<template>
<div class="background">
  <div class="form-login__div-container">
    <img class="scale-up-center" src="../assets/icon_white.png"/>
    <p>Votre reseau social !</p>
  </div>
  <div>
    <div id="connect-text">JE M'INSCRIS !</div>
    <form-register />
  </div>
  <div>
    <router-link tag="div" to="/user/login" id="login-text">Déjà inscrit ? Connectez-vous ici !</router-link>
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
  .form-login__div-container{
    margin-top: 15px;
  }
  #login-text{
    margin-bottom: 25px;
  }
</style>