var circle_1 = document.getElementById('circle_1');
var circle_2 = document.getElementById('circle_2');
var circle_3 = document.getElementById('circle_3');
var circle_4 = document.getElementById('circle_4');
var circle_5 = document.getElementById('circle_5');

addCircle({
  dom: circle_1, 
  text:'每次通勤的距離',
  data: [
    { value: 33, name: '1公里以內' },
    { value: 144, name: '1-5公里' },
    { value: 87, name: '6-10公里' },
    { value: 33, name: '11-15公里' },
    { value: 19, name: '15-20公里' },
    { value: 44, name: '21公里以上' }
  ]})

addCircle({
  dom: circle_2, 
  text:'每周通勤的頻率',
  data: [
    { value: 114, name: '不定期' },
    { value: 26, name: '1 ~ 2 天' },
    { value: 45, name: '3 ~ 4 天（一周）' },
    { value: 175, name: '5 ~ 7 天（一周）' },
  ]})

addCircle({
  dom: circle_3, 
  text:'通勤時主要使用的交通工具？',
  data: [
    { value: 20, name: '步行' },
    { value: 10, name: '自行車' },
    { value: 35, name: '公車' },
    { value: 17, name: '共享運具' },
    { value: 30, name: '電動汽機車' },
    { value: 237, name: '燃油汽機車' }
  ]})

addCircle({
  dom: circle_4, 
  text:'一星期的平均通勤成本',
  data: [
    { value: 147, name: '100元以下' },
    { value: 119, name: '101~200元' },
    { value: 27, name: '201~300元' },
    { value: 22, name: '301~400元' },
    { value: 8, name: '401~500元' },
    { value: 37, name: '500元以上' }
]})

addBar({
  dom: circle_5, 
  text:'一周內外出活動的主要目的',
  xAxisData: ['通勤', '通學', '商務', '購物', '個人活動', '休閒', '業務外出'],
  seriesData: [158, 89, 46, 135, 81, 139, 20],
})

addBar({
  dom: circle_6, 
  text:'導致您外出時不願意使用綠運輸的原因',
  xAxisData: ['缺乏方便性', '不舒適', '路線不完善', '資訊不足', '個人需求不符'],
  seriesData: [277, 169, 233, 110, 62],
})

addBar({
  dom: circle_7, 
  text:'增加您外出時更願意嘗試使用綠運輸的原因',
  xAxisData: ['試用機會', '清晰、易懂的資訊', '改善路線與便利設施', '提供經濟誘因', '引入創新科技'],
  seriesData: [86, 207, 288, 133, 133],
})


function addCircle({ dom, text, data }) {
  option = {
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
            fontSize: '10',
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
}


function addBar({ dom, text, xAxisData, seriesData}) {
  option = {
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
