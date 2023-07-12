var circle_1 = document.getElementById('circle_1');
var circle_2 = document.getElementById('circle_2');
var circle_3 = document.getElementById('circle_3');
var circle_4 = document.getElementById('circle_4');

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

function addCircle({ dom, text, data }) {
  option = {
    title: {
      text: text,
      subtext: '',
      left: 'center'
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
        radius: '50%',
        center: ['50%', '50%'],
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  let myChart = echarts.init(dom, 'dark');
  myChart.setOption(option);
  window.addEventListener('resize', function() {
    myChart.resize();
  });
}

