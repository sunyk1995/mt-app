<template>
    <footer>
        <ul>
            <router-link to="/" tag="li">
              <icon name="home" :w="25" :h="25"></icon>
              <span>首页</span>        
            </router-link>
            <router-link to="/find" tag="li">
                <icon name="发现" :w="25" :h="25"></icon>
                <span>发现</span>   
            </router-link>
           <router-link to="/order" tag="li">
                <icon name="订单" :w="25" :h="25"></icon>
                <span>订单</span>   
            </router-link>
            <router-link to="/user" tag="li">
                <icon name="我的" :w="25" :h="25"></icon>
                <span>我的</span>   
            </router-link>
        </ul>
    </footer>
</template>
<script>
    export default {
        name:'app-footer',
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
ul,li{
    list-style:none;
}
footer{
        width:100%;
        height:56px;
        position: fixed;
        bottom: 0;
        }
footer ul{
        display: flex;
        justify-content: space-around;
         }
footer ul li{
    width: 25%;
    height: 56px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:center;
    font-size: 14px;
}
svg{
    margin: 0 auto;
}
</style>
