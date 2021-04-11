function sumNum(arg){
    let numText = arg + "";
    let sum = 0;

    for(let i = 0; i < numText.length; i ++){
        let oneNum = Number(numText[i]);
        sum += oneNum;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNum("1234");