let tomatoPop = document.querySelector(".tomatoPop")
let workTime = document.querySelector(".workTime")
let breakTime = document.querySelector(".breakTime")
// close tomato popout
let breakTimeText = 5;      // break time
let studyTimeText = 25;     // study time
let processNo = 1;          // process
function openTomato() {
    tomatoPop.style.display = 'block';
    workTime.innerHTML = studyTimeText*processNo + ' : 00'
    breakTime.innerHTML = (breakTimeText*processNo < 10 ? '0' + breakTimeText*processNo : breakTimeText*processNo) + ' : 00'
    fqTime_num.innerHTML = 'S'+processNo
}
function closeTomato() {
    tomatoPop.style.display = 'none';
}
// add time
function tomatoA() {
    processNo = processNo + 1
    workTime.innerHTML = studyTimeText*processNo + ' : 00'
    breakTime.innerHTML = (breakTimeText*processNo < 10 ? '0' + breakTimeText*processNo : breakTimeText*processNo) + ' : 00'
    fqTime_num.innerHTML = 'S'+processNo
}
// minus time
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
// The countdown
// start countdown
let tomatoTimeBreak;         // Save the break countdown timer
let tomatoTimeStudy;         // Save study countdown timer
let tomatoSecond = 0;   // seconds
let tomatoBreak = 5;   // Time to break
let tomatoStudy = 25;   // study time
let tomatoNum = 1;     // number of tomato

let tomatoState = false // stop start
function startTomatoTime() {
    tomatoSecond = 0
    tomatoBreak = 5
    tomatoStudy = 25
    tomatoNum = processNo
    clearInterval(tomatoTimeStudy)
    clearInterval(tomatoTimeBreak)
    promiseStudy()
    fqTime.style.display = 'flex'
    tomatoPop.style.display = 'none';
}
// Cyclic countdown
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

// Click on the smaller version  close
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
// Click the tomato timer at the top
function tomatoTime() {
    tomatoPop.style.display = 'block';
}
