<script setup>
import {getBannerAPI} from '@/apis/home'
import { onMounted,ref } from 'vue'
// 定义响应式数据
const bannerList=ref([])
// 封装函数
const getBanner=async()=>{
    const res =await getBannerAPI()
    console.log(res)
    bannerList.value=res.result
}

//挂载函数
onMounted(()=>getBanner())

</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>