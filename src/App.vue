<template>
  <div id="app">
    <h1>The 2020 Election</h1>
    <VoteList :sortedCanidates="sortedCanidates" />
  </div>
</template>

<script>
import VoteList from '@/components/VoteList'
export default {
  name: 'App',
  components: {
    VoteList
  },
  data() {
    return {
      canidates: [
        {
          id: 1,
          name: 'Pingu',
          title: 'Penguin',
          img: require('@/assets/pingu.jpg'),
          votes: 3
        },
        {
          id: 2,
          name: 'Gumpy',
          title: 'Humanoid',
          img: require('@/assets/skyler.jpg'),
          votes: 5
        }
      ]
    }
  },
  computed: {
    sortedCanidates() {
      let sortCanidates = this.canidates
      return sortCanidates.sort((a, b) => {
        return b.votes - a.votes
      })
    }
  }
}
</script>

<style lang="scss">
body {
  background-image: url('./assets/bg.jpg');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
