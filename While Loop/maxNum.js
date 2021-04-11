function maxNum(input){
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let command = input[index];
    index++

    while(command !== "Stop"){
        let num = Number(command);
        if(num > maxNumber){
            maxNumber = num;
        }
        command = input[index];
        index++
    }
    console.log(maxNumber);
    
}
maxNum(["100",

"99",

"80",

"70",

"Stop"]);