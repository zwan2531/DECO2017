// Define initialization data
let taskArr = [];
let taskObj = {
    subject: '',            // Task Category name
    name: '',               // Task name
    description: '',        // Task description
    date: '',               // Due date
    time: '',               // time for study
    state: '',              // Task status ready in progress done
    priority: '',           // Task priority level
    oneDateTime: '',        // Time for this task left tody
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
            taskColor = '#FFC700'
        }
        if(taskArr[i].priority == '2'){
            taskColor = '#F30000'
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
// add task
function addTask() {
    if(subIpt.value == '' || nameIpt.value == '' || desIpt.value == '' || dateIpt.value == '' || timeIpt.value == ''){
        return alert('Please fill in the information completely')
    }
    let obj = {
        subject: subIpt.value,            // Task Category name
        name: nameIpt.value,               // Task name
        description: desIpt.value,        // Task description
        date: dateIpt.value,               // Due date
        time: timeIpt.value,               // Time for study
        state: statusIpt.value,              // Task status ready in progress done
        priority: priorityIpt.value,           // priority level
        oneDateTime: parseInt(Number(timeIpt.value)/countDays(dateIpt.value)),        // Time for study left today
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

// Clearing input data
function cleanIpt() {
    subIpt.value = ''
    nameIpt.value = ''
    desIpt.value = ''
    dateIpt.value = ''
    timeIpt.value = ''
    editIndex = ''
}

// Number of days calculation
function countDays(time) {
    let oDate1 = new Date()
    let oDate2 = new Date(time)
    let iDays = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数
    if(iDays < 0){
        return 'Timed out'
    }
    return iDays
}

// Click the plus button
function clickAddImg() {
    addTaskPop.style.display = 'block'
}
let editIndex = ''
// The editor
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
// Click the delete
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
// close task popout
function closeTask() {
    addTaskPop.style.display = 'none'
    cleanIpt()
}
