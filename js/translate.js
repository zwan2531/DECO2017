let translatePop = document.querySelector(".translatePop")
function closeTranslate() {
    translatePop.style.display = 'none'
}
function openTranslate() {
    translatePop.style.display = 'block'
}
let tran_search_ipt = document.querySelector(".tran_search_ipt")
let tran_search = document.querySelector(".tran_search")
let tran_text = document.querySelector(".tran_text")

let tranTitle = document.querySelector(".tranTitle")
let tranPhonetic = document.querySelector(".tranPhonetic")
let licenseName = document.querySelector(".licenseName")
let meaningsCon = document.querySelector(".meaningsCon")
let definitions = document.querySelector(".definitions")
let pronA = document.querySelector(".pronA")

// 查询链接
function searchIpt() {
    if(tran_search_ipt.value == ''){
        return alert('Please enter a word')
    }
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ tran_search_ipt.value,{
        method: 'GET'
    }).then(res => {
        return res.json()
    }).then(resr => {
        tran_text.style.display = 'block'
        let data = resr[0]
        console.log(resr);
        tranTitle.innerHTML = 'Word: ' + data.word
        tranPhonetic.innerHTML = 'Phonetic: ' + data.phonetic
        licenseName.innerHTML = `<a href="${data.license.url}">${data.license.name}</a>`
        meaningsCon.innerHTML = 'Antonyms: ' + (data.meanings[0].antonyms[0] == undefined ? 'not found' : data.meanings[0].antonyms[0])
        let definitionsHtml = ``
        for(let i = 0; i < data.meanings[0].definitions.length; i++){
            let item = data.meanings[0].definitions[i]
            definitionsHtml = definitionsHtml + `
                <div>${item.definition}</div>
            `
        }
        definitions.innerHTML = definitionsHtml
        if(data.phonetics.length > 0){
            pronA.innerHTML = `<audio src="${data.phonetics[0].audio}" controls><audio`
        }else {
            pronA.innerHTML = `not found`
        }

    })
}

// <div className="tranTitle">word:${resr[i].word}</div>
// <div className="tranPhonetic">phonetic:${resr[i].phonetic}</div>
// <div className="tranOrigin">origin:</div>
// <div className="tranPhonetics">phonetics:</div>
