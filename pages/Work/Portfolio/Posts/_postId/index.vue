<template>
    <div class="post">

        <div class="post-container post-gallery">
					<no-ssr>
							<carousel
									:navigationEnabled="true"
									:perPage=1
									>
									<slide class="post-slide">
											<img src="https://picsum.photos/300/100/">
									</slide>
									<slide class="post-slide">
											<img src="https://picsum.photos/300/100/">
									</slide>
									<slide class="post-slide">
											<img src="https://picsum.photos/300/100/">
									</slide>
							</carousel>
					</no-ssr>
        </div>
				<div class="post-container post-content">

            <span class="post-content-label">프로젝트</span>
            <p class="post-content-header">
                <span class="post-content-title">SeoulTech Design Show</span>
            </p>

						<span class="post-content-label">분류</span>
            <p class="post-content-header">
                <span class="post-content-type">웹 서비스</span>
            </p>
            
            <span class="post-content-label">개발 기간</span>   
            <p>
                <span class="post-content-date"> 
                    <span>2015.06</span> ~ <span>2017.03</span>
                </span>    
            </p>

            <span class="post-content-label">설명</span>   
            <p class="post-content-desc">
							이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트이런저런 웹사이트
            </p>

						<span class="post-content-label">주요 기능</span>   
            <p class="post-content-point">
							<ul class="post-content-pointlist">
									<li>SPA(Single Page Application)</li>
									<li>Youtube API를 이용한 뮤직플레이어</li>
							</ul>
						</p>
						
            <span class="post-content-label">기술</span>   
            <p>
							<ul class="post-content-techlist">
								<li class="post-content-tech my-work">Angular Js1.9x</li>
								<li class="post-content-tech my-work">HTML5</li>
								<li class="post-content-tech my-work">Sass</li>
								<li class="post-content-tech">JSP</li>
								<li class="post-content-tech">mysql</li>
							</ul>
            </p>


        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      postData: {
				title: "music about",
				type: "웹 서비스",
        date: { start: { year: "", month: "" }, end: { year: "", month: "" } },
				desc: "",
				pointlist: ["","","",""],
				techlist: [],
				images:[]
      }
    };
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
    .post-content-point {
      .post-content-pointlist {
        list-style-type: disc;
        padding-left: 20px;
        li {
          margin-bottom: 0.4vw;
        }
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
