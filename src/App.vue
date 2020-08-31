<template>
  <div id="app">
    <header>
      <div>
        <iframe
          src="https://giphy.com/embed/f2Xvlh0MivT20"
          width="100%"
          height="auto"
          frameBorder="0"
          class="giphy-embed"
        ></iframe>
      </div>
      <h1>The 2020 Election</h1>
      <div>
        <iframe
          src="https://giphy.com/embed/lQ6KHKqQaPrx7CBhPD"
          width="100%"
          height="auto"
          frameBorder="0"
          class="giphy-embed"
        ></iframe>
      </div>
      <p>
        <a
          href="https://giphy.com/gifs/election-voting-election2020-lQ6KHKqQaPrx7CBhPD"
          >via GIPHY</a
        >
      </p>
    </header>

    <VoteList :sortedCanidates="sortedCanidates" />
  </div>
</template>

<script>
import VoteList from '@/components/VoteList'
import db from './firebaseInit'

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
          votes: 0,
          doc: 'NFwkv07uc2NEi6STR5LD'
        },
        {
          id: 2,
          name: 'Spyler',
          title: 'Household Items',
          img: require('@/assets/skyler.jpg'),
          votes: 0,
          doc: 'ctH9ZSQUKakF5ClLP7KR'
        }
      ]
    }
  },
  mounted() {
    // synch browser with db
    db.collection('canidates')
      .get()
      .then(query => {
        // get the name and # of votes for each canidate
        query.forEach(doc => {
          const dbCanidate = {
            name: doc.data().name,
            vote: doc.data().votes
          }
          // lookup the canidate that matches the name in the db
          const foundCanidate = this.canidates.find(
            element => element.name == dbCanidate.name
          )

          // update the correct # of votes for each canidate
          foundCanidate.votes = dbCanidate.vote
        })
      })
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
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  header {
    display: flex;
    justify-content: center;
    margin: 50px;
  }
  h1 {
    color: white;
    background-color: red;
    padding: 8px 15px;
    align-self: center;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(228, 125, 125, 1) 51%,
      rgba(0, 16, 255, 1) 100%
    );
  }
}
</style>
