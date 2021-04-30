<template>
    <div class="container_header">
        <div>
            <img src="../../assets/icon_white_groupo.png" alt="logo-entreprise" class="icon_white"/>
        </div>
        <div>
            <i class="fas fa-door-open"></i>
        </div>

    </div>
</template>

<script>
    export default{
        name: 'Homeheader'
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
</style>