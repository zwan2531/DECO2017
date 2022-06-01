// 定义初始化数据
let taskArr = [];
let taskObj = {
    subject: '',            // 任务分类名字
    name: '',               // 任务名字
    description: '',        // 描述
    date: '',               // 任务时间
    time: '',               // 学习时间
    state: '',              // 任务状态  完成  开始  已完成
    priority: '',           // 重要等级
    oneDateTime: '',        // 每天需要学习的时间
}
let task1 = document.querySelector(".task1")
let task2 = document.querySelector(".task2")
let task3 = document.querySelector(".task3")
function createTask() {
    let taskHtml1 = ``
    let taskHtml2 = ``
    let taskHtml3 = ``
    let taskColor;
    for (let i = 0; i < taskArr.length; i++) {
        if(taskArr[i].priority == '0'){
            taskColor = '#0DBF49'
        }
        if(taskArr[i].priority == '1'){
            taskColor = '#F30000'
        }
        if(taskArr[i].priority == '2'){
            taskColor = '#FFC700'
        }
        if(taskArr[i].state == '0'){

            taskHtml1 = taskHtml1 + `
            <div class="task_con" onclick="clickEdit(${i})">
                 <div class="task_title">
                      <span class="task_title_name">${taskArr[i].subject}</span>
                            <div class="task_ele" style="background-color: ${taskColor}"></div>
                 </div>
                 <div class="task_xl_title">${taskArr[i].name}</div>
                 <div class="task_des">${taskArr[i].description}</div>
                      <div class="task_bottom">
                           <div>${taskArr[i].oneDateTime} minute left for day</div>
                           <div>${new Date(taskArr[i].date).toDateString() + ' , ' + new Date(taskArr[i].date).toLocaleTimeString()}</div>
                      </div>
            </div>
            `
        }
        if(taskArr[i].state == '1'){
            taskHtml2 = taskHtml2 + `
            <div class="task_con" onclick="clickEdit(${i})">
                 <div class="task_title">
                      <span class="task_title_name">${taskArr[i].subject}</span>
                            <div class="task_ele" style="background-color: ${taskColor}"></div>
                 </div>
                 <div class="task_xl_title">${taskArr[i].name}</div>
                 <div class="task_des">${taskArr[i].description}</div>
                      <div class="task_bottom">
                           <div>${taskArr[i].oneDateTime} minute left for day</div>
                           <div>${new Date(taskArr[i].date).toDateString() + ' , ' + new Date(taskArr[i].date).toLocaleTimeString()}</div>
                      </div>
            </div>
            `
        }
        if(taskArr[i].state == '2'){
            taskHtml3 = taskHtml3 + `
            <div class="task_con" onclick="clickEdit(${i})">
                 <div class="task_title">
                      <span class="task_title_name">${taskArr[i].subject}</span>
                            <div class="task_ele" style="background-color: ${taskColor}"></div>
                 </div>
                 <div class="task_xl_title">${taskArr[i].name}</div>
                 <div class="task_des">${taskArr[i].description}</div>
                      <div class="task_bottom">
                           <div>${taskArr[i].oneDateTime} minute left for day</div>
                           <div>${new Date(taskArr[i].date).toDateString() + ' , ' + new Date(taskArr[i].date).toLocaleTimeString()}</div>
                      </div>
            </div>
            `
        }
    }
    task1.innerHTML = taskHtml1
    task2.innerHTML = taskHtml2
    task3.innerHTML = taskHtml3
}

let subIpt = document.querySelector(".subIpt")
let nameIpt = document.querySelector(".nameIpt")
let desIpt = document.querySelector(".desIpt")
let dateIpt = document.querySelector(".dateIpt")
let timeIpt = document.querySelector(".timeIpt")
let statusIpt = document.querySelector(".statusIpt")
let priorityIpt = document.querySelector(".priorityIpt")



let addTaskPop = document.querySelector(".addTaskPop")
// 添加 task
function addTask() {
    if(subIpt.value == '' || nameIpt.value == '' || desIpt.value == '' || dateIpt.value == '' || timeIpt.value == ''){
        return alert('Please fill in the information completely')
    }
    let obj = {
        subject: subIpt.value,            // 任务分类名字
        name: nameIpt.value,               // 任务名字
        description: desIpt.value,        // 描述
        date: dateIpt.value,               // 任务时间
        time: timeIpt.value,               // 学习时间
        state: statusIpt.value,              // 任务状态  完成  开始  已完成
        priority: priorityIpt.value,           // 重要等级
        oneDateTime: parseInt(Number(timeIpt.value)/countDays(dateIpt.value)),        // 每天需要学习的时间
    }
    if(editIndex === ''){
        taskArr.push(obj)
    }else {
        taskArr[editIndex] = obj
    }
    createTask()
    cleanIpt()
    addTaskPop.style.display = 'none'
}

// 清空input数据
function cleanIpt() {
    subIpt.value = ''
    nameIpt.value = ''
    desIpt.value = ''
    dateIpt.value = ''
    timeIpt.value = ''
    editIndex = ''
}

// 天数计算
function countDays(time) {
    let oDate1 = new Date()
    let oDate2 = new Date(time)
    let iDays = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数
    if(iDays < 0){
        return 'Timed out'
    }
    return iDays
}

// 点击加号按钮
function clickAddImg() {
    addTaskPop.style.display = 'block'
}
let editIndex = ''
// 编辑
function clickEdit(index) {
    editIndex = index;
    console.log(editIndex);
    subIpt.value = taskArr[index].subject;
    nameIpt.value = taskArr[index].name;
    desIpt.value = taskArr[index].description;
    dateIpt.value = taskArr[index].date;
    timeIpt.value = taskArr[index].time;
    statusIpt.value = taskArr[index].state;
    priorityIpt.value = taskArr[index].priority;
    addTaskPop.style.display = 'block'
}
// 点击删除
function clickDelTask() {
    if(editIndex === ''){
        alert('Add operation cannot be deleted')
    }else {
        if(confirm('OK to delete?')){
            taskArr.splice(editIndex,1)
            createTask()
            closeTask()
        }
    }
}
// 关闭task 弹框
function closeTask() {
    addTaskPop.style.display = 'none'
    cleanIpt()
}
