// 点击缩略框
function clickTime() {
    timingPop.style.display = 'block';
}

let timingPop = document.querySelector(".timingPop")
// 关闭计时弹框
function closeTiming() {
    timingPop.style.display = 'none';
}
let timingTime; // 保存计时器函数变量

let timingHour = 0;     // 时
let timingMinute = 0;   // 分
let timingSecond = 0;   // 秒
let timingText1 = document.querySelector(".timingText1")
let timingText2 = document.querySelector(".timingText2")
let timingText3 = document.querySelector(".timingText3")

let jsTime = document.querySelector(".jsTime")
let jsTime_text = document.querySelector(".jsTime_text")
let timingStart = false;        // 计时状态
// 开始暂停计时
function startTiming() {
    jsTime.style.display = 'flex'
    timingStart = !timingStart
    if(timingStart){
        timingTime = setInterval(function () {
            if(timingSecond < 60){
                timingSecond = timingSecond + 1
            }else {
                timingSecond = 0
                if(timingMinute < 60){
                    timingMinute = timingMinute + 1
                }else {
                    timingHour = timingHour + 1
                    timingMinute = 0
                }
            }
            timingText1.innerHTML = timingHour < 10 ? '0' + timingHour : timingHour
            timingText2.innerHTML = timingMinute < 10 ? '0' + timingMinute : timingMinute
            timingText3.innerHTML = timingSecond < 10 ? '0' + timingSecond : timingSecond

            jsTime_text.innerHTML = (timingHour < 10 ? '0' + timingHour : timingHour) + ' : ' + (timingMinute < 10 ? '0' + timingMinute : timingMinute) + ' : ' + (timingSecond < 10 ? '0' + timingSecond : timingSecond)
        },1000)
    }else {
        clearInterval(timingTime)
    }
}
// 重置时间
function resetTiming() {
    timingHour = 0
    timingMinute = 0
    timingSecond = 0
    timingText1.innerHTML = timingHour < 10 ? '0' + timingHour : timingHour
    timingText2.innerHTML = timingMinute < 10 ? '0' + timingMinute : timingMinute
    timingText3.innerHTML = timingSecond < 10 ? '0' + timingSecond : timingSecond
    clearInterval(timingTime)
    timingStart = false
}
// 点击缩略框的关闭
function clickClose(e) {
    timingPop.style.display = 'none';
    jsTime.style.display = 'none';
    resetTiming()
    e = e || window.event
    e.stopPropagation()
}
