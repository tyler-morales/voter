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

<style lang="scss" scoped></style>
