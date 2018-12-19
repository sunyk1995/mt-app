<template>
  <div id="app">
    <router-view></router-view>
    <appFooter></appFooter> 
  </div>
</template>
<script>
  import appFooter from './components/footer.vue'
  export default {
    name:'app',
    components:{
      appFooter
    }
  }
</script>
<style>

*{padding: 0;margin: 0;box-sizing: border-box;}
ul,li{
  list-style: none;
}
</style>
