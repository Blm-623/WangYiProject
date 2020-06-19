<template>
<!-- .grid即是所有图片的容器
      .grid-item是单张图片的容器
 -->
 <div class="grid">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>
  .box1{
    width: 200px;
    height: 200px;
    // border: 1px solid #333;
    background: chocolate;
     &::before{
         display: table;
          content: "";
       }
    .box2{
      width: 100px;
      height: 100px;
       border: 1px solid #333;
       margin: 20px;
      
    }
  }
</style>
