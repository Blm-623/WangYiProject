<template>
  <div class="wrap">
    <div class="top" v-if="indexData.data">
      {{indexData.data.categoryHotSellModule.title}}
    </div>
    <div class="bottom">
      <div class="top-T">
        <div class="left" v-if="indexData.data">
          <div>热销榜</div>
          <img :src="indexData.data.categoryHotSellModule.categoryList[0].picUrl" alt="">
        </div>
        <div class="right" v-if="indexData.data">
          <div>好评榜</div>
          <img :src="indexData.data.categoryHotSellModule.categoryList[0].picUrl" alt="">
        </div>
      </div>
      <div class="bot-B">
        <div class="botItem">
          <div>居家生活榜</div>
          <img src="../../assets/img/images/personal/personal.png" alt="">
        </div>

        <div class="botItem">
          <div>居家生活榜</div>
          <img src="../../assets/img/images/personal/personal.png" alt="">
        </div>

        <div class="botItem">
          <div>居家生活榜</div>
          <img src="../../assets/img/images/personal/personal.png" alt="">
        </div>

        <div class="botItem">
          <div>居家生活榜</div>
          <img src="../../assets/img/images/personal/personal.png" alt="">
        </div>

        <div class="botItem">
          <div>居家生活榜</div>
          <img src="../../assets/img/images/personal/personal.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: '',
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState(['indexData'])
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
  .wrap{
    border-bottom:20px solid #eee ;
    .top{
      width: 750px;
      height: 100px;
      padding: 20px;
      font-size: 30px;
      font-weight: bold;
      color: rgb(117, 117, 117);
    }
    .bottom{
      width: 750px;
      height: 610px;
      .top-T{
        display: flex;
        justify-content: space-around;
        .left{
          width: 340px;
          height: 200px;
          background: rgb(249, 204, 157);
          position: relative;
          div{
            font-size: 30px;
            padding: 60px 0 0 20px;
          }
          img{
            width: 200px;
            height: 200px;
            position: absolute;
            top: 0;
            right: 0;
          }
          &::after{
            content: '';
            position: absolute;
            left: 7%;
            top:57%;
            width: 60px;
            height: 6px;
            background: #333;
          }
        }
        .right{
           width: 340px;
          height: 200px;
          background: rgb(235, 249, 246);
          position: relative;
          div{
            font-size: 30px;
            padding: 60px 0 0 20px;
          }
          img{
            width: 200px;
            height: 200px;
            position: absolute;
            top: 0;
            right: 0;
          }
          &::after{
            content: '';
            position: absolute;
            left: 7%;
            top:57%;
            width: 60px;
            height: 6px;
            background: #333;
          }
        }
      }
      .bot-B{
        display: flex;
        flex-wrap: wrap;
        // width: 750px;
        text-align: center;
        .botItem{
          width: 23%;
          margin: 10px 5px;
          padding: 10px 0;
          background: rgb(245, 245, 245);
          div{
            font-size: 25px;
            margin-bottom:10px ;
          }
          img{
            width: 120px;
            height: 120px;
         }
        }
       
      }
    }
  }
</style>
