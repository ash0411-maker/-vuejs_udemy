<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="increment">プラスされるやで</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    halfNumber: function() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment: function() {
      // this.totalNumber += 10
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

<style scoped>
  div {
    border: 5px solid pink
  }
</style>
