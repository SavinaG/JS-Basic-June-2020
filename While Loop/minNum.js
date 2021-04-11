function minNum(input){
    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let command = input[index];
    index++

    while(command !== "Stop"){
        let num = Number(command);
        if(num < minNumber){
            minNumber = num;
        }
        command = input[index];
        index++
    }
    console.log(minNumber);
    
}
minNum(["100",

"99",

"80",

"70",

"Stop"]);