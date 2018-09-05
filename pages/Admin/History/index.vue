<template>
    <form v-on:submit.prevent="onSubmit(history)">
        <label>year:</label>
            <input type="number" name="year" v-model="history.year" id="year">
        <br>
        <label>month:</label>
            <input type="number" name="month" v-model="history.month" id="month">
        <br>
        <label>day:</label>
            <input type="number" name="day" v-model="history.day" id="day">
        <br>
        <label>title:</label>
            <input type="text" v-model="history.title" name="title" id="title">
        <br>
        <label>detail:</label>
            <input type="checkbox" v-model="history.detail" name="title" id="title">
        <br>
        <input type="radio" id="bio" value="bio" v-model="history.type">
        <label for="bio">bio</label>
        <br>
        <input type="radio" id="edu" value="edu" v-model="history.type">
        <label for="two">edu</label>
        <br>
        <input type="radio" id="pro" value="pro" v-model="history.type">
        <label for="pro">work(pro)</label>
        <br>
        <input type="radio" id="alba" value="alba" v-model="history.type">
        <label for="pro">work(alba)</label>
        <br>
        <input type="radio" id="etc" value="etc" v-model="history.type">
        <label for="etc">etc</label>
        <br>
        <input type="submit" value="전송">
    </form>
</template>
<script>
import { db } from "@/plugins/firebaseInit.js";
export default {
  components: {},
  data() {
    return {
      history: {
        year: 1987,
        month: 2,
        day: 0,
        title: "",
        type:"etc",
        detail: false
      }
    };
  },
  methods: {
    
    onSubmit: (data) => {
      var docName = data.year + "-" + (data.month > 9? data.month: "0"+data.month.toString()) + "-" + data.day;
      db
        .collection("History")
        .doc(docName)
        .set(data)
        .then(()=>{
         alert(docName+"업로드 완료");   
        });
    }
  },
  mounted() {
    //   this.onSubmit(this.history);
  }
};
</script>
<style lang="scss">
</style>
