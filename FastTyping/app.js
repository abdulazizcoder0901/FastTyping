const select = document.querySelector('select')
const score = document.querySelector('.score')
const highScore = document.querySelector('.high-score')
const mainText = document.querySelector('.main h2')
const input = document.querySelector('input')
const time = document.querySelector('.time')
const modal = document.querySelector('.modal')
const resultGame = document.querySelector('.result-game')
const loader = document.querySelector('.loader')

const words = [
    "abreact",
    "abreacted",
    "abreacting",
    "abreaction",
    "abreactions",
    "paltrier",
    "paltriest",
    "paltrily",
    "paltriness",
    "paltrinesses",
    "paltry",
    "paludal",
    "paludism",
    "shiv",
    "shiva",
    "shivah",
    "shivahs",
    "shivaree",
    "shivareed",
    "shivareeing",
]

let randomTxT;
function randomText () {
    const random = Math.floor(Math.random() * words.length)

    randomTxT = words[random]
    mainText.textContent = randomTxT
}

randomText()

let fullScore = 0;
input.addEventListener('input', () =>{
    let inputText = input.value;
    if(inputText == randomTxT){
        fullScore++
        randomText()
        input.value = ""
        score.textContent = `Score : ${fullScore}`;

        if(level == 'Easy'){
            mainTime += 5
            time.textContent = '+5'
        }else if(level == 'Medium'){
            mainTime += 3
            time.textContent = '+3'
        }else if(level == 'Hard'){
            mainTime += 2
            time.textContent = '+2'
        }
    }
})

loader.classList.add('active')

setTimeout(() =>{
    loader.classList.remove('active')
},2000)

let mainTime = 10;

function generateTime () {
    if(mainTime > 0){
        mainTime--
    }else if(mainTime == 0){
        modal.classList.add('active')
        resultGame.textContent = `Sizning Natijangiz : ${fullScore}`;
        highScore.textContent = `High Score : ${fullScore}`;
    }
    time.textContent = `Time : ${mainTime}`
}

let level = 'Easy';
select.addEventListener('change', () =>{
    level = select.value;
})

input.addEventListener('focus', () =>{
    setInterval(generateTime, 1000)
})