<template>
    <ul class="snap-menu">
        <!-- get menu info.. ajax -->
        <li v-for="route in routes" :key="route.name">
            <p class="parent-list" v-on:click="route.flag = !route.flag">
                <i class="fas fa-caret-down rotate" v-bind:class="{down: !route.flag}"></i><span>{{route.name.toUpperCase()}}</span>
            </p>
            <ul class="child-list" v-if="route.flag">
                <nuxt-link tag="li" v-for="childrenRoute in route.children" :key="childrenRoute.name" :to="childrenRoute.path">
                    {{childrenRoute.name}}
                </nuxt-link>
            </ul>
        </li>
        <!-- <nuxt-link v-for="route in routes" :key="route.name" tag = "li" :to="route.name">{{route.name}}</nuxt-link> -->
    </ul>

</template>

<script>
// has to bring json data of menu list
export default {
  data() {
    return {
      routes: []
    };
  },
  created() {
    // console.log("created");
    let self = this;

    self.$router.options.routes.forEach(route => {
      if (route.path != "/" && route.path.match(/[\/]/g).length == 1) {
        console.log("이름:" + route.name);
        self.routes.push({
          name: route.name,
          path: route.path,
          flag: true,
          children: []
        });
      } //exclude root path and children
      if (route.path.match(/[\/]/g).length > 1) {
        for (var i = 0; i < self.routes.length; i++) {
          if (self.routes[i].name == route.name.split("-")[0]) {
            if(route.name.split("-").length<3){
              //exclude child's children
              self.routes[i].children.push({
                name: route.name.split("-")[1],
                path: route.path
              });
            }
          }
        }
      }
    });
    // order by alphabetical order with the first char
    self.routes.sort((a, b) => {
      return a.name.charAt(0) < b.name.charAt(0)
        ? -1
        : a.name.charAt(0) > b.name.charAt(0) ? 1 : 0;
    });
  },
  mounted() {
    // console.log("mounted")
    // var routes = null;
    // routes = this.$router.options.routes;
    // console.log("route info-");
    // console.log(routes);
  }
};
</script>

<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}
.rotate {
  -moz-transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.down {
  -moz-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.snap-menu {
  background-color: #383838;
  .parent-list {
    color: #c7cccc;
    font-weight: normal;
    // border-bottom: 1px solid #252526;
  }
  .child-list {
    color: #cccccc;
    background-color: #252526;
  }
  &:hover {
    cursor: pointer;
  }
}
@media screen and (min-width: 1500px) {
  .snap-menu {
    font-size: 18px;
    .parent-list {
      padding: 15px;
      span {
        padding-left: 15px;
      }
    }
    .child-list {
      & > li {
        margin-left: 30px;
        padding: 15px;
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .snap-menu {
    font-size: 1.2vw;
    .parent-list {
      padding: 1vw;
      span {
        padding-left: 1vw;
      }
    }
    .child-list {
      & > li {
        margin-left: 2vw;
        padding: 1vw;
      }
    }
  }
}
</style>
