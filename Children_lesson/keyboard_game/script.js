var start_game_run = false;
let keydown_run = true;
let keydown_random = false;
let error_count = 0;
let correct_count = 0;
let zhuyin_list = [49, 81, 65, 90, 50, 87, 83, 88, 69, 68, 67, 82, 70, 86, 53, 84, 71, 66, 89, 72, 78, 85, 74, 77, 56, 73, 75, 188, 57, 79, 76, 190, 48, 80, 186, 191, 189]
var value_list = ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'];


var game_start_bool = false;
var last_keydown_correct = 0;
var keydown_correct = 0;
var score = 0;
var game_time = 0;
var game_score_log = [];
var game_keydown_error = [];
var game_keydown_correct = [];
var game_run_model = [];
var timer;

function init(){
    var RandomBtn = document.getElementById('RandomBtn');
    var btn = document.getElementById('btn');
    var handle_mouse = function(){
        if(start_game_run == true && !game_start_bool){
            game_time = 3;
        }
        else if(!game_start_bool)
            game_start_reciprocal();
    };
    btn.addEventListener('click', handle_mouse);

    let change_random = function(){
        if(start_game_run || game_start_bool)
            return;
        keydown_random = !keydown_random;
        if(keydown_random == true){
            var tmp = document.getElementById('Random_text_id');
            tmp.textContent = "注音隨機出現";
        }
        else{
            var tmp = document.getElementById('Random_text_id');
            tmp.textContent = "注音依序出現";
        }
    }
    RandomBtn.addEventListener('click', change_random);
}


function game_start_reciprocal(){
    var reciprocal = document.getElementById('game_reciprocal');
    var time_id = document.getElementById('time_id');
    var score_id = document.getElementById('score_id');
    var opo_id = document.getElementById('opo');
    game_start_bool = true
    game_time = 0;
    score = 0;
    error_count = 0;
    correct_count = 0;
    keydown_correct = -1;
    let w = setInterval('owo', 1000);
    for(let i = 0; i < w + 1; i++){
        clearInterval(i);
    }
    opo_id.textContent = '';
    time_id.textContent = game_time;
    score_id.textContent = score;
    time = [0, 1000, 2000, 3000, 4000, 5000, 6000];
    setTimeout(function(){reciprocal.textContent = "5"; music_play('reciprocal_5')}, time[0]);
    setTimeout(function(){reciprocal.textContent = "4"; music_play('reciprocal_4')}, time[1]);
    setTimeout(function(){reciprocal.textContent = "3"; music_play('reciprocal_3')}, time[2]);
    setTimeout(function(){reciprocal.textContent = "2"; music_play('reciprocal_2')}, time[3]);
    setTimeout(function(){reciprocal.textContent = "1"; music_play('reciprocal_1')}, time[4]);
    setTimeout(function(){reciprocal.textContent = "開始";  music_play('reciprocal_start')}, time[5]);
    setTimeout(function(){reciprocal.textContent = ""; start_game_run = true;}, time[6]);
    setTimeout(function(){keydown_correct = game_id_rand(); game_time = 30; score = 0 }, time[6]);
    setTimeout(function(){game_time_reciprocal(); setInterval(game_time_reciprocal, 1000); game_start_bool = false}, 6000);
}

function game_time_reciprocal(){
    if(start_game_run == false)
        return;
    let tmp_id = document.getElementById('time_id');
    if(game_time <= 0){
        start_game_run = false;
        game_score_log.push(score);
        game_keydown_correct.push(correct_count);
        game_keydown_error.push(error_count);
        if(keydown_random == true){
            game_run_model.push('隨機');
        }
        else{
            game_run_model.push('依序');
        }
        downloadFile();
    }
    else{
        game_time -= 1;
        tmp_id.textContent = game_time;
    }
}

function game_id_rand(){
    function getrandom(){
        return Math.floor(Math.random() * (zhuyin_list.length));
    };
    var now_id;
    if(keydown_random == true){
        now_id = getrandom();
    }
    else{
        if(keydown_correct == -1) now_id = 0;
        else now_id = (keydown_correct + 1) % zhuyin_list.length;
    }
    var now_value = value_list[now_id];
    var id = document.getElementById('opo');
    id.textContent = now_value;
    return now_id;
}

function game_image(key_code){
    var id = document.getElementById('opo');
    id.textContent = '';
    var img = document.getElementById(`image_${key_code}`);
    img.style.display = "block";
    setTimeout(function(){img.style.display = "none"}, 1000);
    
}


function music_play(key_code){
    const audio = document.querySelector(`audio[data-key="${key_code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}
function keyboard_keydown(e){
    if(start_game_run == true && keydown_run == true){
        if(!zhuyin_list.includes(e.keyCode)){
            return;
        }
        var key_code = e.keyCode;
        var txt_id = document.getElementById(key_code);
        txt_id.style.fontSize = "100px";
        txt_id.style.color= "black";
        txt_id.style.zIndex = "9999";
        txt_id.style.webkitTextStroke = "1px white";
        keydown_run = false;
        music_play("wav_" + key_code);
        if(key_code == zhuyin_list[keydown_correct]){
            let tmp_id = document.getElementById('score_id') 
            last_keydown_correct = keydown_correct;
            correct_count += 1;
            score += 100;
            tmp_id.textContent = score;
            game_image(key_code); 
            setTimeout(function(){
                txt_id.style.fontSize = "24px";
                txt_id.style.color="#eacd11";
                txt_id.style.zIndex = "1";
                txt_id.style.webkitTextStroke = ""; 
                keydown_run = true
            }, 1000);
            
            setTimeout(function(){
                while(last_keydown_correct == keydown_correct){
                    keydown_correct = game_id_rand();
                }
            }, 1000);
        }
        else{
            error_count += 1;
            setTimeout(function(){
                txt_id.style.fontSize = "24px";
                txt_id.style.color="#eacd11";
                txt_id.style.zIndex = "1";
                txt_id.style.webkitTextStroke = ""; 
                keydown_run = true
            }, 500);
        }
    }
}

function getScoreLog(){
    let score_txt = "";
    for(let i = 0; i < game_score_log.length; i++){
        score_txt += '第 ' + (i + 1) + ' 次成績為：' + game_score_log[i] + '，正確點擊次數為：' + game_keydown_correct[i] + '，錯誤次數為：' + game_keydown_error[i] + '，遊戲模式為：' + game_run_model[i] + '\n';
    }
    console.log(score_txt);
    return score_txt;
}

function downloadFile() {
    let fileName = "ScoreLog.txt";
    const data = getScoreLog();
    let blob = new Blob([data], {
      type: "application/octet-stream",
    });
    var href = URL.createObjectURL(blob);
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = href;
    link.download = fileName;
    link.click();
  }


var body = document.body;
body.addEventListener('keydown', keyboard_keydown ,false) //偵測按下按鍵的行為

let downloadBtn = document.querySelector(".downloadBtn");
downloadBtn.addEventListener("click", downloadFile);