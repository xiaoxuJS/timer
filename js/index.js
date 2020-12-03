let spanValueMinute = document.getElementsByClassName("span-class")[0];
let spanValueSecond = document.getElementsByClassName("span-class")[2];
let alertShowSuccess = document.getElementsByClassName("alert-show-success")[0];
let alertShowWarning = document.getElementsByClassName("alert-show-warning")[0];
let restAlertSuccess = document.getElementById("restAlertSuccess");
let rest = document.getElementById('rest'); // 休息按钮

var timing;
var resTtiming;
let minute = 0;
let second = 0;
let restMinute = 5;
let restSecond = 60;


//开始番茄钟事件
function start() {
  if (minute === 25) {
    reset();
  }
  restAlertSuccess.innerHTML = "时间到休息一下吧!";
  alertShowSuccess.style.display = "none";
  alertShowWarning.style.display = "none";
  clearInterval(timing);
  timing = setInterval(() => {
    second++;
    if (second >= 60) {
      minute++;
      second = 0;
    }
    if (minute === 25) {
      clearInterval(timing);
      alertShowSuccess.style.display = "inline";
      rest.style.display = "inline";
    }
    spanValueMinute.innerHTML = minute >= 10 ? minute : "0" + minute;
    spanValueSecond.innerHTML = second >= 10 ? second : "0" + second;
  }, 1000);
}
//暂停
function stop() {
  if (minute !== 25) {
    clearInterval(timing);
    alertShowWarning.style.display = "inline";
  }
}
//重置
function reset() {
  alertShowWarning.style.display = "none";
  clearInterval(timing);
  minute = 0;
  second = 0;
  spanValueMinute.innerHTML = "00";
  spanValueSecond.innerHTML = "00";
  alertShowSuccess.style.display = "none";
}
//休息事件
function handleRest() {
  rest.style.display = "none";
  let restSpanMinute = document.getElementsByClassName("rest-span-class")[0];
  let restSpanSecond = document.getElementsByClassName("rest-span-class")[2];
  resTtiming = setInterval(() => {
    restSecond--;
    if (restMinute <= 0 && restSecond <= 0) {
      clearInterval(resTtiming);
      restAlertSuccess.innerHTML = "休息结束";
      alertShowSuccess.style.display = "none";
      alertShowWarning.style.display = "inline";
    }else if(restSecond === 0){
      restMinute--;
      restSecond = 60;
    }
    restSpanMinute.innerHTML = restMinute >= 10 ? restMinute : "0" + restMinute;
    restSpanSecond.innerHTML = restSecond >= 10 ? restSecond : "0" + restSecond;
  }, 1000);
}
