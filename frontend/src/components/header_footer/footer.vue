<template>
    <div class="container_header">
        <div>
            <router-link tag="i" to="/" class="fas fa-home"></router-link>
        </div>
        <div>
            <i class="fas fa-plus"></i>
        </div>
        <div>
            <i class="fas fa-user"></i>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Homefooter'
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
    }
</style>