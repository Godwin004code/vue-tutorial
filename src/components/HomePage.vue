<template>
    <section>
        <div v-for="data in data" :key="data.id">
        <h2>
            <router-link :to="{name: 'SinglePost', params: {id: data.id}}">
                {{data.title}}
            </router-link>
        </h2>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(['data'])
    }
}
</script>
<style scoped>
h2 {
    margin-top: 2rem;
}
</style>