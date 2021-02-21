<!-- 親コンポーネント -->

<template>
  <div style="padding: 10rem">
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

    <h2>イベントフォーム</h2>
    <EventTitle v-model="eventData.title"></EventTitle>
    <EventTitle
      :value="eventData.title"
      @input="eventData.title=$event"
    ></EventTitle>

    <div>
      <h2>最大人数</h2>
      <label for="maxNumber">タイトル</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>
    </div>

    <div>
      <h2>主催者</h2>
      <label for="host">タイトル</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベント詳細</label>
      <textarea name="detail" id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>
      <input id="isPrivate" type="checkbox" v-model="eventData.isPrivate">
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20" v-model="eventData.target">
      <label for="10">20代</label>
      <input type="checkbox" id="30" value="30" v-model="eventData.target">
      <label for="10">30代</label>
      <p> {{ eventData.target }}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>{{ eventData.price }}</p>

      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader";
import EventTitle from "./EventTitle.vue";
export default {
  data() {
    return {
      number: 20,
      locations: ["東京", "京都", "大阪"],
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "京都"
      }
    };
  },
  components: {
    LikeHeader, //ES6
    EventTitle,
  },
  methods: {
    inermentNumber(value) {
      this.number = value
    }
  }
}
</script>
