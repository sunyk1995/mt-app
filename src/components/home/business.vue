<template>
    <div class="business">
        <p class="title">推荐商家</p>
        <ul class="business-nav">
            <li>
                综合排序
                <icon name="下" :w="10" :h="10"></icon>
            </li>
            <li>距离最近</li>
            <li>品质联盟</li>
            <li>筛选
                  <icon name="筛选" :w="10" :h="10"></icon>
            </li>
        </ul>
        <ul class="single-business-wrap">
            <li class="single-business"  v-for="item in data" :key="item.name">
                <div class="single-img">
                     <img :src="item.url" alt="">
                </div>
                <div class="item">
                    <p class="name">{{item.name}}</p>
                    <p class="number">4.7月售2049单</p>
                    <p class="delivery">
                        <span>20元起送|配送费￥1.5</span>
                        <span>180m|32分钟</span>
                    </p>
                    <p class="icon">
                        <span>汉堡</span>
                        <span>品质联盟</span>
                        <span>口碑好店</span>
                    </p>
                    <div class="activity">
                        <div>
                            <span><a>首</a>新用户下单立减25元</span>
                            <span class="activity-number">18个活动</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'business',
        data(){
            return{
                data:[
                    {
                        name:'华莱士(炸鸡汉堡万年泉路店)',
                        url:'https://fuss10.elemecdn.com/0/33/444bce196fba8741671dc913bb2f1jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                    },
                    {
                        name:'陈记状元拌面',
                        url:'https://fuss10.elemecdn.com/3/be/3cce637375c9d9244180a61d034a8png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                    },{
                        name:'三米铺粥(炸鸡汉堡万年泉路店)',
                        url:'https://fuss10.elemecdn.com/d/b1/1b69b8cf603743b02d9a84d6f4d42png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                    },{
                        name:'华莱士(炸鸡汉堡万年泉路店)',
                        url:'https://fuss10.elemecdn.com/0/33/444bce196fba8741671dc913bb2f1jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .business{
        width:100%;
        padding: 0 6px;

        color: black;
    }
    .title{
        padding: 20px 0;
        text-align: center;
        position: relative;
    }
    .title::after{
        display: block;
        content: '';
        width: 30px;
        height: 2px;
        background: black;
        position: absolute;
        left: 28%;
        top: 48%;
    }
    .title::before{
        display: block;
        content: '';
        width: 30px;
        height: 2px;
        background: black;
        position: absolute;
        right: 28%;
        top: 48%;
    }
    .business-nav{
        display: flex;
        justify-content: space-around;
        font-size: 14px;

    }
    .single-business-wrap{
        padding-top: 20px;
    }
    .single-business{
        display: flex;
        padding: 4px;
        justify-content: space-around;
        font-size: 14px;
    }
    .single-business .single-img{
        width: 20%;
    }
    .single-business img{
        width:75px ;
        height: 75px;
    }   
    .single-business .item{
        width: 80%;
        padding-left: 30px;
    }
    .single-business .name{
        font-size: 16px;
        font-weight: bold;
    }
    .single-business .number,.delivery{
        font-size: 12px;
        padding: 6px 0;
    }
    .single-business .delivery{
        display: flex;
        justify-content: space-between;
    }
     .single-business .icon span{
         border:1px solid #acacac;
         margin-right: 4px;
         font-size: 10px;
     }
     .single-business a{
         background: #56d176;
         color: white;
         border-radius: 2px;
         margin-right: 6px;
     }
     .single-business .activity{
         padding-top: 16px;
     }
     .single-business .activity div{
         display: flex;
         justify-content: space-between;
     }
     .single-business .activity-number{
         font-size: 12px;
     }
</style>
