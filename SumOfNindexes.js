function nIndexSum(arr,n) {
    let finalSum=0;
    let tempSum=0;
    if (n>arr.length) {
        return
    }
    for (let i = 0; i < n; i++) {
        finalSum += arr[i];
    }
        tempSum=finalSum;
    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum-arr[j-n]+ arr[j];
    if(finalSum < tempSum){
        finalSum = tempSum
    }
    }
    return finalSum
}
nIndexSum([1,2,3,4,5,6,7],3)