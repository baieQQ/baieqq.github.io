addCircle({
  dom: circle_1, 
  text:'您是否使用過台南市大眾運輸工具',
  data: [
    { value: 353, name: '是' },
    { value: 15, name: '否' },
]})

addCircle({
  dom: circle_2, 
  text:'通常使用哪種大眾運輸工具',
  data: [
    { value: 144, name: '公車' },
    { value: 103, name: '火車' },
    { value: 99, name: '很少使用大眾運輸' },
    { value: 7, name: '其他' },
  ]})

addCircle({
  dom: circle_3, 
  text:'對台南市大眾運輸服務的整體滿意度',
  data: [
    { value: 11, name: '非常滿意' },
    { value: 76, name: '滿意' },
    { value: 173, name: '普通' },
    { value: 59, name: '不滿意' },
    { value: 34, name: '非常不滿意' },
  ]})

addCircle({
  dom: circle_4, 
  text:'使用台南市大眾運輸的主要原因是什麼',
  data: [
    { value: 90, name: '票價' },
    { value: 53, name: '車次頻率' },
    { value: 46, name: '舒適度' },
    { value: 39, name: '準時性' },
    { value: 18, name: '其他' },
]})

addCircle({
  dom: circle_5, 
  text:'使用大眾運輸的主要原因是什麼',
  data: [
    { value: 90, name: '票價' },
    { value: 53, name: '車次頻率' },
    { value: 46, name: '舒適度' },
    { value: 39, name: '準時性' },
    { value: 18, name: '其他' },
]})

addCircle({
  dom: circle_6, 
  text:'通常用哪種方式取得公共交通資訊？',
  data: [
    { value: 254, name: '手機應用程式' },
    { value: 48, name: '官方網站' },
    { value: 39, name: '公車站牌資訊' },
    { value: 3, name: '其他乘客' },
]})

addCircle({
  dom: circle_7, 
  text:'對台南市公共交通資訊系統之滿意度',
  data: [
    { value: 8, name: '非常滿意' },
    { value: 89, name: '滿意' },
    { value: 182, name: '普通' },
    { value: 49, name: '不滿意' },
    { value: 25, name: '非常不滿意' },
]})

addCircle({
  dom: circle_8, 
  text:'是否願意在台南市支付更高的票價\n以換取更好的大眾運輸服務品質',
  data: [
    { value: 254, name: '是' },
    { value: 99, name: '否' },
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
}
