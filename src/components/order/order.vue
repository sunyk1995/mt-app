<template>
    <div class="beforeOrder">
        <div class="header">
            <icon class="icon" name='左' :h='25' :w='25'></icon>
            <span>订单</span>
        </div>
        <div class="loginTip">
            <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="">
            <p>登录后查看外卖订单信息！</p>
            <button @click="gotoLogin()">立即登录</button>
        </div>
        <appFooter></appFooter>
    </div>
</template>
<script>
import appFooter from '../../components/footer'
    export default{
        name:'beforeOrder',
        methods:{
            gotoLogin(){
                this.$router.push('/login')
            }
        },components:{
            appFooter
        }

    }
</script>
<style scoped>
    .beforeOrder{
        width: 100%；
    }
    .header{
        width: 100%;
        height:56px;
        background: #00A5FF;
        text-align: center;
        position: relative;
    }
    .header span{
        color: white;
        font-size: 20px;
        font-weight: bold;
        padding-top:10px;
        display: block;
    }
    .header .icon{
        position: absolute;
        left:0;
        top:10px;
    }
    .loginTip{
        width: 100%;
        position:absolute;
        top:56px;
        bottom:56px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .loginTip img{
        margin-top:-100px;
    }
    button{
        width:100px;
        height: 40px;
        background:#56D176 ;
        color: white;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 10px;
        margin-top: 40px;
    }

</style>