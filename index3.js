// reverse using recursion

let arr = [1, 2, 3, 4, 1];

// Reverse number using two pointer element

// function reverseArr(l, r) {
//   if (l > r) {
//     console.log(arr);
//     return arr;
//   }
//   let temp = arr[l];
//   arr[l] = arr[r];
//   arr[r] = temp;
//   reverseArr(l + 1, r - 1);
// }

// let r = arr.length - 1; // index starts from 0, so length - 1

// reverseArr(0, r);

// Reverse number using single pointer element
let r = arr.length - 1;
let newArr = [];
function revArr(n) {
  if (n < 0) return;
  newArr.push(arr[n]);
  revArr(n - 1);
}

revArr(r);
if(arr.join('') === newArr.join('')){
    console.log('palingdrome')
} else{
    console.log('not palingdrome')
}
