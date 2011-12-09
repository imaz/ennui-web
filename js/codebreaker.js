(function(global) {
  var answerCode;

  Array.prototype.clone = function(){
    return Array.apply(null,this)
  }

  function setText(id,str){
    document.getElementById(id).innerHTML = str;
  }

  function getText(id){
    return(window.document.getElementById(id).innerHTML);
  }

  function textColoring(str,color){
    var retText = "\<font style=\"color:"+color+"\"\>"+str+"\</font\>";
    return(retText);
  }

  function getRadioValue(radioObject){
    var len = radioObject.length
    for(i=0; i<len; i++){
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

  function hit(ans,code){
    var hit = 0;
    for(i=0; i<4; i++){
      if(code[i] == ans[i]){
        code[i] = 'x';
        ans[i] = 'y';
        hit++;
      }
    }
    return(hit);
  }

  function blow(ans,code){
    var blow = 0;
    for(i=0; i<4; i++){
      for(y=0; y<4; y++){
        if(code[i] == ans[y]){
          code[i] = 'x';
          ans[y] = 'y';
          blow++;
          break;
        }
      }
    }
    return(blow);
  }

  function checkCode(){
    code = getCode();
    ans = answerCode.clone();
    setText("codeLog",getText("codeLog")+"\<br /\>");
    setText("codeLog",getText("codeLog")+" "+code);
    setText("codeLog",getText("codeLog")+" H"+hit(ans,code)+" B"+blow(ans,code));
  }
  global.checkCode = checkCode;

  function initializeCode(){
    answerCode = new Array(4);
    i=0;
    while(i != 4){
      c = 0;
      c = Math.floor(Math.random()*10);
      if(answerCode.indexOf(c) == -1){
        answerCode[i] = c;
        i++;
      }
    }
  }

  function createCode(){
    initializeCode();
  }
  global.createCode = createCode;

  function resetGame(){
    initializeCode();
    setText("codeLog","");
    window.document.inputForm.reset();
  }
  global.resetGame = resetGame;
}(window));
