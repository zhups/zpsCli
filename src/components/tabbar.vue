<template>
  <van-tabbar 
    v-model="active"
    active-color="#FF0000"
    inactive-color="#000"
    >
    <van-tabbar-item name="home">
      <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ?  webImage+'index1.png' : webImage + 'index.png'"
        >
    </van-tabbar-item>
    <van-tabbar-item  name="class">
      <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ?  webImage+'class1.png' : webImage + 'class.png'"
        >
    </van-tabbar-item>
    <van-tabbar-item name="diamond">
      <span>钻石会员</span>
        <img
          slot="icon"
          :src="webImage+'diamond.png'"
        >
    </van-tabbar-item>
    <van-tabbar-item name="cart" info="20">
      <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ?  webImage+'cart1.png' : webImage + 'cart.png'"
        >
    </van-tabbar-item>
    <van-tabbar-item name="my">
      <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ?  webImage+'my1.png' : webImage + 'my.png'"
        >
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data(){
    return {
      active: 'home',
      webImage: this.$store.state.webImage + 'icon/'
    }
  },
  components:{
  },
  crated(){ 
    console.log(my)
  },
  mounted(){
    
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
