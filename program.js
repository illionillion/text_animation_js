console.log('hello');

const text_space=document.querySelector('#textspace');

var text=text_space.innerHTML;
// var text=text_space.textContent;

var text_length=text.length;

var text_array=[];
var text_array=Array.from(text);

console.log(text);
console.log(text_length);
console.log(text_array);

var outputtext;
for(let i=0;i<text_length;i++){
  outputtext=outputtext+"<span class='default'>"+text_array[i]+"</span>";
  // document.querySelector('#aaaa').value=outputtext;
  // text_space.innerHTML=outputtext;

}
outputtext= outputtext.replace( /undefined/g , "" ) ;

text_space.innerHTML=outputtext;

var n=0;//文字を増やす処理の回数を数える変数nの宣言
var intervalId;

text_space.onclick=function start(){
  colorchange(text);
}
function colorchange(text){

  var s = text;//HTMLの入力欄に入力された文字を取得する変数sの宣言
  var len = text_length;//入力された文字の変数sの文字数をカウントする変数lenの宣言
  

  if(n<text_length){
    document.getElementsByClassName('default')[n].classList.add('color_red');
    n++;
    startTimer();

  }else{
    clearInterval(intervalId);//タイマーをリセットする
    len=null;
    s=null;//変数sを空にする
    n=1;
  }

  // for(let i=0;i<text_length;i++){
  //     // setInterval(() => {
  //     // document.getElementsByClassName('default')[i].classList.add('color_red');
  //     // // console.log(document.getElementsByClassName('default')[i]);
  //     // }, '2000');
  //     // var a="'"+test(i)+"'";
  //     // setTimeout(a, 1000);
  //     setTimeout(() => {
  //       document.getElementsByClassName('default')[i].classList.add('color_red');
  //     }, "1000");
  // }
}


  //↓関数の宣言↓
  function startTimer(){
    intervalId=setTimeout(colorchange,10,text);//2000ミリ秒(2.0秒)ごとにword()関数の処理を実行する
    console.log(intervalId);
  }

// document.getElementsByClassName('default')[10].classList.add('color_red');
let num=0;

function test(num){
  document.getElementsByClassName('default')[num].classList.add('color_red');
  console.log('hi');
  // num++;
}

// setInterval("'"+test(num)+"'", 1000);