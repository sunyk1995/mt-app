<template>
    <div class="itemHeader">
        <div class="header-banner">
            <img src="http://p0.meituan.net/xianfu/2920fc37b810c63d12b1f6eb678e199015072.jpg" alt="">
            <div class="item-name">
                <p>
                    <span>品牌</span>
                    <span>如意混沌(东湖国际店)</span>
                </p>
                <p>蜂鸟配送/440分钟送达</p>
                <p>
                    <span>满减</span>
                    <span>在线支付28满减5</span>
                </p>
            </div>
             <div>
                <icon name='左' :h='25' :w='25'></icon>
                <p>
                    <icon name='右' :h='15' :w='15'></icon>
                    <span>五个活动</span>
                </p>
            </div>
            <div class="notice">
                <span>公告</span>
                <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
                <icon name='右' :h='15' :w='15'></icon>
            </div>
        </div>  
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'itemHeader',
        data(){
            return{
                id:this.$route.params.id,
                singleData:[]
            }
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
    }
</script>
<style scoped>
    .itemHeader{
        width: 100%;
        height: 140px;

    }
    .itemHeader .header-banner{
        width: 100%;
        height: 100%;
        display: flex;
        padding: 20px;
        background: #999999;
        opacity: rgba(255,255,255,0.5);
        color: white;
        
    }
    .itemHeader img{
        width: 64px;
        height: 64px;
    }
</style>
