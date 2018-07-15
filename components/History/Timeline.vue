<template>
    <ul>
        <li v-for="n in 30" :key="n">
          <span>{{n+1986}}</span>
          <div class="timeline-content">
            아...ㅁㄴㅇㅁㄴㅇ
          </div>
        </li>
    </ul>
</template>
<script>
export default {
  props:{
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clickTimeline: e => {}
  },
  computed: {}
};
</script>
<style lang="scss" scoped>

</style>
