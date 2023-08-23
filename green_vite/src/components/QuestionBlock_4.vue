<template>
  <div class="col-md-6" v-for="(question, index) in questionsFilter" :key="index">
    <div class="item">
      <button type="button" class="btn btn-primary filter-btn mt-5 m-md-2"
        @click="question.echartsShow = !question.echartsShow">
        篩選
      </button>
      <div v-show="question.echartsShow" class="echarts-item" :id="`circle_${index}_4`"></div>
      <div v-show="!question.echartsShow" class="checkbox-item">
        <div v-for="(itemFilter, key) in baseFilter" :key="key" class="py-2">
          <div v-if="key !== 'echartsShow'">
            <h5>篩選： {{ i18n[key] }}</h5>
            <div class="form-check form-check-inline" v-for="item in itemFilter" :key="`${item}_${index}`">
              <input class="form-check-input" type="checkbox" :id="`${item}_${index}_4`" :value="item" v-model="question[key]">
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
  
  <div class="col-md-6">
    <div class="item p-3">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">圖表名稱</span>
        <input type="text" v-model="currentText" class="form-control" placeholder="請輸入" aria-label="圖表名稱" aria-describedby="addon-wrapping">
      </div>

      <div class="dropdown my-2">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          Y 軸比對資料
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2"
          style="max-height: 200px; overflow-y: auto;">
          <li class="dropdown-item disabled"> 已選擇： {{ currentYAxis }} </li>
          <li><hr class="dropdown-divider"></li>
          <li class="dropdown-item cursor-pointer" v-for="item in dataTitle" :key="item"
            @click="currentYAxis = item">{{ item }}</li>
        </ul>
        <span> 已選擇： {{ currentYAxis }} </span>
      </div>
      
      <div class="dropdown my-2">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          X 軸比對資料
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2"
          style="max-height: 200px; overflow-y: auto;">
          <li class="dropdown-item disabled"> 已選擇： {{ currentXAxis }}</li>
          <li><hr class="dropdown-divider"></li>
          <li  class="dropdown-item cursor-pointer" v-for="item in dataTitle" :key="item"
            @click="currentXAxis = item">{{ item }}</li>
        </ul>
        <span> 已選擇： {{ currentXAxis }}</span>
      </div>
      <button class="btn btn-success" type="button" @click="addNewEChart">
          產生圖表
      </button>
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
    filterMap: {
      type: Map,
      default: {},
    },
  },
  data() {
    return {
      echartsLength: 3,
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
      ],
      tmpText: [],
      tmpAxis: [],
      tmpData: [],
      dataTitle: [
        'A1您在最近一周內於臺南市外出活動的主要目的是什麼？', 
        'A2呈上題，請問通勤的距離大約有多遠？', 
        'A3呈上題， 請問通勤的頻率大約多頻繁？',
        'A4呈上題，請問目前主要使用哪種交通工具通勤？',
        'A5呈上題，請問一星期的平均通勤成本大約是多少金額?',
        'A6請問什麼原因會導致您在外出時不太願意使用綠運輸',
        'A7請問什麼會增加您在外出時更願意去嘗試綠運輸的意願',
        'B0您是否使用過台南市大眾運輸工具？(例:公車、火車)', 
        'B1您通常在台南市內使用哪種大眾運輸工具？', 
        'B2您對台南市的大眾運輸服務整體滿意度如何？',
        'B4您使用台南市大眾運輸的主要原因是什麼？',
        'B5您通常使用哪種方式取得台南市公共交通資訊？',
        'B6您對台南市的公共交通資訊系統滿意度如何？',
        'B7您是否願意在台南市支付更高的票價以換取更好的大眾運輸服務品質？',
        'C0您是否使用過台南市之共享運具 ？(例:U-Bike、GoShare)',
        'C1您通常在台南市內使用哪種共享運具  ？', 
        'C2您使用台南市共享運具的頻率是多少？', 
        'C3您認為台南市共享運具的便利性如何？',
        'C4您覺得台南市共享運具的價格是否合理？',
        'C5您使用台南市共享運具的主要原因是什麼？',
        'C6您使用台南市共享運具時是否有遇到維護不良或車輛故障的情況？',
        'C7您對台南市的共享運具覆蓋範圍滿意度如何？',
        'C8您是否願意推薦他人使用台南市共享運具？',
        'D1性別',
        'D2年齡',
        'D3教育程度(請填寫個人取得之最高學歷)',
        'D4在台南生活時間',
        'D5您認為您現在比較符合下列哪一種身分'
      ],
      currentXAxis: '',
      currentYAxis: '',
      currentText: '',
      baseFilter: {
        echartsShow: true,
        gender: ['生理男', '生理女'],
        age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
        edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
        life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
        status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
      }
    }
  },
  methods: {
    init() {
      for(let i = 0; i < this.echartsLength; i++) {
        this.changeEchartDisplay(i, this.data)
        // console.log(i, this.data);
      }
    },
    addNewEChart() {
      if(this.currentXAxis === '' || this.currentXAxis === '記得要選擇哦~' || this.currentYAxis === '' || this.currentYAxis === '記得要選擇哦~') {
        this.currentXAxis = "記得要選擇哦~"
        this.currentYAxis = "記得要選擇哦~"
        return;
      }
      this.tmpText.push(this.currentText);
      const questions = [
        ['通勤：上、下班。', '通學：上、下學、圖書館。', '商務：外出開會、出差（非經常性）。', '購物：買菜、加油、大賣場、百貨公司、逛街。', '個人活動：照顧家人、剪頭髮、接送小孩、補習。', '休閒：去健身房、運動、度假、看體育活動、去博物館、公園、劇院。', '業務外出：去拜訪客戶、推銷保險或商品（經常性）。'],
        ['1公里以內', '1-5公里', '6-10公里', '11-15公里', '15-20公里', '21公里以上'],
        ['不定期', '1 ~ 2 天（一周）', '3 ~ 4 天（一周）', '5 ~ 7 天（一周）'],
        ['步行', '自行車', '公車', '共享運具-租用車輛(GoShare、U-Bike、iRent等)', '汽機車（電動）', '汽機車（燃油）'],
        ['100元以下', '101~200元', '201~300元', '301~400元', '401~500元', '500元以上'],
        ['缺乏方便性：會造成我需要花更長的時間或費用才能到達目的地。', '不舒適或不便：沒有像自己騎車或開車舒適或方便 (如騎單車很熱、配合公車時間很麻煩、多人在車上空間人擠人)', '路線不完善或不方便：公車路線覆蓋不足或無法直達目的地，需要轉乘或多次換車等，覺得麻煩。', '資訊不足：啊我就不清楚可用的路線、時刻表、票價等相關資訊。', '個人需求不符：我自己身體行動不便、出門行李多或大等等，搭車不方便'],
        ['提供試用機會：舉辦免費或優惠的試乘試騎活動', '提供清晰、易懂的資訊：包括路線、時刻表、票價、轉乘資訊等', '改善路線與便利設施：改善路線覆蓋範圍，提供更方便的轉乘點，增加便利性及安全性。', '提供經濟誘因：例如補貼、優惠票價、租金補貼等，降低其成本負擔。', '引入創新科技：推行共享交通工具平台等，提供方便的預訂、導航和支付等功能'],
        ['是', '否'],
        ['公車', '火車', '很少使用大眾運輸'],
        ['非常滿意', '滿意', '普通', '不滿意', '非常不滿意'],
        ['舒適度', '準時性', '票價', '車次頻率'],
        ['官方網站', '手機應用程式', '公車站牌資訊', '其他乘客'],
        ['非常滿意', '滿意', '普通', '不滿意', '非常不滿意'],
        ['是', '否'],
        ['是', '否'],
        ['U-Bike', 'GoShare', 'iRent'],
        ['每天', '週一至週五', '週末', '不定期'],
        ['非常方便', '方便', '普通', '不方便', '非常不方便'],
        ['非常合理', '合理', '普通', '不合理', '非常不合理'],
        ['環境友善', '方便快捷', '價格便宜', '無需煩惱停車位'],
        ['是', '否'],
        ['非常滿意', '滿意', '普通', '不滿意', '非常不滿意'],
        ['是', '否'],
        ['生理男', '生理女'],
        ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
        ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
        ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
        ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
      ];
      const map = new Map();
      questions.forEach((item, key) => {
        map.set(this.dataTitle[key], item)
      })

      this.tmpAxis.push({
        xAxis: map.get(this.currentXAxis),
        yAxis: map.get(this.currentYAxis)
      });
      this.tmpData.push({ 
        xAxis: this.currentXAxis,
        yAxis: this.currentYAxis
      })
      this.currentXAxis = '';
      this.currentYAxis = '';
      this.currentText = '';
      this.questionsFilter.push(JSON.parse(JSON.stringify(this.baseFilter)));
      const index = this.echartsLength;
      this.$watch(
        () => this.questionsFilter[index],
        () => {
          this.changeEchartDisplay(index)
        },
        { deep: true }
      );
      this.echartsLength += 1;
      setTimeout(() => {
        this.init()
      }, 0);
    },
    addBar({ dom, text, yAxisData, series}) {
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
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 85,
          bottom: 20,
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
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: yAxisData
        },
        series: series,
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

      const textArray = ['通勤距離與交通工具的偏好關係',
                        '使用交通工具的習慣是否反映在通勤成本上',
                        '交通工具偏好上與在台南生活時間的關係',
                        ...this.tmpText];
      const questionsMap = [
        {
          yAxis: ['1公里以內', '1-5公里', '6-10公里', '11-15公里', '15-20公里', '21公里以上'],
          xAxis: ['步行', '自行車', '公車', '共享運具-租用車輛(GoShare、U-Bike、iRent等)', '汽機車（電動）', '汽機車（燃油）'],
        },
        {
          yAxis: ['100元以下', '101~200元', '201~300元', '301~400元', '401~500元', '500元以上'],
          xAxis: ['步行', '自行車', '公車', '共享運具-租用車輛(GoShare、U-Bike、iRent等)', '汽機車（電動）', '汽機車（燃油）'],
        },
        {
          yAxis: ['步行', '自行車', '公車', '共享運具-租用車輛(GoShare、U-Bike、iRent等)', '汽機車（電動）', '汽機車（燃油）'],
          xAxis: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
        },
        ...this.tmpAxis
      ]

      const dataMap = [
        { 
          xAxis: 'A4呈上題，請問目前主要使用哪種交通工具通勤？',
          yAxis: 'A2呈上題，請問通勤的距離大約有多遠？'
        },
        { 
          xAxis: 'A4呈上題，請問目前主要使用哪種交通工具通勤？',
          yAxis: 'A5呈上題，請問一星期的平均通勤成本大約是多少金額?'
        },
        { 
          xAxis: 'D4在台南生活時間',
          yAxis: 'A4呈上題，請問目前主要使用哪種交通工具通勤？'
        },
        ...this.tmpData
      ]

      console.log(dataMap, questionsMap)
      
      const map = new Map()
      questionsMap[index].yAxis.forEach(yItem => {
        map.set(yItem, new Map());
        questionsMap[index].xAxis.forEach(xItem => {
          map.get(yItem).set(xItem, 0)
        })
      })
      if(index === 1) console.log(map)
      
      question_data.forEach(item => {
        const categoryX = item[dataMap[index].xAxis]
        const categoryY = item[dataMap[index].yAxis]
        questionsMap[index].yAxis.forEach(yItem => {
          questionsMap[index].xAxis.forEach(xItem => {
            if(categoryX === xItem && categoryY === yItem){
              const mapYItem = map.get(yItem);
              mapYItem.set(xItem, mapYItem.get(xItem) + 1)
            }
          })
        })
      })
      if(index === 1) console.log(map)
      const seriesData = []
      const mapArray = Array.from(map);
      const xAxisMap = new Map();
      
      questionsMap[index].xAxis.forEach(xItem => {
        xAxisMap.set(xItem, []);
      })

      mapArray.forEach(([key, value]) => {
        const yItem = Array.from(value);
        yItem.forEach(([xItem, value]) => {
          const mapXItem = xAxisMap.get(xItem)
          mapXItem.push(value)
          xAxisMap.set(xItem, mapXItem)
        })
      })
      
      const xAxisMapArray = Array.from(xAxisMap);
      xAxisMapArray.forEach(([key, value]) => {
        seriesData.push({
          name: `${key.substr(0, 6)}`,
          type: 'bar',
          stack: 'total',
          label: {
            show: false,
          },
          emphasis: {
            focus: 'series'
          },
          data: value
        })
      })
      const yAxisData = questionsMap[index].yAxis.map((item) => item.substr(0, 6));
      this.addBar({
        dom: document.getElementById(`circle_${index}_4`), 
        text: `${textArray[index]}\n圖表人數：${question_data.length}`,
        yAxisData: yAxisData,
        series: seriesData,
      })
    },
    setupWatchers() {
      this.$watch(
        () => this.data,
        () => {
          this.init()
        }
      );

      this.questionsFilter.forEach((object, index) => {
        this.$watch(
          () => this.questionsFilter[index],
          () => {
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

<style scoped>

</style>