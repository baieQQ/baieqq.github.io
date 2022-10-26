const svg = document.getElementById('svg');

let peopleNum = 12;

// 線條粗細
let strokeWidth = 2;
// 線條高度
let lineHeight = 50;
// 線條寬度
let lineWidth = 30;

// 存放每節點 Y 座標
let lineNodeY = [];
// 存放每節點 X 座標
let lineNodeX = [];
// 存放最大節點數
let maxNodeNum = 0;
// 二元樹 x 座標 idx 修正值
let fix = 0;

let jsondata = '';

fetch("torunaments.json")
.then(response => {
   return response.json();
})
.then(data => jsondata = data);


function init(){
    // 初始化
    peopleNum = parseInt(document.getElementById('peopleNum').value); 
    lineNodeY = []
    lineNodeX = [];
    maxNodeNum = 0;
    fix = 0;

    // 取最大節點數
    maxNodeNum = (peopleNum - 1).toString(2).length;

    // 計算每層的 Y 座標 
    for(let i = 0, nowY = 0; i <= maxNodeNum + 1; i++){
        lineNodeY.push(nowY);
        nowY += lineHeight;
    }
    lineNodeY.reverse();
    
    // 計算每層的 X 座標 
    for(let i = 0, nowX = 50; i < (1 << maxNodeNum); i++){
        lineNodeX.push(nowX);
        nowX += lineWidth;
    }

    svg.style.height = lineNodeY[0] * 2;
    svg.style.width = lineNodeX[(1 << maxNodeNum) - 1];

    svg.innerHTML = '';
    // 最大比賽人數, 最大節點數, 節點 idx 值, 預設右界開始
    makeSchedule(peopleNum, maxNodeNum, 0,'Left');
}

function makeSchedule(peopleNum, nowNodeDepth, idx, from){ // 最大比賽人數, 最大節點數, 節點 idx 值, 上一層是左界或右界 
    
    if(peopleNum <= 1){  // 比賽人數只剩下一人，結束函式
        // 畫出連接上一層的豎線
        createSvgElementLine(lineNodeX[idx - fix], lineNodeY[nowNodeDepth + 1], lineNodeX[idx - fix], lineNodeY[0]);
        // 畫出賽程表的每個節點
        circle = createSvgElementCircle(lineNodeX[idx - fix], lineNodeY[0]);
        
        circle.value = jsondata.data.matches[idx - fix];
        circle.addEventListener('click', (e) =>{
            console.dir(e.target.value);
        })
        
        if(nowNodeDepth > 0){
            fix += (1 << nowNodeDepth) - 1;
        }
        return (nowNodeDepth > 0) ? lineNodeX[idx - fix + 1] : lineNodeX[idx - fix];
    }
    
    let nextNodeDepth = nowNodeDepth - 1;
    let leftX;
    let rightX;
    // 多的放左邊，少的放右邊
    if((from == 'Left' && nextNodeDepth != 1) || (from == 'Right' && nextNodeDepth == 1)){ 
        leftX = makeSchedule(parseInt(peopleNum / 2) + peopleNum % 2, nextNodeDepth, idx, 'Left');
        rightX = makeSchedule(parseInt(peopleNum / 2) , nextNodeDepth, idx + (1 << (nextNodeDepth)), 'Right');
    }
    else{ // if(from == 'Right'){ // 少的放左邊，多的放右邊
        leftX = makeSchedule(parseInt(peopleNum / 2), nextNodeDepth, idx, 'Left');
        rightX = makeSchedule(parseInt(peopleNum / 2) + peopleNum % 2, nextNodeDepth, idx + (1 << (nextNodeDepth)), 'Right');
    }
    let midX = (leftX + rightX) / 2;

    // 畫出連接上一層的豎線
    createSvgElementLine(midX, lineNodeY[nowNodeDepth], midX, lineNodeY[nowNodeDepth + 1]);
    // 畫出點
    createSvgElementCircle(midX, lineNodeY[nowNodeDepth]);
    // 畫出連接這一層的橫線
    createSvgElementLine(leftX, lineNodeY[nowNodeDepth], rightX, lineNodeY[nowNodeDepth]); 
    return midX;
}

function createSvgElementLine(x1, y1, x2, y2){
    let element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    attrs = {
        "x1" : x1, 
        "y1" : y1,
        "x2" : x2,
        "y2" : y2,
        "stroke" : "black",
        "stroke-width" : strokeWidth
    };
    for(let name in attrs){
        element.setAttribute(name, attrs[name]);
    }
    svg.appendChild(element);
}

function createSvgElementCircle(x, y){
    let element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    attrs = {
        "cx" : x, 
        "cy" : y,
        "r" : "5"
    };
    for(let name in attrs){
        element.setAttribute(name, attrs[name]);
    }
    circle = svg.appendChild(element);
    return circle;
}

