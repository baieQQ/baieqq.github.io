<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> 台南市綠運輸使用經驗 </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div class="nav-link cursor-pointer" :class="{ 'active' : currentPage === 0 }" @click="currentPage = 0"> 個人通勤現況調查 </div>
          </li>
          <li class="nav-item">
            <div class="nav-link cursor-pointer" :class="{ 'active' : currentPage === 1 }" @click="currentPage = 1"> 大眾運輸使用 </div>
          </li>
          <li class="nav-item">
            <div class="nav-link cursor-pointer" :class="{ 'active' : currentPage === 2 }" @click="currentPage = 2"> 共享運具使用 </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <QuestionBlock_1 v-if="data != null && currentPage === 0" :data="data"></QuestionBlock_1>
</template>


<script>
import { defineComponent } from 'vue'
import QuestionBlock_1 from "@/components/QuestionBlock_1.vue";
import fetchJson from "@/utilitys/fetch-json.js";
import * as echarts from 'echarts';

export default defineComponent({
  name: 'MainPage',
  components: {
    QuestionBlock_1
  },
  data() {
    return {
      currentPage: 0,
      data: null,
      checkedNames: [],
      questionData: []
    }
  },
  methods: {
    // addCircle({ dom, text, data }) {
    //   const option = {
    //     title: {
    //       text: text,
    //       subtext: '',
    //       left: 'left',
    //       top: 5,
    //       left: 5
    //     },
    //     tooltip: {
    //       trigger: 'item'
    //     },
    //     legend: {
    //       orient: 'horizontal',
    //       left: 'center',
    //       bottom: 0
    //     },
    //     series: [
    //       {
    //         name: '',
    //         type: 'pie',
    //         radius: ['0%',  '55%'],
    //         center: ['50%', '50%'],
    //         data: data,
    //         avoidLabelOverlap: false,
    //         percentPrecision: 0,
    //         label: {
    //           normal: {
    //             formatter: '{b}:{d}%',
    //             show: true,
    //             position: 'outside',
    //             fontSize: '14',
    //           },
    //         },
    //         labelLine: {
    //           show: true,
    //           length: 5,
    //           length2: 5,
    //         },
    //       }
    //     ]
    //   };
    //   let myChart = echarts.init(dom, 'dark');
    //   myChart.setOption(option);
    //   window.addEventListener('resize', function() {
    //     myChart.resize();
    //   });
    // },
    // addBar({ dom, text, xAxisData, seriesData}) {
    //   const option = {
    //     title: {
    //       text: text,
    //       subtext: '',
    //       left: 'left',
    //       top: 5,
    //       left: 5
    //     },
    //     tooltip: {
    //       trigger: 'axis',
    //       axisPointer: {
    //         // Use axis to trigger tooltip
    //         type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    //       }
    //     },
    //     grid: {
    //       left: '3%',
    //       right: '4%',
    //       bottom: '3%',
    //       containLabel: true
    //     },
    //     xAxis: {
    //       type: 'category',
    //       data: xAxisData,
    //       axisTick: {
    //         show: false,
    //       },
    //       axisLabel: {
    //         interval: 0,
    //         width: 55,
    //         overflow: 'break'
    //       }
    //     },
    //     yAxis: {
    //       type: 'value'
    //     },
    //     series: [
    //       {
    //         data: seriesData,
    //         type: 'bar',
    //         showBackground: true,
    //         backgroundStyle: {
    //           color: 'rgba(180, 180, 180, 0.2)'
    //         },
    //         label: {
    //           normal: {
    //             formatter: '{c} 人',
    //             show: true,
    //             position: 'inside',
    //             fontSize: '14',
    //           },
    //         },
    //         labelLine: {
    //           normal: {
    //             show: true
    //           }
    //         },
    //       },
    //     ],
    //   };
    //   let myChart = echarts.init(dom, 'dark');
    //   myChart.setOption(option);
    //   window.addEventListener('resize', function() {
    //     myChart.resize();
    //   });
    // }
  },
  mounted() {
    (async () => {
      const res = await fetchJson("/data.json");
      this.data = res.data;
      console.log(this.data);
    })();
  },
})
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
  
  &:active {
    transform: scale(1.01);
  }
}

.item {
  height: 45vh;
  border: black solid 5px;
  margin: 5px 5px 5px 5px;
  border-radius: 15px;
  .echarts-item {
    height: 100%;
    width: 100%;
  }
}

.checkbox-item {
  height: 45vh;
  border: black solid 5px;
  margin: 5px 5px 5px 5px;
  border-radius: 15px;
  overflow-y: scroll;
}
</style>