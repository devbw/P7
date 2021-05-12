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
  position: relative;

}
.main_container_flex{
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: scroll;
  scrollbar-width: none;
   -ms-overflow-style: none;
}
.content::-webkit-scrollbar{
  display: none;
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
  cursor: pointer;
}
.button_home{
  width: 100%;
  height: 100%;
  background-color: #9742EC;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  border-color: white;
  margin-top: 10px;
  cursor: pointer;
}
.button_home:hover{
  background-color: white;
  color: #9742EC;
  border:none;
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
.reset_button{
  background: transparent;
  border: none;
  cursor: pointer;
}
.post_content{
  margin-top: 20px;
  padding: 20px 10px 10px 10px;
  width: 85%;
  max-width: 700px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.slide-in-bottom {
	-webkit-animation: slide-in-bottom 1s ease-in-out;
	animation: slide-in-bottom 1s ease-in-out;
}
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
.scale-up-center {
	-webkit-animation: scale-up-center 3s cubic-bezier(0.390, 0.575, 0.565, 1.000);
	animation: scale-up-center 3s cubic-bezier(0.390, 0.575, 0.565, 1.000);
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

</style>
