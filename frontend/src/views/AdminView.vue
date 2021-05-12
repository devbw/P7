<template>
<div class="background">
  <div class="form-login__div-container">
    <img src="../assets/icon_white.png"/>
    <p>Votre reseau social !</p>
  </div>
  <div>
    <div id="connect-text">ADMIN</div>
  </div>
  <div class="form-login__input-container">
    <router-link tag="button" to="/" class="button">AJOUTER UN COMPTE</router-link>
    <router-link tag="button" to="/admin-delete" class="button">SUPPRIMER UN COMPTE</router-link>
    <router-link tag="button" class="button_home" to='/'>RETOURNER A L'ACCUEIL</router-link>
  </div>
  <div>
    <img src="../assets/icon-left-font-monochrome-white.png" alt="logo-entreprise"/>
  </div>
</div>
</template>

<script>
export default {
    name: 'AdminView',
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
  .form-login__input-container{
    width: 280px;
    max-width: 280px;
    height: 57px;
    margin-top: 12px;
  }
  .button{
      margin-top: 10px;
  }
</style>