<template>
   <div>
       <Post :post="post" />
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: 'Detail',
    data(){
        return {
            post: {},
        }
    },
    components: {
        Post
    },
    methods:{
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/post/' + this.$route.params.id).then( (res) => {
            this.post = res.data;
        })
        }
    },
    mounted(){
        this.getPosts();
    }

}
</script>

<style>

</style>