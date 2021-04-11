function equalsEOd(arr){
    let firstNum = Number(arr[0]);
    let secondNum =Number(arr[1]);
    let printLine = " "

    for( let i = firstNum; i <= secondNum; i++){
        let currentNum = " " + i;
        let evenSum = 0;
        let oddSum = 0;
        for(let j = 0; j < 7; j++){
            let currentDigit = Number(currentNum.charAt(j));
            if( j % 2 == 0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }

        }
        if(evenSum === oddSum){
            printLine += `${i} `;
        }
    }
    console.log(printLine);
    
}
equalsEOd(["100000", "100050"]);