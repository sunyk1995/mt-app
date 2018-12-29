<template>
    <div class="appMark">
        <div class="title">
            如意混沌(东湖国际店)
        </div>
        <div class="discount">
            <dl>
                <dt>优惠信息</dt>
                <dd>在线支付满28减5</dd>
                <dd>vc无线精彩果粒橙</dd>
                <dd>单人精彩套餐</dd>
                <dd>该商家支持发票，请尽快下单</dd>
                <dd>已加入"外包计划"</dd>
            </dl>
        </div>
        <div class="notice">
            <dl>
                <dt>商家公告</dt>
                <dd>
                    粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
                </dd>
            </dl>
        </div>
         <button @click="closeMark()">X</button>
    </div>
</template>
<script>
export default {
    name:'appMark',
    methods:{
        closeMark(){
           this.$emit('getcloseMark',false)
        }
    },
}
</script>
<style scoped>
     .appMark{
        width: 100%;
        position: absolute;
        background: rgba(0,0,0,0.8);
        z-index: 10;
        top:0;
        bottom: 0;
        color:white;
        padding: 50px 50px;
                transition:4s;
    }
    .title{
        width: 100%;
        height: 20%;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
    }
    .discount{
        width: 100%;
        height: 40%;
 font-size: 18px;
    }
    .notice{
        width: 100%;
        height: 40%;

    }
    dt{
        text-align: center;
    }
    
</style>