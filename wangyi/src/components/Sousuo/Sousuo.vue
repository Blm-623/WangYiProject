<template>
  <div class="box">
   <div class="wrap">
      <div class="top">
        <div class="left">
          <img src="@/assets/img/fangdajing.svg" alt="">
          <input type="text" placeholder="趋势新宠，地址5折抢">
        </div>
        <div class="call" @click="goBack">取消</div>
      </div>
      <div class="bom">
        <div class="hot">热门搜索</div>
        <div class="List">
          <div class="Item" v-for="(item,index) in SouData.hotKeywordVOList" :key="index"> {{item.keyword}}</div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>

import axios from 'axios'
// axios.defaults.baseURL='/api'
export default {
  name: '',
  data(){
    return {
      SouData:[]
    }
  },
  methods:{
    goBack(){
      this.$router.push('/sort')
    },
    async sousuo(){
        let   result = await axios.get('/api/xhr/search/init.json')
        this.SouData = result.data.data
      //  console.log(result.data.data)
    }
  },
  mounted(){
    this.sousuo()
  }
}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 100%;
    background: rgb(238, 238, 238);
    position: fixed;
    left: 0;
    bottom: 0px;
    z-index: 999;
    .wrap{
      // height: 800px;
      // background: #fff;
      .top{
        width: 100%;
        height: 88px;
        // background: olivedrab;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .left{
          width: 605px;
          height: 56px;
           background: rgb(244, 244, 244);
          position: relative;
          input{
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            background: rgb(244, 244, 244);
            border: 1px solid  rgb(237, 237, 237);
            outline:none;
          }
          img{
            width: 50px;
            height: 50px;
            position: absolute;
            left: 70px;
            top: 4px;
          }
        }
        .call{
          width: 60px;
          font-size: 30px;
          height: 44px;
          // background: green;
        }
      }
      .bom{
        margin: 0 20px;
        // width: 100%;
        // height: 900px;
        // background: chocolate;
          background: #fff;
          padding-bottom:50px ;
        &::before{
            display: table;
            content: "";
          }
        .hot{
          font-size: 30px;
          color:#333;
          margin: 20px;
          
        }
        .List{
          .Item{
            // width: 10px;
            // height: 60px;
            display: inline-block;
            border: 1px solid red;
            margin-left: 20px;
            margin-bottom: 50px;
            // margin-bottom: 30px;
          }
        }
      }
    }
    
  }
</style>
