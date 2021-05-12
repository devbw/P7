<template>
<div class="background">
  <div class="form-login__div-container">
    <img src="../assets/icon_white.png"/>
    <p>Votre reseau social !</p>
  </div>
  <div>
    <div id="connect-text">MON COMPTE</div>
  </div>
  <div class="form-login__input-container">
    <button @click="deleteAccount()" class="button" type="button">SUPPRIMER MON COMPTE</button>
    <router-link tag="button" class="button_home" to='/'>RETOURNER A L'ACCUEIL</router-link>
  </div>
  <div>
    <img src="../assets/icon-left-font-monochrome-white.png" alt="logo-entreprise"/>
  </div>
</div>
</template>

<script>
import http from '@/services/http'

export default {
  name: 'Delete',
  methods: {
    deleteAccount() {
      http().delete(`/user/delete`)
      .then(() => {
        localStorage.removeItem('token');
        this.$router.push("/user/register");
      })
      .catch((error) => {
        console.log(error);
      })
    },
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
  .form-login__input-container{
    width: 280px;
    max-width: 280px;
    height: 57px;
    margin-top: 12px;
  }
</style>