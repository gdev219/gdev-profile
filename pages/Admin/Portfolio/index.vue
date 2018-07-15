<template>
    <form v-on:submit.prevent="onSubmit(portfolioPreview)">
        <label>title:</label>
            <input type="text" name="title" v-model="portfolioPreview.title" id="title">
        <br>
        <label>date:</label>
          <input type="text" placeholder="시작 년" name="date-start-year" v-model="portfolioPreview.date.start.year" id="date-start-year">
          <input type="text" placeholder="시작 월" name="date-start-month" v-model="portfolioPreview.date.start.month" id="date-start-month">
          ~
          <input type="text" placeholder="종료 년" name="date-end-year" v-model="portfolioPreview.date.end.year" id="date-end-year">
          <input type="text" placeholder="종료 월" name="date-end-month" v-model="portfolioPreview.date.end.month" id="date-end-month">
        <br>
        <label>image:</label>
          <input type="file" name="" @change="uploadImage($event.target.files)" accept="image/*">
        <br>
        <label>keyword:</label>
          <input type="text" name="text" v-model="portfolioPreview.keyword" id="keyword">  
        <input type="submit" value="전송">
        <br>
        <img v-if="portfolioPreview.thumbnailUrl" v-bind:src="portfolioPreview.thumbnailUrl">
    </form>
</template>
<script>
import { db, storage } from "@/plugins/firebaseInit.js";
export default {
  components: {},
  data() {
    return {
      portfolioPreview: {
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
      uploading: false
    };
  },
  methods: {
    onSubmit(data) {
      if (this.uploading) {
        alert("이미지가 업로드중입니다. 잠시 후 다시 해라");
        return -1;
      }
      
      console.log("ready data....");

      var batch = db.batch();
      var snippetData = {};
      snippetData[data.title] = data;
      var postData = {};
      postData[data.title] = "";
      var snippetRef = db.collection("Portfolio").doc("Snippets");
      var postsRef = db.collection("Portfolio").doc("Posts");

      console.log("sending data...");

      batch.update(postsRef, postData);
      batch.update(snippetRef, snippetData);
      
      batch.commit().then(function(snapshot) {
        console.log("data is succesfully saved..");
        console.log(snapshot);
      });
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
              // console.log(this.portfolioPreview);
              this.portfolioPreview.thumbnailUrl = url;
              console.log(url);
            });
          });
      }
    }
  },
  mounted() {
    //   this.onSubmit(this.history);
  }
};
</script>
<style lang="scss">
img {
  width: 10vw;
}
</style>
