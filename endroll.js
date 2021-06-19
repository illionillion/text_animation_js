console.log('ok');
var canvas = document.getElementById( "screen" ) ;
var ctx = document.getElementById('screen').getContext('2d');
var x=canvas.width;
var y=canvas.height;
console.log(y);

// ctx.fillRect(0,0,100,100);
// ctx.clearRect(0,0,x,1);


document.querySelector('#screen').onclick=function start(){
  draw(y);
}
var intervalId;

var i=0;
var i2=0;
function draw(y) {
  console.log(y);
  ctx.font = "18px serif";
  // for(let i=0;i<y;i++){
  //  ctx.fillText("Hello world", 0, i);
  // //  ctx.clearRect(0, i, 0, 0);

  // }
  console.log(i);
  if(i<y||i2<y){
    
    i++;
    ctx.fillStyle = '#1e1e1e';
    ctx.fillText("Hello world", 0, i);
    
   if(i>12){
     ctx.fillStyle = '#fff';
     console.log(i2);
    //  ctx.fillText("Hello world", 0, i2);
    //  ctx.clearRect(0, i2, 100, 111);
    // ctx.clearRect(0,i2,x,1);
    ctx.fillRect(0,0,x,i2);


    i2++;
   }
   startTimer();
  }else{
    clearInterval(intervalId);//タイマーをリセットする
  }
}

function startTimer(){
  intervalId=setTimeout(draw,10,y);//2000ミリ秒(2.0秒)ごとにword()関数の処理を実行する
  console.log(intervalId);
}