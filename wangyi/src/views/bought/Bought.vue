<template>
 <div  class="BougWrap">
   <div class="header">
     <img src="../../assets/icon-font/baise/home.svg" alt="">
     <div>值得买</div>
     <img src="../../assets/img/fangdajing.svg" alt="">
     <img src="../../assets/icon-font/baise/icon-.svg" alt="">
   </div>
   <div class="plate">
     <div class="top">
       <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
       <div class="text">严选好物 用心生活</div>
     </div>
     <div class="botm">

     </div>
   </div>
   <div class="content"></div>
 </div>
</template>

<script>

export default {
  name: '',
}
</script>

<style lang="less" scoped>
  .BougWrap{
    .header{
      height:100px;
      background: chocolate;
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
    .plate{
      margin: 0 20px;
      position: relative;
      .top{
        height: 520px;
        // background: rgb(204, 170, 110);
        background-image: linear-gradient(to bottom left, rgb(204, 170, 110), rgb(232, 233, 213));
        position: relative;
        
        img{
          width: 130px;
          height: 68px;
          position: absolute;
          left: 10px;
          top: 40px;
        }
        div{
          position: absolute;
          left: 160px;
          top: 50px;
          font-size: 30px;
          color: #fff;
        }
      }
      .botm{
        width: 670px;
        margin: 0 20px;
        height: 540px;
        background: green;
        position: absolute;
        left: 0;
        top: 120px;
        border-radius: 20px ;
      }
    }
  }
</style>
