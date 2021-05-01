<template>
  <div class='hello'>
    <div class="form-login__input-container">
      <input v-model="firstname" class="input" type='text' name="firstname" id="firstname" placeholder="Prénom">
    </div>

    <div class="form-login__input-container">
      <input v-model="lastname" class="input" type='text' name="lastname" id="lastname" placeholder="Nom">
    </div>

    <div class="form-login__input-container">
      <input v-model="email" class="input" type='email' name="email" id="email" placeholder="E-mail">
    </div>

    <div class="form-login__input-container">
      <input v-model="password" class="input" type='password' name="password" id="password" placeholder="Mot de passe">
    </div>

    <div class="form-login__input-container">
      <button @click="send()" class="button" type="button">M'INSCRIRE</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'Formregister',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    send() {
      axios.post('http://localhost:3000/api/user/signup', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        })
        .then( () => {
          this.$router.push("/user/login");
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