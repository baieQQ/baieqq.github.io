<template>
  <div class="col-md-6" v-for="(question, index) in questionsFilter" :key="index">
    <div class="item">
      <button type="button" class="btn btn-primary filter-btn mt-5 m-md-2"
        @click="question.echartsShow = !question.echartsShow">
        篩選
      </button>
      <div v-show="question.echartsShow" class="echarts-item" :id="`circle_${index}_1`"></div>
      <div v-show="!question.echartsShow" class="checkbox-item">
        <div v-for="(itemFilter, key) in baseFilter" :key="key" class="py-2">
          <div v-if="key !== 'echartsShow'">
            <h5>篩選： {{ i18n[key] }}</h5>
            <div class="form-check form-check-inline" v-for="item in itemFilter" :key="`${item}_${index}`">
              <input class="form-check-input" type="checkbox" :id="`${item}_${index}_1`" :value="item" v-model="question[key]">
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
        'A1您在最近一周內於臺南市外出活動的主要目的是什麼？', 
        'A2呈上題，請問通勤的距離大約有多遠？', 
        'A3呈上題， 請問通勤的頻率大約多頻繁？',
        'A4呈上題，請問目前主要使用哪種交通工具通勤？',
        'A5呈上題，請問一星期的平均通勤成本大約是多少金額?',
        'A6請問什麼原因會導致您在外出時不太願意使用綠運輸',
        'A7請問什麼會增加您在外出時更願意去嘗試綠運輸的意願',
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
          left: 5,
          textStyle: {
            lineHeight: 24,
          }
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
      const textArray = ['一周內外出活動的主要目的',
                        '每次通勤的距離',
                        '每周通勤的頻率',
                        '通勤時主要使用的交通工具',
                        '一星期的平均通勤成本',
                        '導致您外出時不願意使用綠運輸的原因',
                        '增加您外出時更願意嘗試使用綠運輸的原因'];
      const questionsMap = [
        ['通勤：上、下班。', '通學：上、下學、圖書館。', '商務：外出開會、出差（非經常性）。', '購物：買菜、加油、大賣場、百貨公司、逛街。', '個人活動：照顧家人、剪頭髮、接送小孩、補習。', '休閒：去健身房、運動、度假、看體育活動、去博物館、公園、劇院。', '業務外出：去拜訪客戶、推銷保險或商品（經常性）。'],
        ['1公里以內', '1-5公里', '6-10公里', '11-15公里', '15-20公里', '21公里以上'],
        ['不定期', '1 ~ 2 天（一周）', '3 ~ 4 天（一周）', '5 ~ 7 天（一周）'],
        ['步行', '自行車', '公車', '共享運具-租用車輛(GoShare、U-Bike、iRent等)', '汽機車（電動）', '汽機車（燃油）'],
        ['100元以下', '101~200元', '201~300元', '301~400元', '401~500元', '500元以上'],
        ['缺乏方便性：會造成我需要花更長的時間或費用才能到達目的地。', '不舒適或不便：沒有像自己騎車或開車舒適或方便 (如騎單車很熱、配合公車時間很麻煩、多人在車上空間人擠人)', '路線不完善或不方便：公車路線覆蓋不足或無法直達目的地，需要轉乘或多次換車等，覺得麻煩。', '資訊不足：啊我就不清楚可用的路線、時刻表、票價等相關資訊。', '個人需求不符：我自己身體行動不便、出門行李多或大等等，搭車不方便'],
        ['提供試用機會：舉辦免費或優惠的試乘試騎活動', '提供清晰、易懂的資訊：包括路線、時刻表、票價、轉乘資訊等', '改善路線與便利設施：改善路線覆蓋範圍，提供更方便的轉乘點，增加便利性及安全性。', '提供經濟誘因：例如補貼、優惠票價、租金補貼等，降低其成本負擔。', '引入創新科技：推行共享交通工具平台等，提供方便的預訂、導航和支付等功能'],
      ]
      if(index === 0 || index === 5 || index === 6){
        questionsMap[index].forEach(item => {
          map.set(item, 0);
        })
        question_data.forEach(item => {
          questionsMap[index].forEach(item_map => {
            const category = item[this.dataMap[index]]
            if(category.indexOf(item_map) !== -1){
             map.set(item_map, map.get(item_map) + 1)
            }
          })
        })

        const xAxisData = []
        const seriesData = []
        let sumValue = 0
        const sortedEntries = Array.from(map).sort((a, b) => b[1] - a[1]);
        console.log(sortedEntries);
        sortedEntries.forEach(([key, value]) => {
          xAxisData.push(key.substr(0,key.indexOf('：')));
          seriesData.push(value);
          sumValue += value;
        })

        this.addBar({
          dom: document.getElementById(`circle_${index}_1`), 
          text: `${textArray[index]}\n圖表人數：${question_data.length}`,
          xAxisData: xAxisData,
          seriesData: seriesData,
        })
      } else {
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
        this.addCircle({
          dom: document.getElementById(`circle_${index}_1`), 
          text: `${textArray[index]}\n圖表人數：${sumValue}`,
          data: echartsData
        })
      }
    },
    setupWatchers() {
      this.$watch(
        () => this.data,
        (newValue, oldValue) => {
          this.init()
        }
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