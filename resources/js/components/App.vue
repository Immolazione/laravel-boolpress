<template>
    <div class="d-flex">
        <Post :post='post' v-for="post in posts" :key="post.id">
    </div>
</template>

<script>
    import Post from './Post.vue'
    export default {
        name: 'App',
        components: {Post},
        data(){
            return{
                posts: [],
            }
        },
        methods:{
            getPosts(){
                axios.get('http://127.0.0.1:8000/api/posts').then( (res) => {
                    this.posts = res.data;
                })
            }
        },
        mounted(){
            this.getPosts();
        }
    }
</script>
