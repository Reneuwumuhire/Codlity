function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let jumpsCount = 0;
  if(X===Y){
      jumpsCount = 0;
  } else if (D >= (Y-X)){
      jumpsCount = 1;
  } else{
      jumpsCount = parseInt((Y-X) /D) + ((Y-X)%D > 0 ? 1 : 0);
  }
  return jumpsCount;
}