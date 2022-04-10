<template>

    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <!-- <img src="{{ post.image }}" alt="image"> -->
        <p>{{ post.slug }}</p>
    </div>

</template>

<script>
export default {
    name: 'Post',
    props: ['post']
}
</script>

