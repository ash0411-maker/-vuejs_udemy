<template>
  <div>
    <slot name="hello"></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="num"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>

<style scoped>
  div {
    border: 5px solid green
  }
</style>
