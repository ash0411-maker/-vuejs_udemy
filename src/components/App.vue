<!-- 親コンポーネント -->

<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number}}</p>
    <LikeNumber v-bind:totalNumber="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber v-bind:totalNumber="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader"
export default {
  data() {
    return {
      number: 14
    };
  },
  components: {
    LikeHeader //ES6
  }
}
</script>

<style scoped>
  div {
    border: 5px solid blue
  }
</style>
