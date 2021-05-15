<template>
  <div class="main_container_flex">
    <div><home-header/></div>
    <div class="content">
      <div class="post_content slide-in-bottom" v-for="(user, idx) in users" :key="idx">
        <div class="div_post_name">{{ user.username }}</div>
        <div class="div_post_name">ID : {{ user.id }}</div>
        <div style="display: block">Créé le : {{ convertDate(user.created) }}</div>
        <button @click="deleteOne(user.id)" class="delete_button">SUPPRIMER</button>
      </div>
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
  name: 'AdminDelete',
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    getUsers() {
      http().get('/user/admin/users')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    convertDate(date) {
      return moment(date).subtract(10, 'days').calendar();
    },
    deleteOne(id) {
      http().delete(`user/delete/${id}`)
      .then(() => {
        /*let usersIndex = this.users.indexOf(id);
        usersIndex.splice(id, 1);*/
        this.getUsers();
      })
      .catch(() => {
        console.log("Une erreur est survenue");
      })
    }
  },
  created() {
    this.getUsers();
  }
}
</script>

<style>
span{
  font-size: 1.5em;
  margin-right: 3px;
  color: #9742EC;
}
.div_post_name{
  color: #9742EC;
  font-weight: bold;
  font-size: 20px;
}
.delete_button{
  margin: 10px 0px 0px 0px;
  color : white;
  background-color: #9742EC;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  cursor: pointer;
}
</style>
