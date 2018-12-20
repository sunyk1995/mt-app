<template>
    <div class="user">
        <header>
        <p>
            <icon name='左' :h='30' :w='30'></icon>
            <span>我的</span>
        </p>
        <div class="admin">
            <div class="headPortrait">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="adminLink">
                <div class="adminLinkWord">
                    <p>登录/注册</p>
                    <span>登录后享受更多的特权</span>
                </div>
                <div class="adminLinkUrl">
                    <icon name='右' :h='25' :w='25'></icon>
                </div>

            </div>
        </div>
        </header>
        <ul class="nav">
            <li>
                <icon name='钱包' :h='40' :w='40'></icon>
                <span>钱包</span>
            </li>
             <li>
                <icon name='红包' :h='40' :w='40'></icon>
                <span>红包</span>
            </li>
             <li>
                <icon name='金币' :h='40' :w='40'></icon>
                <span>金币</span>
            </li>
        </ul>
        <ul class="othor">
            <li>
                <icon name='地址' :h='40' :w='40'></icon>
                <span>我的地址</span>
                <icon class="right" name='右' :h='20' :w='20'></icon>
            </li>
             <li>
                <icon name='金币' :h='40' :w='40'></icon>
                <span>金币商城</span>
                <icon class="right" name='右' :h='20' :w='20'></icon>
            </li>
             <li>
                <icon name='红包' :h='40' :w='40'></icon>
                <span>分享拿十元现金</span>
                <icon class="right" name='右' :h='20' :w='20'></icon>
            </li>
             <li>
                <icon name='客服' :h='40' :w='40'></icon>
                <span>我的客服</span>
                <icon class="right" name='右' :h='20' :w='20'></icon>
            </li>
        </ul>
    </div>
</template>
<style scoped>
 .user{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 56px;
    overflow: auto;
 }
 .user header{
    padding: 6px;
     width: 100%;
     height: 200px;
     background: #00A8FF;
 }
  .user header p{
      display: flex;
  }
    .user header p span{
        margin: 0 auto;
        font-weight: bold;
        font-size: 20px;
        color: white;
    }
    .user .admin{
        display: flex;
        padding-top:50px;
    }
    .user .admin .headPortrait{
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        margin-left: 20px;
        width: 80px;
        height: 80px;
    }
    .user .admin .headPortrait img{
        width: 80px;
        height: 80px;
    }
    .user .admin .adminLink{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .adminLinkWord{
        margin-left: 20px;
        color: white;
    }
     .adminLinkWord p{
         font-size: 24px;
         font-weight: bold;
     }
     .adminLinkWord span{
         font-size: 14px;
     }
     .nav{
         display: flex;
        justify-content: space-around;
        width:100%;
        height:100px;

     }
     .nav li{
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: center;
         font-size: 12px;
     }
    .othor{
        width: 100%;
    }
    .othor li{
        margin-top: 10px;
        padding:10px 15px;
        border-bottom: 1px dotted #dfdfdf;
    }
    .othor .right{
        float: right;    
    }
    .othor  span{
        margin-left: 50px;
    }

</style>
