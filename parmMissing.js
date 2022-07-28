// Mission element in the array sequences
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a,b) => a-b);
  let next = 1;
  let i = 0;

  while(next === A[i]){
      next ++;
      i ++;
  }
  return next;
}