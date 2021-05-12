<template>
    <div class="bloc-modale" v-if="afficher">

        <div @click="toggleModale" class="overlay" ></div>

        <div class="modale">

            <h2>Votre commentaire</h2>
            <textarea v-model="contentComment" class="text_comment" placeholder="Ecrivez ici"></textarea>
            <div class="container_modale_button">
                <button @click="toggleModale" type="button" class="modale_button">Annuler</button>
                <button type="button" class="modale_button" @click="postComment()">Envoyer</button>
            </div>

        </div>

    </div>
</template>

<script>
import http from '@/services/http'

export default {
    name: 'Modale',
    data() {
        return {
            contentComment : '',
        }
    },
    props: {
        afficher : {
            type: Boolean,
            required: true,
        },
        toggleModale : {
            type: Function,
            required: true,
        },
        getComments : {
            type: Function,
            required: true,
        }
    },
    created() {
        this.getPostId();
    },
    methods: {
        postComment() {
            http().post(`/post/${this.getPostId()}/comment`, {
                comment: this.contentComment
            })
            .then(() => {
                this.contentComment = ''
                this.toggleModale();
                this.getComments();
            })
            .catch(error => console.log(error))
        },
        getPostId() {
            let postId = this.$route.params.id;
            return postId;
        },
    }
}
</script>

<style scoped>
    .modale{
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        min-height: 300px;
        position: fixed;
        background-color: white;
        border-radius: 10px;
    }
    .bloc-modale{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h2{
        color: #9742EC;
        padding: 10px;
    }
    .container_modale_button{
        display: flex;
        justify-content: right;
    }
    .modale_button{
        background-color: #9742EC;
        border:none;
        border-radius: 5px;
        color:white;
        font-size: 14px;
        margin: 7px 7px 7px 0px;
        padding: 5px;
        cursor: pointer;
    }
    .overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .text_comment{
        min-height: 200px;
        width: 90%;
        margin: 0px 15px;
        color:#9742EC;
        border:none;
    }
</style>