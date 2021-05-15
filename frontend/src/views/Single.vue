<template>
    <div class="main_container_flex">
      <home-header/>
      <div class="content">
        <div class="post_content add">
          <div class="container_action_buttons" v-if="isUserAdmin || isCurrent">
            <i class="fas fa-pencil-alt"></i>
            <i class="fas fa-times" @click="deletePost(post.id)"></i>
          </div>
          <div class="div_post_name">{{ post.username }}</div>
          <div class="div_post_content">{{ post.post_content }}</div>
          <div class="comment_date">{{ convertDate(post.created) }}</div>
        </div>
        <modale :afficher="afficher" :toggleModale="toggleModale" :getComments="getComments"></modale>
        <div>
          <button @click="toggleModale()" class="post_button">Commenter</button>
        </div>
        <div class="comment_content slide-in-bottom" v-for="(comment, idx) in comments" :key="idx">
          <div class="container_action_buttons" v-if="isUserAdmin || (comment.user_id === currentId)">
            <i class="fas fa-pencil-alt"></i>
            <i class="fas fa-times" @click="deleteComment(post.id, comment.id)"></i>
          </div>
          <div class="div_post_name">{{ comment.username }}</div>
          <div class="div_post_content">{{ comment.comment }}</div>
          <div class="comment_date">{{ convertDate(comment.created) }}</div>
        </div>
      </div>
      <home-footer/>
    </div>
</template>

<script>
import HomeHeader from '@/components/header_footer/header.vue'
import HomeFooter from '@/components/header_footer/footer.vue'
import Modale from '@/components/Modale.vue'
import http from '@/services/http'
import decodeToken from '@/services/decode'
import moment from 'moment';

export default {
    name: 'Single',
    components: {
    HomeHeader,
    HomeFooter,
    Modale
    },
    data() {
      return {
        post: [],
        userId: '',
        comments: [],
        writeComment: '',
        afficher: false,
        decoded :'',
        admin: '',
        isUserAdmin: false,
        isCurrent : false,
        isCurrentComment: false,
        currentId : '',
        postUser: '',
        commentUserId: '',
      }
    },
    created() {
      this.getPostId();
      this.getOnePost();
      this.getComments();
      this.decode();
    },
    methods: {
      getOnePost() {
        http().get(`/post/${this.getPostId()}`)
        .then( (response) => {
          this.post = response.data;
          this.postUser = this.post.user_id;
        })
        .catch( (error) => console.log(error))
      },
      getPostId() {
        let postId = this.$route.params.id;
        return postId;
      },
      getComments() {
        http().get(`/post/${this.getPostId()}/comment`)
        .then((response) => {
          this.comments = response.data;
          this.commentUserId = response.data[0].user_id;
        })
        .catch(error => console.log(error))
      },
      toggleModale() {
        this.afficher = !this.afficher;
      },
      deletePost(id) {
        http().delete(`post/${id}`)
        .then( () => {
          this.$router.push("/");
        })
        .catch( (error) => console.log(error));
      },
      deleteComment(postId, commentId) {
        http().delete(`post/${postId}/comment/${commentId}`)
        .then((response) => {
          console.log(response);
          this.getComments();
        })
        .catch((error) => console.log(error));
      },
      decode() {
          let userToken = localStorage.getItem('token');
          this.decoded = decodeToken(userToken);
          this.getOneUser();
      },
      getOneUser() {
          http().get(`/user/${this.decoded.userId}`)
          .then((response) => {
              this.admin = response.data[0].user_admin;
              this.currentId = response.data[0].id;
              this.isAdmin();
              this.isCurrentUser();
              this.isCurrentUserComment();
          })
          .catch(error => console.log(error));
      },
      isCurrentUser() {
        if(this.postUser === this.currentId) {
          this.isCurrent = true;
        } else {
          this.isCurrent = false;
        }
      },
      isCurrentUserComment() {
        if(this.commentUserId === this.currentId) {
          this.isCurrentComment = true;
        } else {
          this.isCurrentComment = false;
        }
      },
      isAdmin() {
          if(this.admin == 1) {
              this.isUserAdmin = true;
          }
          if(this.admin == 0) {
              this.isUserAdmin = false;
          }
      },
      convertDate(date) {
        return moment(date).subtract(10, 'days').calendar();
      },
    }
}
</script>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
  }
  .add{
    padding-top: 15px 0px 15px 0px;
  }
  .comment_content{
    margin-top: 20px;
    padding: 5px 10px 15px 10px;
    width: 75%;
    max-width: 600px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .post_button{
    background-color: #9742EC;
    color: white;
    margin-top: 20px;
    font-size: 14px;
    border-radius: 10px;
    padding: 5px 25px;
    border: 1px solid #9742EC;
    cursor: pointer;
  }
  .container_action_buttons{
    display : flex;
    justify-content: right;
    align-items: center;
  }
  .fas{
    color:#9742EC;
    margin-left: 15px;
    cursor: pointer;
  }
  .fa-times{
    font-size: 21px;
    padding:0px;
  }
  .postcomment{
    height: 40px;
  }
  .comment_date{
    color: #363636;
    font-size : 0.7em;
    margin-top: 5px;
  }
</style>