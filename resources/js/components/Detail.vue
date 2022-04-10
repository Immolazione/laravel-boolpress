<template>
   <div>
       <Post />
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: 'Detail',
    props: ['post'],
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
}
</script>

<style>

</style>