<template>
  <section class="canidates">
    <transition-group name="flip-list" class="canidates">
      <Vote
        v-for="canidate in sortedCanidates"
        :key="canidate.doc"
        :canidate="canidate"
      />
    </transition-group>
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

.flip-list-move {
  transition: transform 1s;
}
</style>
