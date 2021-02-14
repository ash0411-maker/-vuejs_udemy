<template>
  <div>
    <slot name="hello"></slot>
    <slot></slot>
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
