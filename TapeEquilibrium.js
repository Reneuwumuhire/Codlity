// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let lowerPart = [A.length];
  let upperPart = [A.length];
  for(let i = 0; i < A.length; i ++){
    let revI = A.length - i - 1;
    if(i === 0){
          lowerPart[i] = 0;
      } else {
          lowerPart[i] = lowerPart[i-1] + A[i-1];
        }
        if(revI === A.length -1){
          upperPart[revI] = A[revI];
        } else {
          upperPart[revI] = upperPart[revI +1] +A[revI];
        }
      }
      let result= Math.abs(lowerPart[1] - upperPart[1]);
  for(let i=0; i < lowerPart.length; i++){
      let diff = Math.abs(lowerPart[i] - upperPart[i]);
      if(diff < result){
          result = diff;
      }
  }
  console.log(result) ;
}
solution([3, 1, 2, 4, 3])