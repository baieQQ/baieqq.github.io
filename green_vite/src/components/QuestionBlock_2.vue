<template>
  <div class="col-md-6" v-for="(question, index) in questionsFilter" :key="index">
    <div class="item">
      <button type="button" class="btn btn-primary filter-btn mt-5 m-md-2"
        @click="question.echartsShow = !question.echartsShow">
        篩選
      </button>
      <div v-show="question.echartsShow" class="echarts-item" :id="`circle_${index}_2`"></div>
      <div v-show="!question.echartsShow" class="checkbox-item">
        <div v-for="(itemFilter, key) in baseFilter" :key="key" class="py-2">
          <div v-if="key !== 'echartsShow'">
            <h5>篩選： {{ i18n[key] }}</h5>
            <div class="form-check form-check-inline" v-for="item in itemFilter" :key="`${item}_${index}`">
              <input class="form-check-input" type="checkbox" :id="`${item}_${index}_2`" :value="item" v-model="question[key]">
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
    i18n: {
      type: Object,
      default: {},
    },
    baseFilter: {
      type: Object,
      default: {},
    },
    filterMap: {
      type: Map,
      default: {},
    },
  },
  data() {
    return {
      dataMap: [
        'B0您是否使用過台南市大眾運輸工具？(例:公車、火車)', 
        'B1您通常在台南市內使用哪種大眾運輸工具？', 
        'B2您對台南市的大眾運輸服務整體滿意度如何？',
        'B4您使用台南市大眾運輸的主要原因是什麼？',
        'B5您通常使用哪種方式取得台南市公共交通資訊？',
        'B6您對台南市的公共交通資訊系統滿意度如何？',
        'B7您是否願意在台南市支付更高的票價以換取更好的大眾運輸服務品質？',
      ],
      questionsFilter: [
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
  methods: {
    init() {
      for(let i = 0; i < 7; i++) {
        this.changeEchartDisplay(i, this.data)
        // console.log(i, this.data);
      }
    },
    addCircle({ dom, text, data }) {
      const option = {
        title: {
          text: text,
          subtext: '',
          left: 'left',
          top: 5,
          left: 5,
          textStyle: {
            lineHeight: 24,
          }
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
    },
    changeEchartDisplay(index) {
      const question_data = this.data.filter(item => {
        const newValue = this.questionsFilter[index];
        for (const category in newValue) {
          if(category === "echartsShow") continue;
          const chineseCategory = this.filterMap.get(category);
          if (!newValue[category].includes(item[chineseCategory])) {
            return false;
          }
        }
        return true; 
      });

      const map = new Map()
      const questionsMap = [
        ['是', '否'],
        ['公車', '火車', '很少使用大眾運輸'],
        ['非常滿意', '滿意', '普通', '不滿意', '非常不滿意'],
        ['舒適度', '準時性', '票價', '車次頻率'],
        ['官方網站', '手機應用程式', '公車站牌資訊', '其他乘客'],
        ['非常滿意', '滿意', '普通', '不滿意', '非常不滿意'],
        ['是', '否'],
      ]
      questionsMap[index].forEach(item => {
        map.set(item, 0);
      })
      question_data.forEach(item => {
        const category = item[this.dataMap[index]]
        if(map.has(category)) {
          map.set(category, map.get(category) + 1)
        } else {
          map.set(category, 1)
        }
      })
      const echartsData = []
      let sumValue = 0
      map.forEach((value, key) => {
        if((value > 3 || questionsMap[index].includes(key)) && key !== undefined) {
          echartsData.push({
            name: key,
            value: value
          });
          sumValue += value;
        } 
      })
      console.log(index, echartsData)
      const textArray = [`是否使用過台南市大眾運輸工具`,
                        '通常使用哪種大眾運輸工具',
                        '對台南市大眾運輸服務的整體滿意度',
                        '使用台南市大眾運輸的主要原因是什麼',
                        '通常用哪種方式取得公共交通資訊？',
                        '對台南市公共交通資訊系統之滿意度',
                        '是否願意在台南市支付更高的票價\n以換取更好的大眾運輸服務品質'];
      this.addCircle({
        dom: document.getElementById(`circle_${index}_2`), 
        text: `${textArray[index]}\n圖表人數：${sumValue}`,
        data: echartsData
      })
    },
    setupWatchers() {
      this.$watch(
        () => this.data,
        (newValue, oldValue) => {
          this.init()
        },
      );

      this.questionsFilter.forEach((object, index) => {
        this.$watch(
          () => this.questionsFilter[index],
          (newValue, oldValue) => {
            this.changeEchartDisplay(index)
          },
          { deep: true }
        );
      });
    },
  },
  mounted() {
    this.init();
    this.setupWatchers();
  },
})
</script>