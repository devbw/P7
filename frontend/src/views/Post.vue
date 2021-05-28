<template>
    <div class="main_container_flex">
        <home-header/>
        <div class="content">
            <span>PARTAGEZ VOS IDEES !</span>
            <div class="form-login__input-container">
                <textarea v-model="post_content" class="input" name="lastname" id="lastname" placeholder="Ecrivez votre post ici"></textarea>
            </div>
            <button @click="sendPost()" class="post_button">POSTER</button>
        </div>
        <home-footer/>
    </div>
</template>

<script>
import HomeHeader from '@/components/header_footer/header.vue'
import HomeFooter from '@/components/header_footer/footer.vue'
import http from '@/services/http'

export default {
    name: 'Post',
    components: {
    HomeHeader,
    HomeFooter
    },
    data() {
        return {
            post_content: '',
        }
    },
    methods: {
        sendPost() {
            http().post('/post', {
                post_content: this.post_content
            })
            .then(() => {
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
  .input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #fd2d01;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    border: none;
  }
  .form-login__input-container{
    width: 90%;
    max-width: 700px;
    height: 250px;
    margin-top: 12px;
  }
  .post_button{
    background-color: transparent;
    color: #fd2d01;
    font-size: 18px;
    border-radius: 10px;
    padding: 15px 35px;
    border: 1px solid #fd2d01;
    cursor: pointer;
  }
  .post_button:hover{
    background-color: #fd2d01;
    color: white;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>