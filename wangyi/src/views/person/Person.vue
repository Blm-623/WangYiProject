<template>
  <div>
    <MaiHeader> <div class="header">
        <img src="../../assets/icon-font/baise/home.svg" alt="">
        <div>网易严选</div>
        <img src="../../assets/img/fangdajing.svg" alt="">
        <img src="../../assets/icon-font/baise/icon-.svg" alt="">
      </div>
    </MaiHeader>
    
    <div class="center">
      <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="bom">
        <button class="btn1">
          <i class="el-icon-mobile-phone"></i>
          <span>手机号码跨界登录</span>
        </button>
        <button class="btn2">
          <i class="el-icon-message"></i>
          <span>邮箱账号登录</span>
        </button>
    </div>
     <div>
       
      </div> 
  </div>
</template>

<script>
import MaiHeader from '../bought/MaiHeader'
export default {
  name: '',
  components:{
    MaiHeader
  }
}
</script>

<style lang="less" scoped>
.header{
      height:100px;
      // background: chocolate;
      display: flex;
      align-items: center;
      margin: 0 20px;
      img{
        width: 48px;
        height: 100px;
        margin-left:30px ;
      }
      div{
        flex: 1;
        font-size:40px;
        margin-left: 250px;
      }
    }

.center{
  img{
    width:268px;
    height: 90px;
    position: relative;
    left: 240px;
    top:200px;
  }
}
.bom{
  margin-top: 500px;
  // background: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn1{
    background: rgb(221, 26, 33);
    color: #fff;
    i{
      margin: 0 30px;
      // margin-top: 20px;
      font-size: 50px;
    }
    line-height: 94px;

  }
  .btn2{
    margin: 30px 0;
    background-color: rgb(242, 245, 244);
    border: 1px solid rgb(221, 26, 33);
     i{
      margin: 0 30px;
      font-size: 50px;
      color:  rgb(221, 26, 33);
    }
     color:  rgb(221, 26, 33);
    line-height: 94px;
  }
  button{
    width: 670px;
    height: 94px;
  }
}
</style>
