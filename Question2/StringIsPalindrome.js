function IsPalindrome(input) {
  if(typeof input != "string") {
    return false;
  }
  else {
    let inputToLowCase = input.replace(/\s/g, '').toLocaleLowerCase();
    for (i = 0, j = inputToLowCase.length-1; i < Math.floor(inputToLowCase.length/2), j >= Math.floor(inputToLowCase.length/2); i++, j--) {
      if(inputToLowCase[i] != inputToLowCase[j]) {
        return false;
      }
    }
    return true;
  }
}

console.log(IsPalindrome("Race Car"));