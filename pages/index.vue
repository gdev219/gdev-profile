<template>
  <div class="container">
    <ul class="line-number">
      <li v-for="n in 20" :key="n">{{n+122}}</li>
    </ul>
    <Logo></Logo>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.container {
  .line-number {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 500;
    list-style-type: none;
    li {
      color: #474747;
      line-height: 1;
      padding-top: 1vw;
      padding-bottom: 1vw;
      font-size: 1.5vw;
    }
  }
  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
