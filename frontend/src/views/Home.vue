<template>
  <div class="main_container_flex">
    <div><home-header/></div>
    <div class="content">
      <div class="post_content slide-in-bottom" v-for="(post, idx) in posts" :key="idx">
        <div class="div_post_name">{{ post.username }}</div>
        <div class="div_post_content">{{ post.post_content }}</div>
        <div class="post_date" style="display: block">{{ convertDate(post.created) }} </div>
        <div class="icon_actions">
          <button v-if="post.userliked" class="reset_button liked_button" @click="unlikePost(post.id)">
            <span>{{ post.nblikes }}</span>
            <i class="fa fa-heart"></i>
          </button>
          <button v-else class="reset_button" @click="likePost(post.id)">
            <span>{{ post.nblikes }}</span>
            <i class="far fa-heart"></i>
          </button>
          <router-link tag="button" :to="`/single/${post.id}`" class="reset_button">
            <span>{{ post.nbcomments }}</span>
            <i class="far fa-comments"></i>
          </router-link>
        </div>
      </div>
      <button class="div_button_reload">
        <i @click="updatePost()" class="fas fa-sync"></i>
      </button>
    </div>
    <div><home-footer/></div>
  </div>
</template>

<script>
import HomeHeader from '@/components/header_footer/header.vue'
import HomeFooter from '@/components/header_footer/footer.vue'
import http from '@/services/http'
import moment from 'moment';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      posts: [],
      processing: false,
    }
  },
  created() {
    this.updatePost();
  },
  methods: {
    updatePost() {
      http().get('/post', {
        params: {
          offset: this.posts.length,
        },
      })
      .then(response => {
        this.posts = this.posts.concat(response.data);
      })
      .catch(error => console.log(error))
    },
    likePost(post_id) {
      if(this.processing === false) {
        this.processing = true;
        http().post(`/post/${post_id}/likes`)
        .then(() => {
          const index = this.posts.findIndex(element => post_id === element.id);
          this.posts[index].nblikes++;
          this.posts[index].userliked = 1;
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.processing = false;
        })
      }
    },
    unlikePost(post_id) {
      if(this.processing === false) {
        this.processing = true;
        http().delete(`/post/${post_id}/likes`)
        .then(() => {
          const index = this.posts.findIndex(element => post_id === element.id);
          this.posts[index].nblikes--;
          this.posts[index].userliked = 0;
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.processing = false;
        })
      }
    },
    convertDate(date) {
      return moment(date).subtract(10, 'days').calendar();
    },
  }
}
</script>

<style>
span{
  font-size: 1.5em;
  margin-right: 3px;
  color: #fd2d01;
}
.div_button_reload{
  margin: 8px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
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
.div_post_content{
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  margin-top: 5px;
}
.div_post_name{
  color: #fd2d01;
  font-weight: bold;
}
.fa-sync{
  font-size: 1.5em;
  color: #fd2d01;
  padding: 10px;
}
.fa-heart{
  color: rgb(95, 95, 95);
  font-size: 1.5em;
  padding-top: 7px;
}
.far:hover{
  color: #fd2d01;
}
.fa-comments{
  font-size: 1.5em;
  padding-top: 7px;
  color: rgb(95, 95, 95);
}
.icon_actions{
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgb(167, 167, 167);
  margin-top: 15px;
}
.liked_button > i{
  color:#fd2d01;
}
.post_date{
  color: #363636;
  font-size : 0.7em;
  margin-top: 5px;
}
</style>
