<template>
    <section>
        <ul class="portfolio grid">
            <li v-for="snippet in snippetData" v-bind:key="snippet.title">
                <Figure
                    :title="snippet.title"
                    :date="snippet.date"
                    :thumbnailUrl="snippet.thumbnailUrl"
                />
            </li>
        </ul>
    </section>
</template>
<script>
import { db } from "@/plugins/firebaseInit.js";
import Figure from "@/components/Post/Figure";
export default {
  components: {
    Figure
  },
  data() {
    return {
     snippetData:[]
    };
  },
  created() {
    var data = [];
    let self = this;
    db.collection("Portfolio")
    .doc("Snippets")
    .get()
    .then(function(snapshot){
      for(var key in snapshot.data()){
        data.push(snapshot.data()[key]);
      }
      self.snippetData = data.slice();
    });
  },
};
</script>
<style lang="scss" scoped>
.portfolio {
  margin: 0 auto;
}
.grid {
  display: flex !important;
  display: -webkit-flex; /* Safari */
  flex-wrap: wrap;
  li {
    // margin: 0 2% 25px 0;
    float: left;
    padding: 1em;
  }
}

@media screen and (min-width: 1500px) {
  .grid {
    li {
      flex-basis: calc(100% / 3 -3vw);
    }
  }
}
@media screen and (max-width: 1500px) {
  .grid {
    li {
      flex-basis: calc(100% / 3 -3vw);
    }
  }
}
@media screen and (max-width: 1200px) {
  .grid {
    li {
      flex-basis: calc(100% / 2 -6vw);
    }
  }
}
@media screen and (max-width: 800px) {
  .grid {
    li {
      flex-basis: calc(100% -6vw);
    }
  }
}
@media screen and (max-width: 1500px) {
}
</style>
