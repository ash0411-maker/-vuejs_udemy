<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="increment">プラスされるやで</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  computed: {
    halfNumber: function() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment: function() {
      // this.totalNumber += 1 子が親のデータを変えることはできない。
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>
