<template>
  <div>
    <div>
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

</style>