function palindrome(str) {
    let og = str;
    let go = '';
    let tempArr = str.split('');
    let goArr = [];
    for(let i = tempArr.length - 1; i >=0 ; i--){
      goArr.push(tempArr[i]);
    }
    go = goArr.join('');
    let finalog = og.replace(/[\W\_]/g, '').toLowerCase();
    let finalgo = go.replace(/[\W\_]/g, '').toLowerCase();
  
    //  console.log(finalog)
    //  console.log(finalgo);
  
  
    if(finalog === finalgo){
      return true;
    }
    else{
      return false;
    }
  
    
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));  // True
