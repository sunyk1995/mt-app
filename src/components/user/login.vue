<template>
     <div class="login">
         <div class="title">
             <img src="../../assets/title.png" alt="">
         </div>
         <form action="">
             <input type="text" placeholder="手机号">
             <button class="getM">获取验证码</button>
             <input type="text" placeholder="验证码">
             <p class="tip">新用户登录即自动注册，并表示已同意
                 <a style="color:#2395ff;">《用户服务协议》</a>
             </p>
            <button class="btn">登陆</button>
         </form>
         <p class="aboutUs">关于我们</p>
     </div>
</template>
<script>
    export default{
        name:'login',
        data(){
            return{}
        }
    }
</script>
<style scoped>
    .login {
        width: 100%;
        position: absolute;
        top:0;
        bottom:56px;
    }
    .login .title{
        width: 100%;
        display:flex;
        justify-content: center;
        margin-top:40px;

    }
    form{
        width: 100%;
        padding: 10px 10%;
        position: relative;

    }
    form input{
        width: 98%;
        height: 40px;
        margin-top: 30px;
        padding-left: 10px;
    }
    button{
        background: white;
        border:none;
        outline: none;
    }
    .getM{
        position: absolute;
        right: 15%;
        top:50px;
        color: #cccccc;
    }
    .tip{
        margin-top:18px;
        color: #999999;
        font-size: 14px;
    }
    .btn{
        width: 98%;
        margin-top:30px;
        height:50px;
        background: #4cd96f;
        line-height: 30px;
        text-align: center;
        color:white;
        font-size: 18px;
        border-radius: 10px;
    }
    .aboutUs{
        text-align: center;
        font-size: 12px;
        color: #999999;
    }
</style>