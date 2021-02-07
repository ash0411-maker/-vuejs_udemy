<template>
  <div>
    <p>いいね{{ number }}</p>
    <button @click="increment">プラスされるやで</button>
  </div>
</template>

<script>
export default {
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
