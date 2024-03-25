let pattern1 = ''
for(let i = 0; i< 5;i++){
    // space
    for(let j = 0; j< 5-i-1; j++){
        pattern1 += " "
    }
    // star
    for(let j = 0; j<(2*i -1); j++ ){
        pattern1 += '*'
    }
    // space
    for(let j = 0; j< 5-i-1; j++){
        pattern1 += " "
    }
    pattern1 += '\n'
}

console.log(pattern1)


/**
 * broke down the problem into simple steps
 */


/**
 * Inverted Triangle
 * 5 rows 2n -(2i+1) for the star pattern
 * 0 9 0
 * 1 7 1
 * 2 5 2
 * 3 3 3
 * 4 1 4
 */

let pattern = ''
for(let i = 4; i> 0;i--){
    // space
    for(let j = 0; j< 5-i-1; j++){
        pattern += " "
    }
    // star
    for(let j = 0; j<(2*i -1); j++ ){
        pattern += '*'
    }
    // space
    for(let j = 0; j< 5-i-1; j++){
        pattern += " "
    }
    pattern += '\n'
}

console.log(pattern)



/**
 * Straignt and Inverted Triangle
 * 5 rows 2n -(2i+1) for the star pattern
 * 4 1 4
 * 3 3 3
 * 2 5 2
 * 1 7 1
 * 0 9 0
 * 1 7 1
 * 2 5 2
 * 3 3 3
 * 4 1 4
 */

let pattern3 = ''
for(let i = 0; i< 8; i++){
    
}let pattern = ''
let n = 5
for(let i = 1; i< 2*n-1; i++){
    let stars = i;
    if(i > n) stars = 2*n - i
    for(let j = 1; j< stars; j++){
        pattern+='*'
    }
    pattern+='\n'
}
console.log(patt