<template>
  <div>
    <div class="card">
      <img :src="canidate.img" alt="" />
      <h3 class="name">{{ canidate.name }}</h3>
      <p class="title">{{ canidate.title }}</p>
      <button class="cast-vote" @click="upVote">{{ canidate.votes }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canidate: {
      type: Object,
      required: true
    }
  },
  methods: {
    upVote() {
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
  width: 50px;
}
</style>
