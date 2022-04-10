<template>

    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <!-- <img src="{{ post.image }}" alt="image"> -->
        <p>{{ post.slug }}</p>

        <router-link :to='{name: post, params: {id:post.id}}'>Dettagli</router-link>
    </div>

</template>

<script>
export default {
    name: 'Post',
    props: ['post'],
    methods:{
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/post/' + this.$route.params.id).then( (res) => {
                this.post = res.data;
            })
        }
    },
    data(){
        return{
            post: {},
        }
    }
}
</script>

