const svg = document.getElementById('svg');

let peopleNum = 12;
let lineHeight = 50;
let lineWidth = 30;

let lineNodeY = [];
let lineNodeWidth = [];
let maxNodeNum;

function init(){
    peopleNum = parseInt(document.getElementById('peopleNum').value); 
    lineNodeY = []
    lineNodeWidth = [];
    maxNodeNum = (peopleNum - 1).toString(2).length;

    for(let i = 0, nowY = 0, nowWidth = lineWidth; i <= maxNodeNum + 1; i++){
        lineNodeY.push(nowY);
        nowY += lineHeight;

        lineNodeWidth.push(nowWidth);
        nowWidth = nowWidth * 2 ;
    }
    lineNodeY.reverse();
    svg.style.height = lineNodeY[0];
    svg.style.width = lineNodeWidth[maxNodeNum] * 2;

    let startX = lineNodeWidth[maxNodeNum]; // 初始 mid 位置
    svg.innerHTML = '';
    // 最大比賽人數, 起始 x 位置, 最大節點深度, 預設右界開始
    makeSchedule(peopleNum, startX, maxNodeNum, 'Right');
}


function makeSchedule(peopleNum, mid, nodeDepth, from){ // 該場比賽人數, 上一層豎線的 x 位置, 節點深度, 上一層是左界或右界 
    if(peopleNum <= 1){  // 比賽人數只剩下一人，結束函式
        // 畫出連接上一層的豎線
        createSvgElement('line', {
            "x1" : mid, 
            "y1" : lineNodeY[nodeDepth + 1],
            "x2" : mid,
            "y2" : lineNodeY[0],
            "stroke" : "black",
            "stroke-width" : 2
        });
        return;
    }
    let leftMid = mid - lineNodeWidth[nodeDepth] / 2;
    let rightMid = mid + lineNodeWidth[nodeDepth] / 2;
    let newNodeDepth = nodeDepth - 1;
    createSvgElement('line', { // 畫出連接上一層的豎線
        "x1" : mid, 
        "y1" : lineNodeY[nodeDepth],
        "x2" : mid,
        "y2" : lineNodeY[nodeDepth + 1],
        "stroke" : "black",
        "stroke-width" : 2
    });
    createSvgElement('line', { // 畫出連接這一層的橫線
        "x1" : leftMid, 
        "y1" : lineNodeY[nodeDepth],
        "x2" : rightMid,
        "y2" : lineNodeY[nodeDepth],
        "stroke" : "black",
        "stroke-width" : 2
    });
    if(from == 'Left'){ // 少的放左邊，多的放右邊
        makeSchedule(parseInt(peopleNum / 2), leftMid, newNodeDepth, 'Left');
        makeSchedule(parseInt(peopleNum / 2) + peopleNum % 2, rightMid, newNodeDepth, 'Right');
    }
    else if(from == 'Right'){ // 多的放左邊，少的放右邊
        makeSchedule(parseInt(peopleNum / 2) + peopleNum % 2, leftMid, newNodeDepth, 'Left');
        makeSchedule(parseInt(peopleNum / 2), rightMid, newNodeDepth, 'Right');
    }
}

function createSvgElement(tagName, attrs){
    let element = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    for(let name in attrs){
        element.setAttribute(name, attrs[name]);
    }
    svg.appendChild(element);
}