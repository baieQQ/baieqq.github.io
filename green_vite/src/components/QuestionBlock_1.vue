<template>
  <div class="container m-auto">
    <div class="row">
      <div class="col-md-6" v-for="(question, index) in questionsDataFilter" :key="index">
        <div class="item">
          <button @click="question.echartsShow = !question.echartsShow" style="position: absolute; top: 0; right: 30px; margin: 5px; background-color: white; z-index: 100;"> 篩選</button>
          <div v-show="question.echartsShow" class="echarts-item" :id="`circle_${index}`"></div>
          <div v-show="!question.echartsShow" class="checkbox-item">
            <div v-for="(itemFilter, key) in baseFilter" :key="key" class="py-2">
              <div v-if="key !== 'echartsShow'">
                <h5>篩選： {{ i18n[key] }}</h5>
                <div class="form-check form-check-inline" v-for="item in itemFilter" :key="`${item}_${index}`">
                  <input class="form-check-input" type="checkbox" :id="`${item}_${index}`" :value="item" v-model="question[key]">
                  <label class="form-check-label" :for="`${item}_${index}`">
                    {{ item }}
                  </label>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import * as echarts from 'echarts';

export default defineComponent({
  name: 'QuestionBlock_1',
  props: {
    data: {
      type: Object,
      default: [],
    },
  },
  data() {
    return {
      checkedNames: ['生理男', '生理女'],
      i18n: {
        gender: '性別',
        age: '年齡',
        edcaution: '教育程度',
        life_time: '在台南生活時間',
        status: '在台南的身份',
      },
      baseFilter: {
        echartsShow: true,
        gender: ['生理男', '生理女'],
        age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
        edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
        life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
        status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
      },
      questionsDataFilter: [
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
        {
          echartsShow: true,
          gender: ['生理男', '生理女'],
          age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
          edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
          life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
          status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
        },
      ]
    }
  },
  computed: {
    question1() {
      const question1_data = this.data.filter(item => {
        return this.checkedNames.indexOf(item['D1性別']) !== -1;
      });

      this.addCircle({
        dom: circle_1, 
        text:'通常使用哪種大眾運輸工具',
        data: [
          { value: 144, name: '公車' },
          { value: 103, name: '火車' },
          { value: 99, name: '很少使用大眾運輸' },
          { value: 7, name: '其他' },
      ]})
      return question1_data; 
    }
  },
  methods: {
    init() {
      this.addCircle({
        dom: circle_1, 
        text:'通常使用哪種大眾運輸工具',
        data: [
          { value: 144, name: '公車' },
          { value: 103, name: '火車' },
          { value: 99, name: '很少使用大眾運輸' },
          { value: 7, name: '其他' },
      ]})

      this.addCircle({
        dom: circle_2, 
        text:'通常使用哪種大眾運輸工具',
        data: [
          { value: 144, name: '公車' },
          { value: 103, name: '火車' },
          { value: 99, name: '很少使用大眾運輸' },
          { value: 7, name: '其他' },
      ]})

      this.addCircle({
        dom: circle_3, 
        text:'對台南市大眾運輸服務的整體滿意度',
        data: [
          { value: 11, name: '非常滿意' },
          { value: 76, name: '滿意' },
          { value: 173, name: '普通' },
          { value: 59, name: '不滿意' },
          { value: 34, name: '非常不滿意' },
      ]})

      this.addCircle({
        dom: circle_4, 
        text:'使用台南市大眾運輸的主要原因是什麼',
        data: [
          { value: 90, name: '票價' },
          { value: 53, name: '車次頻率' },
          { value: 46, name: '舒適度' },
          { value: 39, name: '準時性' },
          { value: 18, name: '其他' },
      ]})

      this.addCircle({
        dom: circle_5, 
        text:'使用大眾運輸的主要原因是什麼',
        data: [
          { value: 90, name: '票價' },
          { value: 53, name: '車次頻率' },
          { value: 46, name: '舒適度' },
          { value: 39, name: '準時性' },
          { value: 18, name: '其他' },
      ]})

      this.addCircle({
        dom: circle_6, 
        text:'通常用哪種方式取得公共交通資訊？',
        data: [
          { value: 254, name: '手機應用程式' },
          { value: 48, name: '官方網站' },
          { value: 39, name: '公車站牌資訊' },
          { value: 3, name: '其他乘客' },
      ]})

      this.addCircle({
        dom: circle_7, 
        text:'對台南市公共交通資訊系統之滿意度',
        data: [
          { value: 8, name: '非常滿意' },
          { value: 89, name: '滿意' },
          { value: 182, name: '普通' },
          { value: 49, name: '不滿意' },
          { value: 25, name: '非常不滿意' },
      ]})

      this.addCircle({
        dom: circle_8, 
        text:'是否願意在台南市支付更高的票價\n以換取更好的大眾運輸服務品質',
        data: [
          { value: 254, name: '是' },
          { value: 99, name: '否' },
      ]})
    },
    addCircle({ dom, text, data }) {
      const option = {
        title: {
          text: text,
          subtext: '',
          left: 'left',
          top: 5,
          left: 5
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          bottom: 0
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['0%',  '55%'],
            center: ['50%', '50%'],
            data: data,
            avoidLabelOverlap: false,
            percentPrecision: 0,
            label: {
              normal: {
                formatter: '{b}:{d}%',
                show: true,
                position: 'outside',
                fontSize: '14',
              },
            },
            labelLine: {
              show: true,
              length: 5,
              length2: 5,
            },
          }
        ]
      };
      let myChart = echarts.init(dom, 'dark');
      myChart.setOption(option);
      window.addEventListener('resize', function() {
        myChart.resize();
      });
    },
    addBar({ dom, text, xAxisData, seriesData}) {
      const option = {
        title: {
          text: text,
          subtext: '',
          left: 'left',
          top: 5,
          left: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            width: 55,
            overflow: 'break'
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: seriesData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            label: {
              normal: {
                formatter: '{c} 人',
                show: true,
                position: 'inside',
                fontSize: '14',
              },
            },
            labelLine: {
              normal: {
                show: true
              }
            },
          },
        ],
      };
      let myChart = echarts.init(dom, 'dark');
      myChart.setOption(option);
      window.addEventListener('resize', function() {
        myChart.resize();
      });
    }
  },
  mounted() {
    this.init();
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
  position: relative;
  height: 45vh;
  border: black solid 5px;
  margin: 5px 5px 5px 5px;
  border-radius: 15px;

  .echarts-item {
    height: 100%;
    width: 100%;
  }

  .checkbox-item {
    height: 100%;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
  }
}

</style>