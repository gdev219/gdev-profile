<template>
<div class="wrapper" :style="{height: windowHeight-40+'px'}">
  <main class="content">
    <section class="content-section">
      <ul class="line-number">
        <li v-for="n in 20" :key="n">{{n+122}}</li>
      </ul>
      <section class="snap-section" v-bind:class="{open: flagMenu}">
        <div class="snap-header"></div>
        <SnapMenu v-if="flagMenu"></SnapMenu>
      </section>
      <section class="main-section">
        <div class="main-header">
          <div class="btn-menu" v-on:click="openMenu">
            <i class="fas fa-bars"></i>
          </div>
          <div class="btn-lang">
            <span v-bind:class="{}">한글</span>      
            <span>ENGLISH</span>      
          </div>
        </div>
        <div class="main-content">
          <nuxt/>
        </div>
      </section>
    </section>
  </main>
</div>
</template>

<script>
import SnapMenu from "@/components/Menu/SnapMenu";
export default {
  components:{
    SnapMenu
  },
  data() {
    return {
      windowHeight: 0,
      flagMenu: false,
      selectedLang: "kor"
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowHeight);
      this.getWindowHeight();
    });
  },
  methods: {
    getWindowHeight(e) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    openMenu(e) {
      this.flagMenu = !this.flagMenu;
      console.log(this.flagMenu);
    },
    closeMenu(e){
      this.flagMenu = false;
    }
  }
};
</script>


<style lang="scss">
html {
  width: 100%;
}
body {
  font-family: "Ubuntu", "Nanum Gothic", sans-serif;
  margin: 0;
  height: 100%;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
  &:visited{
    color: inherit;
  }
  &:hover {
      color: inherit;   
    }
    &:active {
      color: inherit;
    }
}
$max-width: 1500px;

.wrapper {
  max-width: $max-width;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

$aspect-ratio: 5/9;
$ratio-percent: $aspect-ratio * 100%;
$background-color: #1e1e1e;
.content {
  background-color: $background-color;
  position: relative;
  margin: auto;
  width: 100%;
  padding-top: $ratio-percent;
  .content-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: white;
    display: flex;
    .line-number {
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 0;
      font-family: "Nanum Gothic", sans-serif;
      font-weight: 500;
      list-style-type: none;
      height: 100%;
      li {
        color: #474747;
        line-height: 1;
      }
    }
    .snap-section {
      background-color: #252526;
      height: 100%;
      width: 20%;
      z-index: 999;
      -webkit-transition: 300ms ease all;
      -moz-transition: 300ms ease all;
      -ms-transition: 300ms ease all;
      -o-transition: 300ms ease all;
      transition: 300ms ease all;
      margin-left: -20%;
      .snap-header {
        background-color: $background-color;
      }
    }
    .open {
      margin-left: 0;
    }
    .main-section {
      flex: 1;
      width: 80%;
      position: relative;
      height: 100%;
      .main-header {
        z-index: 999;
        .btn-menu {
          // border: 1px solid #bfbfbf;
          display: inline-block;
          background-color: $background-color;
          .fa-bars {
            color: #bfbfbf;
          }
          &:hover {
            cursor: pointer;
            // border: 1px solid #7a7a7a;
            .fa-bars {
              color: #7a7a7a;
            }
          }
        }
        .btn-lang {
          float: right;
        }
      }
      .main-content{
        
      }
    }
  }
}

@media screen and (min-width: 1500px) {
  .line-number {
    padding-left: 28.5px;
    li {
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 22.5px;
    }
  }
  .btn-menu {
    padding: 24px;
    .fa-bars {
      font-size: 52.5px;
    }
  }
  .btn-lang {
    padding: 24px;
    font-size: 18px;
  }
  .snap-section {
    .snap-header {
      height: 100px;
    }
  }
  .main-section {
    .main-header{
      height: 100px;
    }
    .main-content{
      height: 1500 * $aspect-ratio - 100+px;
    }
  }
}

@media screen and (max-width: 1500px) {
  .line-number {
    padding-left: 1.9vw;
    li {
      padding-top: 1vw;
      padding-bottom: 1vw;
      font-size: 1.5vw;
    }
  }
  .btn-menu {
    padding: 1.6vw;
    .fa-bars {
      font-size: 3.5vw;
    }
  }
  .btn-lang {
    padding: 1.6vw;
    font-size: 1.5vw;
  }
  .snap-section {
    .snap-header {
      height: 6.66vw;
    }
  }
  .main-section {
    .main-header{
      height: 6.66vw;
    }
    .main-content{
      height: 100vw * $aspect-ratio - 6.66vw;
    }
  }
}
</style>

