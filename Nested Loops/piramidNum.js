function piramidNum(arr){
    let n = Number(arr[0]);
    let current = 1;
    let isBiger = false;
    let currentPrinLine = "";
    
    for( let rows = 1; rows <= n; rows++){
        for( let cols = 1; cols <= rows; cols++){
            if( current > n){
                isBiger == true;
                break;
            }
            currentPrinLine += current + " ";
            current++
        }
        console.log(currentPrinLine);
        currentPrinLine = "";
        if(isBiger){
        break;
        }
    }
}
piramidNum(["7"])