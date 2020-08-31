<template>
  <div>
    <div class="card">
      <img :src="canidate.img" alt="" />
      <h3 class="name">{{ canidate.name }}</h3>
      <p class="title">{{ canidate.title }}</p>
      <button class="cast-vote" @click="upVote(canidate.doc)">
        <Roller :text="String(canidate.votes)"></Roller>
      </button>
    </div>
  </div>
</template>

<script>
import Roller from 'vue-roller'
import { db, fv } from '../firebaseInit'

export default {
  components: {
    Roller
  },
  props: {
    canidate: {
      type: Object,
      required: true
    }
  },
  methods: {
    upVote(doc) {
      const increment = fv.increment(1)

      // Update database
      db.collection('canidates')
        .doc(doc)
        .update({ votes: increment })
        .catch(error => console.log(error))

      // Update data object
      this.canidate.votes++
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  padding: 0 0 20px 0;
}
button {
  cursor: pointer;
  background: rgb(218, 218, 255);
  color: blue;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 8px 15px;
  border-radius: 10px;
}
</style>
