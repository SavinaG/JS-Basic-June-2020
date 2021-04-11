function minNumber(input){
    let n = Number(input[0]);

    let smallestNumber = Number(input[1])
    for( let i = 2; i < input.length; i++){
        let currentNumber = Number(input[i])
        if(currentNumber < smallestNumber){
            smallestNumber = currentNumber
        }
    }
    console.log(smallestNumber);
    
        
}

minNumber(["3",

"-10",

"20",

"-30"])