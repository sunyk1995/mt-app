<template>
    <div class="home">
        <div class="search">
            <div class="position">
                <icon name="定位" :w="25" :h="25"></icon>
                <span>青岛北站</span>
                <icon name="下" :w="25" :h="25"></icon>
            </div>  
            <search></search>           
        </div>     
        <appNav></appNav>
        <div class="contentCenter">
            <div v-for="item in middleData" v-bind:key="item.name">
                <p class="name">{{item.name}}</p>
                <p class="intoduce">{{item.intoduce}}</p>
                <p class="now">{{item.now}}</p>
                <img :src="item.url" alt="">
            </div>
        </div>
        <banner></banner>
        <business></business>
    </div>
</template>
<script>
import search from '../home/search.vue'
import appNav from '../home/nav.vue'
import banner from '../home/banner.vue'
import business from '../home/business.vue'
    export default {
        name:'home',
        data(){
            return{
                middleData:[
                    {
                        name:'品质套餐',
                        intoduce:'搭配齐全吃得好',
                        now:'立即抢购',
                        url:'https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/'
                    },
                     {
                        name:'限量抢购',
                        intoduce:'超值美味9.9元抢',
                        now:'839人正在抢',
                        url:'https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/'
                    },
                ],
                // bannerData:[
                //     {
                //         url:'https://fuss10.elemecdn.com/e/df/613a15027e25cf23d1be017e27b34jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
                //     },
                //     {
                //         url: 'https://fuss10.elemecdn.com/1/58/2ac68ab6a835617d46e19e86e5a5cjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
                //     },
                //     {
                //         url:'https://fuss10.elemecdn.com/4/58/6898af2b1230eb5e193c4b2d15c56jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
                //     }
                // ]
            }
        },
        components:{
            'search':search,
            appNav,
            'banner':banner,
            'business':business
        },
    }
</script>
<style scoped>
    .home{
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom:56px;
        color: white;
        overflow: auto;
    }
    .search{
        width:100%;
        height: 102px;
        background: #0098FF;
        padding: 20px 16px;
    }
    .search .position span{
        padding: 0 20px;
    }
    ul li{
        color:red;
    }
    .contentCenter{
        color: black;
        padding: 0 10px 0 10px;
        display: flex;
        justify-content: space-between;
    }
    .contentCenter div{
        padding:15px;
         background: #F6F6F6;
         width: 49%;
         height: 170px;
         position: relative;
 
    }
    .contentCenter div img{
        width: 100px;
        height: 100px;
        position: absolute;
        right: 0;
        bottom: -4%;
    }
    .contentCenter .name{
        font-size: 20px;
        font-weight: bold;
    }
    .contentCenter .intoduce{
        font-size: 14px;
        padding-top: 5px;
        color: #757575;
    }
    .contentCenter .now{
        color: #BC987C;
        font-size: 14px;
        margin-top: 14px;
    }

</style>