/**
 *   1
 *   2 2
 *   3 3 3
 *   4 4 4 4
 */

let pattern = ''

for(let i = 1; i< 6; i++){
  for(j = 0; j< i; j++){
    // pattern += (j+1)
    // pattern += (i)
    pattern += ("*")
  }
  pattern += '\n'
}
console.log(pattern)