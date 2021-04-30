<template>
  <div>
    <div class="header"><home-header/></div>
    <div class="content">
    <div>
      <i @click="updatePost()" class="fas fa-sync"></i>
    </div>
      <div class="post_content" v-for="(post, idx) in posts" :key="idx">
        <div class="div_post_name">{{ post.user_id }}</div>
        <div class="div_post_content">{{ post.post_content }}</div>
      </div>
    </div>
    <div class="footer"><home-footer/></div>
  </div>
</template>

<script>
import HomeHeader from '@/components/header_footer/header.vue'
import HomeFooter from '@/components/header_footer/footer.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      posts: [],
      token : localStorage.getItem('token')
    }
  },
  methods: {
    updatePost() {
      axios.get('http://localhost:3000/api/post')
      .then(response => this.posts = response.data)
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>
img{
  width: 105px;
}
p{
  font-size: 1.3em;
  color : white;
  opacity: 0.5;
}
.log-button__div-container{
  display: flex;
  flex-direction: column;
  width: 280px;
  max-width: 280px;
  height: 57px;
  margin-top: 12px;
}
.footer{
  position: fixed;
  bottom: 0;
  width:100%;
}
.header{
  position: fixed;
  top: 0;
  width: 100%;
}
.content{
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.post_content{
  margin-top: 20px;
  padding: 20px 10px 20px 10px;
  width: 85%;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.div_post_content{
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  margin-top: 5px;
}
.div_post_name{
  color: #9742EC;
  font-weight: bold;
}
.fa-sync{
  font-size: 1.5em;
  color: #9742EC;
  padding: 10px;
}
</style>