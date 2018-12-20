<template>
  <div id="app">
    <router-view></router-view>
    <appFooter></appFooter> 
  </div>
</template>
<script>
  import appFooter from './components/footer.vue'
  import BScroll from 'better-scroll'
  export default {
    name:'app',
    components:{
      appFooter
    },

  }
</script>
<style>
    a:link{
        text-decoration: none;
        color: black;
    }
    a:visited{
        color: black;
    }
*{padding: 0;margin: 0;box-sizing: border-box;}
ul,li{
  list-style: none;
}
</style>
