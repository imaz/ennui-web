var answerCode;
function setText(id,str){
  document.getElementById(id).innerHTML = str;
}
function getRadioValue(radioObject){
  for(i=0; i<radioObject.length; i++){
    if(radioObject[i].checked){
      return(radioObject[i].value);
    }
  }
  return("(´・ω・｀)");
}
function checkCode(){
  var code;
  code = getRadioValue(window.document.inputForm.radio1);
  code += getRadioValue(window.document.inputForm.radio2);
  code += getRadioValue(window.document.inputForm.radio3);
  code += getRadioValue(window.document.inputForm.radio4);
  setText("codeLog",code);
}
function createCode(){
  answerCode = new Array(4);
  answerCode[0] = Math.floor(Math.random()*10);
  answerCode[1] = Math.floor(Math.random()*10);
  answerCode[2] = Math.floor(Math.random()*10);
  answerCode[3] = Math.floor(Math.random()*10);
  console.log(answerCode);
}
