<template>
<div>
<p>if you trying to edit this page make sure if ID is exist.</p>
<form v-on:submit.prevent="onSubmit(porfolioPost)">
    <label>id = title:</label>
        <select v-model="porfolioPost.title"
                @click="getTitlelist()">
            <option v-for="title in titleList" v-bind:key="title">{{title}}</option>
        </select>
    <br>
    <label>date:</label>
        <input type="text" placeholder="시작 년" name="date-start-year" v-model="porfolioPost.date.start.year" id="date-start-year">
        <input type="text" placeholder="시작 월" name="date-start-month" v-model="porfolioPost.date.start.month" id="date-start-month">
        ~
        <input type="text" placeholder="종료 년" name="date-end-year" v-model="porfolioPost.date.end.year" id="date-end-year">
        <input type="text" placeholder="종료 월" name="date-end-month" v-model="porfolioPost.date.end.month" id="date-end-month">
    <br>
    <label>image:</label>
        <input type="file" name="" @change="uploadImage($event.target.files)" accept="image/*">
    <br>
    <label>keyword:</label>
        <input type="text" name="text" v-model="porfolioPost.keyword" id="keyword">  
    <input type="submit" value="전송">
    <br>
    <img v-if="porfolioPost.thumbnailUrl" v-bind:src="porfolioPost.thumbnailUrl">
</form>
</div>
</template>
<script>
import { db, storage } from "@/plugins/firebaseInit.js";
export default {
  components: {},
  data() {
    return {
      porfolioPost: {
        title: "",
        date: {
          start: {
            year: "",
            month: ""
          },
          end: {
            year: "",
            month: ""
          }
        },
        keyword: "",
        thumbnailUrl: ""
      },
      uploading: false,
      titleList: []
    };
  },
  created() {
    let self = this;
    let titleList;
    const postsRef = db.collection("Portfolio").doc("Posts");
    postsRef.get().then(function(snapshot) {
      for (var key in snapshot.data()) {
        self.titleList.push(key);
      }
    });

    console.log(self.titleList);
  },
  methods: {
    onSubmit(data) {
      if (this.uploading) {
        alert("이미지가 업로드중입니다. 잠시 후 다시 해라");
        return -1;
      }

  
    },
    uploadImage(fileList) {
      //upload image
      if (fileList) {
        this.uploading = true; //prevent submit while its uploading
        const ref = storage.ref();
        const thumbnailFile = fileList[0];
        const name = +new Date() + "-" + thumbnailFile.name; //prevent duplicated data with current time
        ref
          .child("portfolio/thumbnails/" + name)
          .put(thumbnailFile)
          .then(snapshot => {
            this.uploading = false;
            alert("업로드 성공!");
            snapshot.ref.getDownloadURL().then(url => {
              // console.log(this.porfolioPost);
              this.porfolioPost.thumbnailUrl = url;
              console.log(url);
            });
          });
      }
    },
    getTitlelist() {}
  },
  mounted() {
    //   this.onSubmit(this.history);
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 10vw;
}
</style>
