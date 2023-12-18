function telephoneCheck(str) {
  let regex = /^(1\s?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
  let specialCaseRegex =  /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if(regex.test(str)){
    return true;
  }
  else if(specialCaseRegex.test(str)){
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
