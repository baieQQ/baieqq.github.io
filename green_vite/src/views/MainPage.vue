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
          <li class="nav-item">
            <div class="nav-link cursor-pointer" :class="{ 'active' : currentPage === 3 }" @click="currentPage = 3"> 交叉分析資料 </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container m-auto" v-if="data != null">
    <div class="row">
      <div class="col-md-6">
        <div class="item d-flex justify-content-center align-items-center">
          <button type="button" v-if="!pageFiltre.echartsShow" class="btn btn-primary filter-btn mx-2"
            style="margin-top: 88px !important; width: 120px;"
            @click="pageFiltre = JSON.parse(JSON.stringify(clearFilter))">
            清空
          </button>
          <button type="button" v-if="!pageFiltre.echartsShow" class="btn btn-primary filter-btn mx-2 mt-5"
            style="width: 120px"
            @click="pageFiltre = JSON.parse(JSON.stringify(baseFilter))">
            重設
          </button>
          <button type="button" class="btn btn-primary filter-btn m-2"
            style="width: 120px"
            @click="pageFiltre.echartsShow = !pageFiltre.echartsShow">
            頁面總篩選
          </button>
          <img v-show="pageFiltre.echartsShow" src="@/assets/logo.png" class="logo">
          <div v-show="!pageFiltre.echartsShow" class="checkbox-item">
            <div v-for="(itemFilter, key) in baseFilter" :key="key" class="py-2">
              <div v-if="key !== 'echartsShow'">
                <h5>篩選： {{ i18n[key] }}</h5>
                <div class="form-check form-check-inline" v-for="item in itemFilter" :key="`${item}_all`">
                  <input class="form-check-input" type="checkbox" :id="`${item}_all_1`" :value="item" v-model="pageFiltre[key]">
                  <label class="form-check-label" :for="`${item}_all`">
                    {{ item }}
                  </label>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuestionBlock_1 v-if="currentPage === 0" 
        :data="questionData" :i18n="i18n" :baseFilter="baseFilter" :filterMap="filterMap"></QuestionBlock_1>
      <QuestionBlock_2 v-if="currentPage === 1"
        :data="questionData" :i18n="i18n" :baseFilter="baseFilter" :filterMap="filterMap"></QuestionBlock_2>
      <QuestionBlock_3 v-if="currentPage === 2"
        :data="questionData" :i18n="i18n" :baseFilter="baseFilter" :filterMap="filterMap"></QuestionBlock_3>
      <QuestionBlock_4 v-if="currentPage === 3"
        :data="questionData" :i18n="i18n" :filterMap="filterMap"></QuestionBlock_4>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import QuestionBlock_1 from "@/components/QuestionBlock_1.vue";
import QuestionBlock_2 from "@/components/QuestionBlock_2.vue";
import QuestionBlock_3 from "@/components/QuestionBlock_3.vue";
import QuestionBlock_4 from "@/components/QuestionBlock_4.vue";
import fetchJson from "@/utilitys/fetch-json.js";

export default defineComponent({
  name: 'MainPage',
  components: {
    QuestionBlock_1,
    QuestionBlock_2,
    QuestionBlock_3,
    QuestionBlock_4,
  },
  data() {
    return {
      currentPage: 0,
      data: null,
      pageFiltre: {
        echartsShow: true,
        gender: ['生理男', '生理女'],
        age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
        edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
        life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
        status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
      },
      clearFilter: {
        echartsShow: false,
        gender: [],
        age: [],
        edcaution: [],
        life_time: [],
        status: [],
      },
      baseFilter: {
        echartsShow: false,
        gender: ['生理男', '生理女'],
        age: ['18歲以下', '19-30歲', '31-40歲', '41-50歲', '51-60歲', '60歲以上'],
        edcaution: ['國中以下', '高中職畢業', '大學畢業', '碩士畢業以上'],
        life_time: ['1年以下', '1-2年', '3-5年', '6-10年', '10年以上'],
        status: ['台南市民-學生身分', '台南市民-就業者', '台南市民-(其他)', '從外縣市到台南的就業者', '從外縣市到台南的求學者', '觀光客'],
      },
      i18n: {
        gender: '性別',
        age: '年齡',
        edcaution: '教育程度',
        life_time: '在台南生活時間',
        status: '在台南的身份',
      },
      filterMap: new Map([
        ['gender', 'D1性別'],
        ['age', 'D2年齡'],
        ['edcaution', 'D3教育程度(請填寫個人取得之最高學歷)'],
        ['life_time', 'D4在台南生活時間'],
        ['status', 'D5您認為您現在比較符合下列哪一種身分'],
      ]),
    }
  },
  computed: {
    questionData() {
      return this.data === null ? [] : this.data.filter(item => {
        const newValue = this.pageFiltre;
        for (const category in newValue) {
          if(category === "echartsShow") continue;
          const chineseCategory = this.filterMap.get(category);
          if (!newValue[category].includes(item[chineseCategory])) {
            return false;
          }
        }
        return true; 
      });
    }
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

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
  
  &:active {
    transform: scale(1.01);
  }
}

.item {
  position: relative;
  height: 50vh;
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

.logo {
  width: auto;
  max-height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}

.filter-btn {
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 100;
}
</style>