<template>
    <div class="post">
        <div class="post-container post-gallery">
					<no-ssr>
							<carousel
									:navigationEnabled="true"
									:perPage=1
									>
									<slide class="post-slide" 
                         v-for="( imgSrc,index ) in postData.images"
                         v-bind:key="index">
											<img v-bind:src="imgSrc">
									</slide>
							</carousel>
					</no-ssr>
        </div>
				<div class="post-container post-content">
					<ul>
						<li>
							<span class="post-content-label">프로젝트</span>
							<p class="post-content-header">
									<span class="post-content-title">{{postData.title}}</span>
							</p>
						</li>
						<li>
							<span class="post-content-label">분류</span>
							<p class="post-content-header">
									<span class="post-content-type">{{postData.type}}</span>
							</p>
						</li>
						<li>
							<span class="post-content-label">개발 기간</span>   
							<p>
									<span class="post-content-date"> 
											<span>{{postData.date.start.year}}.{{postData.date.start.month}}</span> ~ <span>{{postData.date.end.year}}.{{postData.date.end.month}}</span>
									</span>    
							</p>
						</li>
						<li>
							<span class="post-content-label">설명</span>   
							<p class="post-content-desc">
                {{postData.desc}}
							</p>
						</li>
						<li>
							<span class="post-content-label">주요 기능</span>
              <p>
                <ul class="post-content-pointlist">
                    <li v-for="(point,index) in postData.pointlist" v-bind:key="index">{{point}}</li>
                </ul>
              </p>   
						</li>
						<li>
							<span class="post-content-label">기술</span>
              <p>
                <ul class="post-content-techlist">
                  <li class="post-content-tech"
                      v-for="(tech,index) in postData.techlist" 
                      v-bind:key="index"
                      v-bind:class="{'my-work':tech.duty}">
                      {{tech.text}}
                  </li>
                </ul>
              </p>   
						</li>
					</ul>	


        </div>
    </div>
</template>
<script>
import { db } from "@/plugins/firebaseInit.js";
export default {
  data() {
    return {
      postData: {
        title: "",
        type: "",
        date: { start: { year: "", month: "" }, end: { year: "", month: "" } },
        desc: "",
        pointlist: [],
        techlist: [],
        images: []
      }
    };
  },
  asyncData(data) {
    // console.log(data.params.postId);
    // console.log(data.app)
  },
  created() {
    let self = this;
    var title = this.$route.params.postId;
    const postsRef = db.collection("Portfolio").doc(title);
    postsRef.get().then(function(snapshot) {
      self.postData = snapshot.data();
    });
  }
};
</script>
<style lang="scss">
.post {
  width: 100%;
  height: 100%;
  div {
  }
  p {
    margin-bottom: 1vw;
    margin-top: 1vw;
  }
  .post-container {
    float: left;
  }
  .post-gallery {
    width: calc(65% - 40px);
    height: 100%;
    padding: 20px;
  }
  .post-content {
    width: calc(35% - 40px);
    padding: 20px;
    height: 100%;
    .post-content-label {
      color: #666;
    }
    .post-content-pointlist {
      list-style-type: disc;
      padding-left: 20px;
      li {
        margin-bottom: 0.4vw;
      }
    }
    .post-content-techlist {
      .post-content-tech {
        display: inline-block;
        margin-left: 0.3vw;
        margin-right: 0.3vw;
        color: #222;
        background-color: #666;
        padding: 0.3vw;
        font-weight: 500;
        &:hover {
          cursor: pointer;
          background-color: #fff;
        }
      }
      .my-work {
        background-color: #ddd;
        color: #000;
        &:hover {
          cursor: pointer;
          background-color: #fff;
        }
      }
    }
  }
  .post-slide {
    img {
      width: 100%;
    }
  }
}
.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
}
.VueCarousel-navigation {
  .VueCarousel-navigation-button {
    color: white !important;
  }
}

@media screen and (min-width: 1500px) {
  //over 1500px;
  .post-content {
    .post-content-label {
    }
    .post-content-header {
      .post-content-title {
        font-size: 36px;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  //less 1500px;
  .post-content {
    .post-content-header {
      .post-content-title {
        font-size: 2.4vw;
      }
    }
  }
}
</style>
