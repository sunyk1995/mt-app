<template>
    <nav class="app-nav">
       <div class="swiper-container">
            <div class="swiper-wrapper">
                <ul class="swiper-slide">
                    <li v-for="item in navData" :key="item.name">
                        <img :src="item.url" alt="">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <ul class="swiper-slide">
                    <li v-for="item in navData" :key="item.name">
                        <img :src="item.url" alt="">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="swiper-pagination"></div>
        </div>    
    </nav>
</template>
<script>
import Swiper from 'swiper';
    export default{
        name:'appNav',
        data(){
            return{
                navData:[
                    {name:'美食',url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                    {name:'下午茶',url:'https://fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'商超便利',url:'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'水果',url:'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'医药健康',url:'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'地方菜系',url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'健身运动',url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'活动推荐',url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'众筹健康',url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},{name:'最佳福利',url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                ]
            }
        },
        methods:{
            initSwiper(){
               var mySwiper = new Swiper('.swiper-container', {
                    autoplay: false,//可选选项，自动滑动
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })      
            }
        },
        mounted(){
            this.initSwiper();
        },

    }

</script>
<style scoped>

    nav{
        color: #757575;
        width: 100%;
        height:184px;
        font-size: 14px;
    }
    .swiper-slide{
        display: flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    .swiper-slide li{
        width: 20%;
        height: 92px;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .swiper-slide img{
        width: 46px;
        height: 46px;
        margin: 0 auto;
    }

</style>
