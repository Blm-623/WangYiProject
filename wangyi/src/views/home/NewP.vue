<template>
  <div>
    <Soltt>
      <div class="top" slot="textcontent">
          <div class="left">
          新品发布
        </div>
        <!-- <div class="cen">
          <span>00</span>
          <div>:</div>
          <span>00</span>
          <div>:</div>
          <span>00</span>
        </div> -->
        <div class="righ">
          更多>
        </div>
      </div>

        <div slot="image">
      <div class="Bot">
        <div class="botItem">
          <img src="../../assets/img/fangdajing.svg" alt="">
          <span class="wrpaText">xxxjjjjj22222222jjjj2</span>
          <span class="newFont">¥189</span>
          <span class="oldFont">¥111</span>
       </div>
       <div class="botItem">
          <img src="../../assets/img/fangdajing.svg" alt="">
          <span class="newFont">¥189</span>
          <span class="oldFont">¥111</span>
       </div>
       <div class="botItem">
          <img src="../../assets/img/fangdajing.svg" alt="">
          <span class="newFont">¥189</span>
          <span class="oldFont">¥111</span>
       </div>
       <div class="botItem">
          <img src="../../assets/img/fangdajing.svg" alt="">
          <span class="newFont">¥189</span>
          <span class="oldFont">¥111</span>
       </div>
       <div class="botItem">
          <img src="../../assets/img/fangdajing.svg" alt="">
          <span class="newFont">¥189</span>
          <span class="oldFont">¥111</span>
       </div>
       <div class="botItem">
          <img src="../../assets/img/fangdajing.svg" alt="">
          <span class="newFont">¥189</span>
          <span class="oldFont">¥111</span>
       </div>
      </div>
    
      </div>

    </Soltt>
  </div>
</template>

<script>
import Soltt from './soltt'

export default {
  name: '',
  components:{
    Soltt
  }
}
</script>

<style lang="less" scoped>
  .top{
      width: 750px;
      height: 100px;
      display: flex;
      align-items: center;
      position: relative;
      .left{
        font-size: 35px;
       margin: 0 20px;
      }
      .cen{
        display: flex;
        text-align: center;
        span{
          margin: 0px 5px;
          display:inline-block;
          width: 36px;
          height: 36px;
          background: rgb(51, 51, 51);
          color: #fff;
        }
       
      }
      .righ{
        
        position: absolute;
        right: 10px;
        top: 30%;
        font-size: 30px;
      }
    }

     .Bot{
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      border-bottom: 20px solid #eee;
      .botItem{
        width: 33.33%;
        margin-bottom: 20px;
        img{
        width: 216px;
         height: 216px;
         background-color: #eee;
         margin: 10px 0;
        }
        span{
          font-size: 28px;
        }
        .newFont{
          color: red;
          margin: 0px 15px;
        }
        .oldFont{
          text-decoration: line-through;//这个是横线 
        }
        .wrpaText{
          display: block;
          // display: -webkit-box;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // -webkit-box-orient: vertical;
          // -webkit-line-clamp: 1;
          white-space: wrap;
          	overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
        }
      }
    }
</style>
