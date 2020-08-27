<template>
  <section class="canidates">
    <Vote
      v-for="canidate in sortedCanidates"
      :key="canidate.id"
      :canidate="canidate"
      @click="upVote(canidate.id)"
    />
  </section>
</template>

<script>
import Vote from '@/components/Vote'

export default {
  components: {
    Vote
  },
  props: {
    sortedCanidates: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.canidates {
  display: flex;
  gap: 30px;
  justify-content: center;
}
</style>
