<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body {
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.form-login__div-container{
  margin-top: 45px;
}
.button{
  width: 100%;
  height: 100%;
  background-color: white;
  color: #9742EC;
  font-size: 18px;
  border-radius: 10px;
  border: none;
}
#login-text{
  color: white;
  margin-top: 15px;
}
.background{
  background-color: #9742EC;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
