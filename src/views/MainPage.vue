<template>
  <div>
    <div class="title-container">
        <h1>Home</h1>
        <div>장다미님</div>
    </div>
    <TweetBar/>
    <FeedList/>
  </div>
</template>

<script>
import FeedList from '@/components/FeedList.vue'
import TweetBar from '@/components/TweetBar.vue'

export default {
    name: "MainPage",
    components: {TweetBar, FeedList}
}
</script>

<style>
.title-container {
    width: 300px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
</style>