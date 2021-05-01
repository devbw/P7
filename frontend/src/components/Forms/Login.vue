<template>
  <div class='hello'>
    <div class="form-login__input-container">
      <input v-model="email" class="input" type='email' name="email" id="email" placeholder="E-mail">
    </div>

    <div class="form-login__input-container">
      <input v-model="password" class="input" type='password' name="password" id="password" placeholder="Mot de passe">
    </div>

    <div class="form-login__input-container">
      <button @click="send()" class="button" type="button">ME CONNECTER</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'Formlogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    send() {
      axios.post('http://localhost:3000/api/user/login', {
          email: this.email,
          password: this.password
        })
        .then( (response) => {
          let token = response.data.token;
          localStorage.setItem('token', token);
          this.$router.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
  .hello{
    display: flex;
    flex-direction: column;
  }
  .input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 23px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 255, 255, 0.28);
    color: white;
    font-size: 18px;
  }
  .form-login__input-container{
    width: 280px;
    max-width: 280px;
    height: 57px;
    margin-top: 12px;
  }
</style>