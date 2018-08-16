<template>
  <section>
    <div class="portfolio-header">
      <ul class="portfolio-filters">
        <li v-on:click="selected = 1" v-bind:class="{'filter-on':1==selected}" class="portfolio-filter-button button">
          시간순 보기
        </li>
        <li v-on:click="selected = 2" v-bind:class="{'filter-on':2==selected}" class="portfolio-filter-button button">
          종류별 보기
        </li>
        <!-- <li class="portfolio-filter-button button">

        </li> -->
      </ul>
    </div>    
    <div class="portfolio" v-for="( snippets, index ) in filterSnippet" v-bind:key="index">
      <h3 class="portfolio-index" v-on:click="clickIndex(index)" >{{index}}</h3>
      <ul class="portfolio-content grid" v-bind:class="toggleClass(index)">
        <li v-for="snippet in snippets" v-bind:key="snippet.title">
          <Figure
              :title="snippet.title"
              :date="snippet.date"
              :thumbnailUrl="snippet.thumbnailUrl"
          />
        </li>
      </ul>
    </div>
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
      selected: 1,
      snippetData: [],
      endYearList: [],
      filterFlag: false,
      sortKey: "",
      selectedIndex: []
    };
  },
  methods: {
    clickIndex: function(index) {
      let self = this;
      const foundedIndex = this.selectedIndex.findIndex(i => i == index);
      if (foundedIndex >= 0) {
        this.selectedIndex.splice(foundedIndex,1);
      } else {
        this.selectedIndex.push(index);
      }

      console.log(this.selectedIndex);
    },
    toggleClass: function(index){
      const isSelected = this.selectedIndex.includes(index);
      return{
        'off': isSelected,
        'on' : !isSelected
      } 
    }
  },
  created() {
    var data = [];
    let self = this;
    let endDate;
    db
      .collection("Snippets")
      .get()
      .then(function(snapshot) {
        snapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          self.snippetData.push({
            title: doc.data().title,
            thumbnailUrl: doc.data().thumbnailUrl,
            type: doc.data().type,
            date: doc.data().date,
            endDate: endDate
          });

          // self.endYearList
        });
      });
  },
  computed: {
    filterSnippet: function() {
      let self = this;
      let arr = {};
      let orderedArr = {};
      if (self.selected == 1) {
        self.snippetData.forEach(item => {
          if (!arr[item.date.end.year.toString()])
            arr[item.date.end.year.toString()] = [];
          arr[item.date.end.year.toString()].push(item);
        });
        return arr;
      } else if (self.selected == 2) {
        self.snippetData.forEach(item => {
          if (!arr[item.type]) arr[item.type] = [];
          arr[item.type].push(item);
        });
        Object.keys(arr)
          .sort()
          .forEach(key => {
            orderedArr[key] = arr[key];
          });
        return arr;
      }

      // return _.orderBy(self.snippetData, sortKey, orderKey);
    }
  }
};
</script>
<style lang="scss" scoped>
.portfolio {
  margin: 0 auto;
  .portfolio-index {
    cursor: pointer;
  }
  .portfolio-content {
    overflow: hidden;
  }
  .off {
    height: 0;
  }
}
.portfolio-header {
  color: #fff;
  border-bottom: 1px solid #333;
  max-height: auto;
  .portfolio-filters {
    .portfolio-filter-button {
      font-size: 15px;
      margin-left: 3px;
      padding: 10px 15px 10px 15px;
      background: inherit;
      color: #888;
    }
    .filter-on {
      color: #fff;
    }
  }
}

.grid {
  display: flex !important;
  display: -webkit-flex; /* Safari */
  flex-wrap: wrap;
  h3 {
  }
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
