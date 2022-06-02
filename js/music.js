let musicArr = [
    {
        src: './music/m1.mp3',
        name: 'Flower Dance',
        img: './img/flower dance.png',
        author: 'DJ OKAWARI'
    },
    {
        src: './music/m2.mp3',
        name: 'Because of you',
        img: './img/because of you.png',
        author: 'Kelly Clarkson'
    },
    {
        src: './music/m3.mp3',
        name: 'Moon River',
        img: './img/moon river.png',
        author: '小野丽莎'
    }
]
let musicPop = document.querySelector(".musicPop")
let musicList = document.querySelector(".musicList")
let yyMusic = document.querySelector(".yyMusic")
let musicSmName = document.querySelector(".musicSmName")
// 关闭音乐弹框
function closeMusicPop() {
    musicPop.style.display = 'none'
    yyMusic.style.display = 'flex'
}
// 打开音乐弹框
function openMusicPop() {
    musicPop.style.display = 'block'
    let musicHtml = ``
    for(let i = 0; i < musicArr.length; i++){
        musicHtml = musicHtml + `
                 <div onclick="clickMusicList(${i})">
                    <div class="musicName">${musicArr[i].name}</div>
                    <div class="musicAuthor">${musicArr[i].author}</div>
                </div>
        `
    }
    musicList.innerHTML = musicHtml
}
// 切换音乐
let musicIndex = 0;     // 音乐播放器
let musicS = document.querySelector(".musicS")
let musicImgSrc = document.querySelector(".musicImgSrc")
// 点击切换
function clickMusicList(index) {
    musicIndex = index
    musicImgSrc.src = musicArr[index].img
    musicS.src = musicArr[index].src
    musicS.play()
    musicSmName.innerHTML = musicArr[index].name
}
// 关闭缩略狂
function closeSmMusic(e){
    yyMusic.style.display = 'none'
    musicS.pause()

    e = e || window.event
    e.stopPropagation()
}

