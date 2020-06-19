<template>
  <div id="wrap">
   <div class="header">
     <div class="boxWrap" @click="Sousuo">
       <img class="sousuo" src="../../assets/img/fangdajing.svg" alt="">
        <input type="text" placeholder="搜素商品,工3333款好物">

     </div>
   </div>
   <div class="section">
     <ul class="left">
       <li class="leftItem " :class="{active:navId === item.id}" v-for="(item,index) in SortData" :key="item.id"
        @click="touchId(item.id)"
       >
         {{item.name}}
       </li>
       </li>
     </ul>
     <div class="right">
       <div class="topImg" >
         <img v-if="cateGoryObj" :src="cateGoryObj.imgUrl" alt="">
         <ul class="imgList" v-if="cateGoryObj">
           <li class="imgItem" v-for="(item,index) in cateGoryObj.subCateList" :key="item.id">
             <img :src="item.wapBannerUrl" alt="">
             <div>{{item.frontName}}</div>
           </li>
         </ul>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import {request} from '../../request/index'
export default {
  name: '',
  data(){
    return{
      SortData:[],
      navId:''
    }
  },
  mounted(){
    this.getcategoryData()
  },
  methods:{
    touchId(navId){
      this.navId = navId
      console.log(navId)
    },
    // 发送网络请求 数据
    async getcategoryData(){
      let result = await request('/categoryDatas')
      this.SortData = result.data
       this.navId = result.data[0].id
      console.log(result)
    },
    Sousuo(){
      this.$router.push('/sousuo')
      // console.log(1)
    }
  },
  computed:{
    cateGoryObj(){
      return this.SortData.find(item => 
      item.id === this.navId )
    }
  }
  
}
</script>

<style lang="less" scoped>
  #wrap{
   .header{
     position: relative;
     width: 750px;
     height:88px;
    //  background: orange;
     padding-bottom:90px ;
     border-bottom: 10px solid #eee;
    .boxWrap{
      width: 690px;
      height: 56px;
      background: rgb(237, 237, 237);
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      img{
        width: 56px;
        height: 56px;
        position: absolute;
        left: 120px;
      }
      input{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background: rgb(237, 237, 237);
        border: 1px solid  rgb(237, 237, 237);
        outline:none;
      }
    }
   }
   .section{
    //  float: right;
    display: flex;
     .left{
      width: 163px;
      // height: 100%px;
      // border-right: 2px solid #eee;
      // height: 90px;
      // background: orange;
      display: flex;
      flex-direction: column;
      text-align: center;
      .leftItem{
        margin-top: 50px;
        color: #333;
        font-size:27px ;
        position: relative;
      }
       .active::before{
         content: '';
         width: 5px;
         height: 40px;
         background: green;
         position: absolute;
         left: 0;
         top: -3px;
         border-radius:10px;
       }
       .active{
         color: red;
       } 
     }
     .right{
       flex: 1;
       width: 100%;
       border-left: 2px solid #333;
       height: 100%;
       margin: 0 20px;
      //  background: orangered;
      .topImg{
        img{
          width: 100%;
          height: 192px;
          display: block;
        }
        .imgList{
          // background: chartreuse;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
           &::after{
              content: '';
              display: block;
              width: 60px;
              height: 340px;
              // background: red;
            }
          .imgItem{
            margin-bottom: 30px;
            width: 33.333%;
            text-align: center;
           
            img{
              width: 144px;
              height: 144px;
              display: inline-block;
            }
          }
        }
      }
     }
   }

  }
</style>
