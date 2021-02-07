<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="increment">プラスされるやで</button>
  </div>
</template>

<script>
export default {
  props: ["num"],
  computed: {
    halfNumber: function() {
      return this.num / 2
    }
  },
  data: function() {
    return {
      number: 100
    }
  },
  methods: {
    increment: function() {
      this.number += 10
    }
  }
}
</script>

<style scoped>
  div {
    border: 5px solid pink
  }
</style>
