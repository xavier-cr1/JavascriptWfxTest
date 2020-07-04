let smallest = 0;

for (i = 0; i<500; i++){
  let randomNum = Math.random();
  if(i == 0) {
    smallest = randomNum;
  }
  else {
    if(randomNum < smallest) {
      smallest = randomNum;
    }
  }
}

console.log(smallest);