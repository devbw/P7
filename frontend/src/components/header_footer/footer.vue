<template>
    <div class="container_header">
        <div>
            <router-link tag="i" to="/" class="fas fa-home"></router-link>
        </div>
        <div>
            <router-link tag="i" to="/post" class="fas fa-plus"></router-link>
        </div>
        <div>
            <router-link tag="i" to="/account" class="fas fa-user"></router-link>
        </div>
        <div v-if="isUserAdmin">
            <router-link tag="i" to="/admin" class="fas fa-cog"></router-link>
        </div>
    </div>
</template>

<script>

    import decodeToken from '@/services/decode'
    import http from '@/services/http'

    export default{
        name: 'Homefooter',
        data() {
            return {
                decoded :'',
                admin: '',
                isUserAdmin: false,
            }
        },
        methods: {
            decode() {
                let userToken = localStorage.getItem('token');
                this.decoded = decodeToken(userToken);
                this.getOneUser();
            },
            getOneUser() {
                http().get(`/user/${this.decoded.userId}`)
                .then((response) => {
                    this.admin = response.data[0].user_admin;
                    this.isAdmin();
                })
                .catch(error => console.log(error));
            },
            isAdmin() {
                if(this.admin == 1) {
                    this.isUserAdmin = true;
                }
                if(this.admin == 0) {
                    this.isUserAdmin = false;
                }
            }
        },
        created() {
            this.decode();
        }
    }

</script>

<style scoped>
    .container_header{
        background-color: #9742EC;
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-between;
    }
    .fas{
        color: white;
        padding: 15px;
        font-size: 1.2em;
        cursor: pointer;
    }
</style>