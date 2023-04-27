const HCF=(a,b)=>{
    while(b!=0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}

const result = HCF(24,36);