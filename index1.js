let pattern = ''
for(let i = 5; i>0;i--){
    for(let j = i; j>0;j--){
        pattern += (i-j+1)
    }
    pattern+='\n'
}
console.log(pattern)