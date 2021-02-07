<!-- 親コンポーネント -->

<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number}}</p>
    <LikeNumber v-bind:num="number"></LikeNumber>
    <LikeNumber v-bind:num="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader"
export default {
  data() {
    return {
      number: 100
    };
  },
  components: {
    // LikeHeader: LikeHeader ES5
    LikeHeader //ES6
  }
}
</script>

<style scoped>
  div {
    border: 5px solid blue
  }
</style>
