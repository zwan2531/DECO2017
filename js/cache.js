window.onload = function () {
    if(localStorage.getItem('taskArr') == null){
        taskArr = []
    }else {
        taskArr = JSON.parse(localStorage.getItem('taskArr'))
    }

    if(localStorage.getItem('timingHour') == null){
        timingHour = 0
    }else {
        timingHour = JSON.parse(localStorage.getItem('timingHour'))
    }

    if(localStorage.getItem('timingMinute') == null){
        timingMinute = 0
    }else {
        timingMinute = JSON.parse(localStorage.getItem('timingMinute'))
    }

    if(localStorage.getItem('timingSecond') == null){
        timingSecond = 0
    }else {
        timingSecond = JSON.parse(localStorage.getItem('timingSecond'))
    }
    createTask()

    if(localStorage.getItem('breakTimeText') == null){
        breakTimeText = 5
    }else {
        breakTimeText = JSON.parse(localStorage.getItem('breakTimeText'))
    }
    if(localStorage.getItem('studyTimeText') == null){
        studyTimeText = 25
    }else {
        studyTimeText = JSON.parse(localStorage.getItem('studyTimeText'))
    }
    if(localStorage.getItem('processNo') == null){
        processNo = 1
    }else {
        processNo = JSON.parse(localStorage.getItem('processNo'))
    }
    let title_time = document.querySelector(".title_time")
    setInterval(function () {
        title_time.innerHTML = new Date().toGMTString()
    },1000)
}


window.onunload = function () {
    localStorage.setItem('taskArr',JSON.stringify(taskArr))
    localStorage.setItem('timingHour',JSON.stringify(timingHour))
    localStorage.setItem('timingMinute',JSON.stringify(timingMinute))
    localStorage.setItem('timingSecond',JSON.stringify(timingSecond))

    localStorage.setItem('breakTimeText',JSON.stringify(breakTimeText))
    localStorage.setItem('studyTimeText',JSON.stringify(studyTimeText))
    localStorage.setItem('processNo',JSON.stringify(processNo))
}
