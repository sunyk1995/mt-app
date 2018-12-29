<template>
    <div class="itemHeader">
        <div class="header-banner">
            <div class="header-top">
                <img src="http://p0.meituan.net/xianfu/2920fc37b810c63d12b1f6eb678e199015072.jpg" alt="">
                <div class="item-name">
                    <p>
                        <span class="redTag">品牌</span>
                        <span class="name">如意混沌(东湖国际店)</span>
                    </p>
                    <p class="peisong">蜂鸟配送/440分钟送达</p>
                    <p class="jian">
                        <span class="whiteTag">减</span>
                        <span class="mianjian">在线支付28满减5</span>
                    </p>
                </div>
                <div class="icon">
                    <icon class="left" name='左' :h='25' :w='25'></icon>
                    <p>
                        <span>五个活动</span>
                         <icon name='右' :h='15' :w='15'></icon>
                    </p>
                </div>                               
            </div>
            <div class="notice" @click="getMark()">
                <span>公告</span>
                <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺...</p>
                <icon name='右' :h='15' :w='15'></icon>
            </div>
        </div> 
        <app-mark v-show="markIs"
        v-on:getcloseMark='zidingyi($event)'
        ></app-mark>
        <div class="menuNav">
            <router-link to="/takeOrder" 
            class="navItem">点菜</router-link>
            <router-link to="/evaluate" 
            class="navItem">评价</router-link>
            <router-link to="/business"
            class="navItem">商家</router-link>

        </div>
        <div class="menu">
            <ul class="menu-left">
                <li>热销</li>
                <li>折扣</li>
                <li>买赠</li>
                <li>精选热菜</li>
                <li>爽口凉菜</li>
                <li>精选套餐</li>
                <li>果品果汁</li>
                <li>小吃主食</li>
                <li>特色粥品</li>
            </ul>
            <ul class="menu-right"></ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import appMark from './mark'
    export default{
        name:'itemHeader',
        data(){
            return{
                id:this.$route.params.id,
                singleData:[],
                markIs:false
            }
        },
        components:{
            appMark
        },
        created() {
            axios.get('https://wd8733619841yvhhdw.wilddogio.com/data/poilist.json')
            .then(msg=>{
                console.log(msg);
                let getIt = msg.data.filter(item =>{
                    return item.id == this.id
                })
                console.log(getIt)
                this.singleData = getIt
            })
        },
        methods: {
            getMark(){
                this.markIs = true;
            },
            zidingyi(msg){
                this.markIs = msg;
            }
        },
    }
</script>
<style scoped>

.header-banner{
     background: rgba(0, 0, 0, 0.4);
     display: flex;
    flex-direction: column;
    color: white;
    height: 130px;
    }
    .header-banner .header-top{
        display: flex;
         padding:24px 12px 18px 24px;
        height: 80%;
        justify-content: space-between;
    }
    .header-banner .header-top img{
        width: 64px;
        height: 64px;
    }
    .header-banner .header-top .item-name{

    }
    .header-banner .header-top .item-name .redTag{
        font-size: 12px;
        background: red;
        color: white;
        padding:2px;
    }
    .header-banner .header-top .item-name .name{
        font-weight: bold;
        margin-left: 4px;
    } 
    .header-banner .header-top .item-name .peisong{
        font-size: 14px;
        padding:5px 0;
    }
    .header-banner .header-top .item-name .jian{
        font-size: 12px;
    }
     .header-banner .header-top .item-name .jian .whiteTag{
         color: red;
         background: white;
    
     }
     .header-banner .header-top .item-name .mianjian{
         margin-left: 10px;
     }
    .header-banner .header-top .icon{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .header-banner .header-top .icon  .left{
        margin-left: 70%;
        border:1px solid #dddddd;
        border-radius: 50%;
    }
     .header-banner .header-top .icon span{
         font-size: 10px;
     }
    .header-banner .notice{
        height:40px;
        display: flex;
        font-size: 12px;
        overflow: hidden;
        background: rgba(0,0,0,0.5);
        padding:2px 4px;
    }
    .menuNav{
        width:100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
    }
    .menuNav .navItem{
       display:block;
       width: 33%;
       text-align: center;
       line-height: 40px;
    }
    .menu{
        width:100%; 
        position: absolute;
        top:170px;
        bottom: 48px;      
        display: flex;
    }
    .menu .menu-left{
        width: 
    }
</style>
