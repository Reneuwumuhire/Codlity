function solution (A,K){
  let newArr = [];
  for(let i=1; i<=K; i++){
    newArr = shiftArray(newArr.length ? newArr : A);
  }
  console.log(newArr);
}
function shiftArray (arr){
  let newArr = [];
    for (let i= 0; i < arr.length; i++){
      if(i !== arr.length-1){
        newArr.push(arr[i]);
      } else{
        newArr.splice(0, 0, arr[arr.length - 1])
    }
  }
  return newArr;
}

solution([0,1,0],5);