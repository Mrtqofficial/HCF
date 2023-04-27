let roman = {
    I:1,
    V:5,
    X: 10,
    L:50,
    C: 100,
    D: 500,
    M: 1000,
    };
    const romanToInt=(s)=>{
    let value=0;
    for(let i=0;i<s.length;i++){
    let char= roman[s[i]];
    let nextChar= roman[s[i+1]];
    console.log(char,"-------",nextChar)
    char < nextChar ?
    (value -= char)
    :
    (value += char)
    }
    return value
    }
    console.log(romanToInt('VL'));