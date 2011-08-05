
function startTimer(){
  window.document.getElementById("timerStatus").innerHTML = "ポモなう";
  var tid=setTimeout("pomodoro()",1000*60*25);
}

function pomodoro(){
  window.focus();
  var cnt = window.document.getElementById("pomoCount").innerHTML;
  cnt++;
  window.document.getElementById("pomoCount").innerHTML = cnt;
  window.document.getElementById("pomoMessage").innerHTML = "ポモ完遂しました！";
  window.document.getElementById("timerStatus").innerHTML = "停止中";
  window.alert("25分経過しました。");
}
