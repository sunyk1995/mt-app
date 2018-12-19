<template>
    <div class="banner">
        <div class="swiper-container-center">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in bannerData" :key='item.url'>
                    <img :src='item.url'>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
    export default{
        name:'app-banner',
        data(){
            return{
               bannerData:[
                    {
                        url:'https://fuss10.elemecdn.com/e/df/613a15027e25cf23d1be017e27b34jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
                    },
                    {
                        url: 'https://fuss10.elemecdn.com/1/58/2ac68ab6a835617d46e19e86e5a5cjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
                    },
                    {
                        url:'https://fuss10.elemecdn.com/4/58/6898af2b1230eb5e193c4b2d15c56jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'
                    }
                ] 
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container-center',{
                autoplay:true
            });
        },
    }
</script>
<style scoped>
    .banner{
        overflow: hidden;
    }
   .swiper-container-center img{
        width:100%;
    }
    
</style>
