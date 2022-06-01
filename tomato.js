let tomatoPop = document.querySelector(".tomatoPop")
let workTime = document.querySelector(".workTime")
let breakTime = document.querySelector(".breakTime")
// 关闭 番茄计时器弹框
let breakTimeText = 5;      // 休息时间
let studyTimeText = 25;     // 学习时间
let processNo = 1;          // 过程次数
function openTomato() {
    tomatoPop.style.display = 'block';
    workTime.innerHTML = studyTimeText*processNo + ' : 00'
    breakTime.innerHTML = (breakTimeText*processNo < 10 ? '0' + breakTimeText*processNo : breakTimeText*processNo) + ' : 00'
    fqTime_num.innerHTML = 'S'+processNo
}
function closeTomato() {
    tomatoPop.style.display = 'none';
}
// 加时间
function tomatoA() {
    processNo = processNo + 1
    workTime.innerHTML = studyTimeText*processNo + ' : 00'
    breakTime.innerHTML = (breakTimeText*processNo < 10 ? '0' + breakTimeText*processNo : breakTimeText*processNo) + ' : 00'
    fqTime_num.innerHTML = 'S'+processNo
}
// 减时间
function tomatoE() {
    if(processNo > 1){
        processNo = processNo - 1
    }
    workTime.innerHTML = studyTimeText*processNo + ' : 00'
    breakTime.innerHTML = (breakTimeText*processNo < 10 ? '0' + breakTimeText*processNo : breakTimeText*processNo) + ' : 00'
    fqTime_num.innerHTML = 'S'+processNo
}


let fqTime_num = document.querySelector(".fqTime_num")
let fqTime_text = document.querySelector(".fqTime_text")
let fqTime = document.querySelector(".fqTime")
// 倒计时
// 开始倒计时
let tomatoTimeBreak;         // 储存休息倒计时 定时器
let tomatoTimeStudy;         // 储存学习倒计时 定时器
let tomatoSecond = 0;   // 秒
let tomatoBreak = 5;   // 休息时间
let tomatoStudy = 25;   // 学习时间
let tomatoNum = 1;     // 番茄次数

let tomatoState = false // 暂停开始
function startTomatoTime() {
    tomatoSecond = 0
    tomatoBreak = 5
    tomatoStudy = 25
    tomatoNum = processNo
    clearInterval(tomatoTimeStudy)
    clearInterval(tomatoTimeBreak)
    promiseStudy()
    fqTime.style.display = 'flex'
}
// 循环倒计时
function promiseStudy() {
    tomatoSecond = 0
    new Promise((resolve, reject) => {
        tomatoTimeStudy = setInterval(function () {
            if(tomatoSecond == 0){
                if(tomatoStudy <= 0){
                    clearInterval(tomatoTimeStudy)
                    resolve(true)
                }else {
                    tomatoStudy = tomatoStudy - 1
                    tomatoSecond = 60
                }
            }else {
                tomatoSecond = tomatoSecond - 1
            }
            fqTime_text.innerHTML = (tomatoStudy < 10 ? '0' + tomatoStudy : tomatoStudy) + ' : ' + (tomatoSecond < 10 ? '0' + tomatoSecond : tomatoSecond)
            fqTime_text.style.color = '#F30707'
        },1000)
    }).then(res => {
        tomatoBreak = 5
        promiseBreak()
    })
}
function promiseBreak() {
    tomatoSecond = 0
    new Promise((resolve, reject) => {
        tomatoTimeBreak = setInterval(function () {
            if(tomatoSecond == 0){
                if(tomatoBreak <= 0){
                    if(tomatoNum <= 0){
                        clearInterval(tomatoTimeBreak)
                        tomatoBreak = 0
                        tomatoSecond = 0
                    }else {
                        clearInterval(tomatoTimeBreak)
                        tomatoNum = tomatoNum - 1
                        resolve(true)
                    }
                }else {
                    tomatoBreak = tomatoBreak - 1
                    tomatoSecond = 60
                }
            }else {
                tomatoSecond = tomatoSecond - 1
            }
            fqTime_text.innerHTML = (tomatoBreak < 10 ? '0' + tomatoBreak : tomatoBreak) + ' : ' + (tomatoSecond < 10 ? '0' + tomatoSecond : tomatoSecond)
            fqTime_text.style.color = '#00D909'
        },1000)
    }).then(res => {
        tomatoStudy = 25
        promiseStudy()
    })
}

// 点击缩小版本 关闭
function tomatoCloseSm(e) {
    tomatoSecond = 0;
    tomatoNum = 1;
    tomatoBreak = 5
    tomatoStudy = 25
    clearInterval(tomatoTimeStudy)
    clearInterval(tomatoTimeBreak)
    fqTime.style.display = 'none'
    e = e || window.event
    e.stopPropagation()
}
// 点击顶部番茄计时器
function tomatoTime() {
    tomatoPop.style.display = 'block';
}
