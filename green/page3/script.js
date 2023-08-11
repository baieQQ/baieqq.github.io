addCircle({
  dom: circle_1, 
  text:'您是否使用過台南市之共享運具 ',
  data: [
    { value: 211, name: '是' },
    { value: 157, name: '否' },
]})

addCircle({
  dom: circle_2, 
  text:'您通常在台南市內使用哪種共享運具',
  data: [
    { value: 126, name: 'Ubike' },
    { value: 50, name: 'GoShare' },
    { value: 30, name: 'iRent' },
    { value: 5, name: '其他' },
  ]})

addCircle({
  dom: circle_3, 
  text:'您使用台南市共享運具的頻率是多少？',
  data: [
    { value: 101, name: '不定期' },
    { value: 13, name: '周末' },
    { value: 5, name: '每天' },
    { value: 2, name: '周一至周五' },
  ]})

addCircle({
  dom: circle_4, 
  text:'您認為台南市共享運具的便利性如何？',
  data: [
    { value: 22, name: '非常滿意' },
    { value: 73, name: '滿意' },
    { value: 82, name: '普通' },
    { value: 23, name: '不滿意' },
    { value: 11, name: '非常不滿意' },
]})

addCircle({
  dom: circle_5, 
  text:'您覺得台南市共享運具的價格是否合理？',
  data: [
    { value: 34, name: '非常合理' },
    { value: 109, name: '合理' },
    { value: 61, name: '普通' },
    { value: 6, name: '不合理' },
    { value: 1, name: '非常不合理' },
]})

addCircle({
  dom: circle_6, 
  text:'您使用台南市共享運具的主要原因是什麼？',
  data: [
    { value: 107, name: '方便快捷' },
    { value: 44, name: '無需煩惱停車位' },
    { value: 22, name: '價格便宜' },
    { value: 19, name: '環境友善' },
    { value: 19, name: '其他' },
]})

addCircle({
  dom: circle_7, 
  text:'您使用台南市共享運具時\n是否有遇到維護不良或車輛故障的情況？',
  data: [
    { value: 81, name: '是' },
    { value: 130, name: '否' },
]})

addCircle({
  dom: circle_8, 
  text:'您對台南市的共享運具覆蓋範圍滿意度如何？',
  data: [
    { value: 8, name: '非常滿意' },
    { value: 50, name: '滿意' },
    { value: 80, name: '普通' },
    { value: 55, name: '不滿意' },
    { value: 18, name: '非常不滿意' },
]})

addCircle({
  dom: circle_9, 
  text:'您是否願意推薦他人使用台南市共享運具？',
  data: [
    { value: 163, name: '是' },
    { value: 48, name: '否' },
]})

function addCircle({ dom, text, data }) {
  option = {
    title: {
      text: text,
      textStyle: {
        lineHeight: 25
      },
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
