<template>
  <div class="nav">
    <div class="navLeft">
       <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >slider1</div>
            <div class="swiper-slide">slider2</div>
            <div class="swiper-slide">slider3</div>
            <div class="swiper-slide">slider4</div>
            <div class="swiper-slide">slider5</div>
            <div class="swiper-slide">slider6</div>
            <div class="swiper-slide">slider7</div>
            <div class="swiper-slide">slider8</div>
          </div>
 
</div>
      </div>
      <div class="navRight">

      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: '',
  // mounted(){
  //    var mySwiper = new Swiper ('.swiper-container', {
  //      loop: true,
  //     slidesPerView: 5,
  //     // 如果需要分页器
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // }) 
  // }
}
</script>

<style lang="less" >

   .nav{
    display: flex;
    .navLeft{
      width:650px;
      height: 60px;
      // background-color: red;
      display: flex;
      align-items: center;  
      text-align: center;
      overflow: hidden;
      .navitem{
      // flex: 1;
      margin: 30px;
      white-space: nowrap;
      line-height: 60px;
      box-sizing: border-box;
      font-size: 29px;
      }
      .swiper-container{
       .swiper-slide{
         width:50px;
         background: red;
       }
      }

    }
    .navRight{
      width: 100px;
      height: 60px;
      background-color: orange;
    }
    
  }

</style>
