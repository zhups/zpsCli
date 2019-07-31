<template>
  <div>
   <cube-scroll  
      ref="contentScroll"
      :data="content"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      <ul class="imgs-wrapper">
          <li v-for="(item, index) in content" :key="index" class="imgs-item">
          <img :src="item.url">
        </li>
      </ul>
   </cube-scroll>
  </div>
</template>

<script>
const imgs = [
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/7EzIhoEvnG/toutiao_12.JPG'
  },
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/GR0Piaf5sz/toutiao_21.JPG'
  },
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/K1JqUN8HSA/toutiao_31.JPG'
  }
]
export default {
  data(){
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          // stop: 44,
          stopTime: 1000,
          txt: '更新成功'
        },
        pullUpLoad: true
      },
      content: imgs.slice(),
      secondStop: 26
    }
  },
  components:{
  },
  mounted(){
  },
  methods: {
    onPullingDown(){
      console.log('onPullingDown')
      // setTimeout(() => {
      //   this.$refs.scroll.forceUpdate()
      // }, 1000)
    },
    onPullingUp(){
      console.log('onPullingUp')
      // setTimeout(() => {
      //   this.$refs.scroll.forceUpdate()
      // }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
