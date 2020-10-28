var isGame = false;
var MaxLength = '180';
var isRigthMode
var isRun = false;
setInterval(function OnStart() {
    var get_isMyturn = document.getElementsByClassName("game-input")[0].style.display; //값 가져오기
    var Mode = document.getElementsByClassName("room-head-mode")[0].innerHTML;
    isRigthMode = (Mode.startsWith('한국어 타자 대결') || Mode.startsWith('영어 타자 대결')) ? true : false;
    if(get_isMyturn == 'block' && isRigthMode && isGame) {
        GetStartWord();
    }
}, 100)

function GetStartWord() {
    var get_firstWord = document.getElementsByClassName("jjo-display ellipse")[0].innerHTML.split(">")[1].split("<")[0]
    SendWord(get_firstWord);
}

function SendWord(idx) {
    document.querySelectorAll("[maxlength=\"" + MaxLength + "\"]")[1].value = idx; //단어삽입
    document.querySelector("#ChatBtn").click(); //전송
}

setInterval(function CheackRoundEnd() {
    var Product = document.getElementsByClassName("ChatBox Product")[0].style.width;
    if(Product == '1000px') {
        isGame = true;
    } else {
        isGame = false;
    }
}, 200)