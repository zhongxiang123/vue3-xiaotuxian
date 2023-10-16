import { ref,onMounted } from 'vue'
import { getBannerAPI } from "@/apis/home";

//封装banner轮播图相关代码
export function useBanner() {
    //获取banner
// 定义响应式数据
const bannerList = ref([]);
// 封装函数
const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: "2",
  });
  console.log(res);
  bannerList.value = res.result;
};

//挂载函数
    onMounted(() => getBanner());
    
    return {
        bannerList
    }
}