<template>
<div class="wrapper" :style="{height: windowHeight-40+'px'}">
  <main class="main-content">
    <div class="btn-menu">
      
    </div>
    <section>
      <nuxt/>
    </section>
  </main>
</div>
</template>

<script>
export default {
  props: ['section'],
  data(){
    return{
      windowHeight: 0
    }
  },
  mounted(){
    this.$nextTick(function(){
      window.addEventListener('resize', this.getWindowHeight);
      this.getWindowHeight()
    })
  },
  methods: {
    getWindowHeight(e) {
      this.windowHeight = document.documentElement.clientHeight;
    }
  }

}
</script>


<style lang="scss">
body {
  font-family: "Ubuntu", "Nanum Gothic", sans-serif;
  margin: 0;
  height: 100%;
}
$max-width: 1500px;
.wrapper {
  max-width: $max-width;
  margin: 0 auto;
  padding : 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
$aspect-ratio: 5/9;
$ratio-percent: $aspect-ratio * 100%;
 .main-content {
  background-color: #1e1e1e;
  position: relative;
  margin: auto;
  width: 100%;
  padding-top: $ratio-percent;
  & > section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: white;
  }
}
</style>

