<!-- 親コンポーネント -->

<template>
  <div>
    <LikeHeader>
      <template v-slot:hello>
        <h2>ウス</h2>
      </template>
      <h3>デフォルトのスロッと</h3>
      <template v-slot:num>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber v-bind:totalNumber="number" v-on:my-click="inermentNumber"></LikeNumber>
    <LikeNumber v-bind:totalNumber="number" v-on:my-click="inermentNumber"></LikeNumber>

    <div>
      <h2>イベントフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <p>{{ eventData.title }}</p>
    </div>
        <div>
      <h2>最大人数</h2>
      <label for="maxNumber">タイトル</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader"
export default {
  data() {
    return {
      number: 20,
      eventData: {
        title: "タイトル",
        maxNumber: 0
      }
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
