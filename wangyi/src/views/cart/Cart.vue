<template>
  <div class="catWrap">
    <div class="top">
      <div class="left">购物车</div>
      <div class="right">领劵</div>
    </div>
    <div class="bodyY">
      <div class="boItem">
        xxxxxxx
      </div> 
      <div class="boItem">
        xxxxxxx
      </div>
       <div class="boItem">
        xxxxxxx
      </div>
    </div>
    <div class="btom">
      <div>
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
        <button>登录</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>
  .top{
    height: 88px;
    // background: red;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      font-size: 40px;
    }
    .right{
      font-size: 30px;
      color: red;
    }
  }
  .bodyY{
    display: flex;
    height: 70px;
    background-color: rgb(238, 238, 238);
    align-items: center;
    justify-content: space-around;
    .boItem{
      font-size: 28px;
      position: relative;
       &::after{
      display: block;
      content: '';
      position: absolute;
      left: -30px;
      top: 14px;
      width:15px;
      height: 15px;
      background: chocolate;
      border-radius: 50%;
    } 
    }
   
  
    
  }
  .btom{
    margin-top: 50% ;
    transform: translateY(-50%);
    // background: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      margin: 50px auto;
      text-align: center;
      width: 248px;
      height: 248px;
      display: block;
      overflow: hidden;
    }
    button{
      width: 480px;
      height: 92px;
      background: rgb(221, 26, 33);
      color: #fff;
      font-size: 30px;
    }
  }
</style>
