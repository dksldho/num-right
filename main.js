//랜덤번호 지정
//유저가 번호를 입력한다, go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 down, 랜덤번호 >유저번호 up
//reset을 누르면 게임 리셋, 5번의 기회 다 쓰면 게임 끝
//유저가1~100범위 밖 숫자를 입력하면 알려준다 기회 제거 X
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다 기회제거 x


let computernum = 0
let playbutton = document.getElementById("play-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result-area")
let resetbutton = document.getElementById("reset-button")
let chance = 5
let gameover = false
let chancearea = document.getElementById("chance-area")
let history = []


playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset)
userinput.addEventListener("focus",function(){userinput.value=""})
function pickrandomnum(){
    computernum = Math.floor(Math.random() * 100)+1;
    console.log("정답",computernum);
}


function play(){
    let uservalue = userinput.value

    if(uservalue<1 || uservalue>100){
        resultarea.textContent="1과 100사이의 값을 입력하세요"
        return; 
    }
    
    if(history.includes(uservalue)){
        resultarea.textContent = "이미 입력한 숫자 입니다 다른 숫자를 입력해 주세요"
        return;
    }
    chance --;
    chancearea.textContent= `남은 기회 : ${chance}번`
    console.log("chance",chance)

    if(uservalue < computernum){
        resultarea.textContent = "!!UP!!"
    }else if(uservalue > computernum){
        resultarea.textContent = "!!down!!"
    }else{
        resultarea.textContent = "!!정답입니다!!"
        gameover=true
    }

    history.push(uservalue)
    console.log(history)

    if(chance < 1){
        gameover=true
    }

    if(gameover==true){
        playbutton.disabled = true
    }
}

function reset(){
    userinput.value = ""
    pickrandomnum()
    resultarea.textContent = "결과값이 나옵니다"
}
pickrandomnum()