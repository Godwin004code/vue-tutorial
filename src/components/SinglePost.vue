
<template>
    <section>
        <h2>{{test.title}}</h2>
        <p>{{test.detail}}</p>
    </section>
</template>

<script>
import store from '../store/index'

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
    test() {
        return store.state.data.find((item) => item.id === this.id)
    }
  },
}
</script>