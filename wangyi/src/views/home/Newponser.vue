<template>
  <div class="wrpa">
   <div class="header">
     <div class="Monopolization">新人专享礼</div>
   </div>
   <div class="bodyE">
     <div class="left">
       <h2>新人专享礼包</h2>
       <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
     </div>
     <div class="right">
       <div class="top">
         <div class="lucky">福利社</div>
         <div class="day">今日特价</div>
         <img src="https://yanxuan-item.nosdn.127.net/ef494df1dc727c0e5cc8ebafb1de5d38.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
       </div>
       <div class="bottom">
         <div class="tuan">新人拼团</div>
         <div class="yiyuan">1元起包邮</div>
         <img src="https://yanxuan-item.nosdn.127.net/08ed8b0e068a3ff2a0aae8c427db1858.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
       </div>
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
  .wrpa{
    width: 750px;
    height: 555px;
    background: sandybrown;
    border-bottom: 20px solid rgb(238, 238, 238);
    .header{
      width: 750px;
      height: 90px;
      position: relative;
      font-size: 35px;
      &::after{
        position: absolute;
        left: 230px;
        top: 43px;
        content: '';
        width: 40px;
        height: 6px;
        background: #333;
      }
      &::before{
        position: absolute;
        right: 230px;
        top: 43px;
        content: '';
        width: 40px;
        height: 6px;
        background: #333;
      }
      .Monopolization{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
       
       
      }
    }
    .bodyE{
      position: relative;
      width: 750px;
      height: 437px;
      margin: 0 20px 20px;
      .left{
        width: 342px;
        height: 434px;
        background: rgba(249, 233, 207);
        h2{
          font-size:35px ;
          position: relative;
          
          left: 25px;
          top: 30px;
        }
        img{
          display: block;
          margin: 0 auto;
          margin-top: 80px;
          width: 285px;
          height: 257px;
        }
      }
      .right{
        position: absolute;
        left: 360px;
        top: 0;
        background: #000;
        width: 343px;
        height: 434px;
        .top{
          width: 100%;
          height: 215px;
          background: rgb(251, 226, 211);
          .lucky{
            font-size: 35px;
            padding: 20px
          }
          .day{
            font-size: 29px;
            padding-left: 20px;
          }
          img{
            position: absolute;
            left: 140px;
            top: 10px;
            width: 200px;
            height: 200px;
          }
        }
        .bottom{
          margin-top: 4px;
          width: 100%;
          height: 215px;
          background: rgb(255, 236, 194);
          .tuan{
            font-size: 35px;
            padding: 20px;
          }
          .yiyuan{
            font-size: 28px;
            width: 140px;
            text-align: center;
            background: rgb(203, 182, 147);
            margin-left: 20px;
            border-radius: 10px;
            font-weight: bold;
            color: #fff;
          }
          img{
            width: 200px;
            height: 200px;position: absolute;
            left: 140px;
            top: 230px;
          }
        }
      }
    }
  }
</style>
