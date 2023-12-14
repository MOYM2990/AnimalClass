const question = [
    ["背骨がある？","体を支える大事な骨だよ",1,5],
    ["外の温度に関わらず体温は一定？","そのようないきものを恒温動物ともいうよ",2,3],
    ["卵を産む？","一部例外はあるけれど…",11,12],
    ["体が粘膜で覆われている？","肺の機能を皮ふ呼吸で補っているんだ",13,4],
    ["肺で呼吸する？","もう一方はエラで呼吸するよ",14,15],
    ["体に節がある？","固い殻が骨格の代わりをしているよ",16,6],
    ["骨ではなく筋肉で内臓が覆われている？","外とう膜とも呼ばれるんだ",17,18]
];

const result = [
    ["鳥類","羽毛で体温を一定に保っているよ","./img/img1.jpg"],
    ["哺乳類","哺乳類でも、ハリモグラやカモノハシはタマゴを産むよ","./img/img2.jpg"],
    ["両生類","子供のころはエラ呼吸で、大人になると肺呼吸に変わるんだ","./img/img3.jpg"],
    ["爬虫類","恐竜の一部から鳥類へと進化したことから、鳥類を爬虫類の一群とすべきという考えもあるよ","./img/img4.jpg"],
    ["魚類","肺をもつ魚もいるよ","./img/img5.jpg"],
    ["節足動物","昆虫やクモ、甲殻類などが含まれるよ","./img/img6.jpg"],
    ["軟体動物","タコやイカ、貝が含まれるよ","./img/img7.jpg"],
    ["その他の動物","世の中にはいろいろないきものがいるね","./img/img8.jpg"]
];

let successFlag = false;//最後まで回答したか
let questionCount = 0;//問題数

// 最初は問題を解くボタンだけ表示(他の部分は非表示)
document.getElementById("ansArea").style.display = "none";    
document.getElementById("resultArea").style.display = "none";

const viewQuestion =()=>{
    // 問題文表示
    document.getElementById("question").innerHTML = `Q.${question[questionCount][0]}`;
    document.getElementById("question_supplement").innerHTML = `ヒント：${question[questionCount][1]}`;
}

const ansButton =(e)=>{
    // YESのときは配列の２番目の数字、NOのときは３番目の数字をとる
    if(e == 0){
        questionCount = question[questionCount][2];
    } else {
        questionCount = question[questionCount][3];
    }
    if(questionCount > 10 && successFlag == false){
        // 結果の表示        
        document.getElementById("resultHead").innerHTML = result[questionCount - 10 - 1][0];
        document.getElementById("answer").innerHTML = result[questionCount - 10 - 1][1];
        document.getElementById("resultImg").src = result[questionCount - 10 - 1][2];
        document.getElementById("resultImg").classList.add("resultImgAnimation");


        // 問題を解くボタンを非表示
        document.getElementById("ansStartButton").style.visibility = "visible";
        document.getElementById("ansArea").style.display = "none";    
        document.getElementById("resultArea").style.display = "block";
        // 他の部分を表示
        document.getElementById("answerButton1").disabled = "disabled";
        document.getElementById("answerButton2").disabled = "disabled";
        document.getElementById("ansStartButton").innerHTML = "もう一回";
        successFlag = true;
    } else {
        viewQuestion();
    }
}

const ansStart=()=>{
    // 問題を解くボタンを非表示
    document.getElementById("ansStartButton").style.visibility = "hidden";
    document.getElementById("ansArea").style.display = "block";    
    document.getElementById("resultArea").style.display = "none";
    document.getElementById("answerButton1").disabled = null;
    document.getElementById("answerButton2").disabled = null;
    // 初期化
    successFlag = false;
    questionCount = 0;

    viewQuestion();
}