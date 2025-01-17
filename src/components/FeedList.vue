<template>
  <div class="feed-list-container">
    <feedItem v-for="i in 10" :key="i"/>
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue"

export default {
    name: "FeedList",
    components: { FeedItem },
}
</script>

<style scoped>
.feed-list-container {
    height: 60vh;
    overflow-y: auto;
}

</style>