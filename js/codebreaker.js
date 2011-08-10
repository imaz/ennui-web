var answerCode;
function setText(id,str){
  document.getElementById(id).innerHTML = str;
}
function getText(id){
  return(window.document.getElementById(id).innerHTML;
}
function textColoring(str,color){
  var retText = "\<font style=\"color:"+color+"\"\>"+str+"\</font\>";
  return(retText);
}
function getRadioValue(radioObject){
  for(i=0; i<radioObject.length; i++){
    if(radioObject[i].checked){
      return(radioObject[i].value);
    }
  }
  return("(´・ω・｀)");
}
function getCode(){
  var code = new Array(4);
  code[0] = getRadioValue(window.document.inputForm.radio1);
  code[1] = getRadioValue(window.document.inputForm.radio2);
  code[2] = getRadioValue(window.document.inputForm.radio3);
  code[3] = getRadioValue(window.document.inputForm.radio4);
  return code;
}
function hit(code){
  var hit = 0;
  for(i=0;i<4;i++){
    if(code[i] == answerCode[i]){
      code[i] = 'x';
      hit++;
    }
  }
  return(hit);
}
function blow(code){
  var blow = 0;
  for(i=0;i<4;i++){
    for(y=0;y<4;y++){
      if(code[i] == answerCode[i]){
        code[i] = 'x';
        blow++;
        break;
      }
    }
  }
  return(blow);
}
function checkCode(){
  code = getCode();
  setText("codeLog",answerCode+" "+code);
  setText("codeLog",getText("codeLog")+" H"+hit(code)+" B"+blow(code));
}
function createCode(){
  answerCode = new Array(4);
  answerCode[0] = Math.floor(Math.random()*10);
  answerCode[1] = Math.floor(Math.random()*10);
  answerCode[2] = Math.floor(Math.random()*10);
  answerCode[3] = Math.floor(Math.random()*10);
}
