<template>
    <div class="container_header">
        <div>
            <img src="../../assets/icon_white_groupo.png" alt="logo-entreprise" class="icon_white"/>
        </div>
        <button @click="logout()" class="reset_button">
            <i class="fas fa-door-open"></i>
        </button>

    </div>
</template>

<script>
    export default{
        name: 'Homeheader',
        methods: {
            logout() {
                localStorage.removeItem('token');
                this.$router.push('/user/login');
            }
        }
    }
</script>

<style scoped>
    .container_header{
        background-color: #9742EC;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
    }
    .fa-door-open{
        color: white;
        padding: 20px;
        font-size: 1.3em;
    }
    .icon_white{
        padding: 20px;
    }
    img{
        width: 105px;
    }
</style>