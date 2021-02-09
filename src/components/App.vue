<!-- 親コンポーネント -->

<template>
  <div>
    <LikeHeader>
      <h2>とーたるいいね数（slotと置き換わる）</h2>
      <h3>{{ number }}</h3>
    </LikeHeader>
    <LikeNumber v-bind:totalNumber="number" v-on:my-click="inermentNumber"></LikeNumber>
    <LikeNumber v-bind:totalNumber="number" v-on:my-click="inermentNumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader"
export default {
  data() {
    return {
      number: 20
    };
  },
  components: {
    LikeHeader //ES6
  },
  methods: {
    inermentNumber(value) {
      this.number = value
    }
  }
}
</script>

<style scoped>
  div {
    border: 5px solid blue
  }
</style>
