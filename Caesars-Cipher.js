function rot13(str) {
  let tempStr = '';
  let first13 = 'ABCDEFGHIJKLM';
  let punctuations = '?!.'
  for(let i = 0; i < str.length; i++){
    if(str[i] == ' '){
      tempStr += ' ';
    }
    else if(first13.includes(str[i])){
     let temp = str.charCodeAt(i) + 13;
     tempStr += String.fromCharCode(temp);
    }
    else if(punctuations.includes(str[i])){
      tempStr += str[i];
    }
    else{
    let temp = str.charCodeAt(i) - 13;
     tempStr += String.fromCharCode(temp);
    }
  }
  console.log(tempStr);
  return tempStr;
}

rot13("SERR YBIR?");
