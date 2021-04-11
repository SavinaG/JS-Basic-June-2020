function sbstitute(input){
    let firstOne = Number(input[0]);
    let firstTwo = Number(input[1]);
    let secondOne = Number(input[2]);
    let secondTwo = Number(input[3]);

    let count = 0;
    let sum1 = ""

    for(let i = firstOne; i <= 8; i++){
        for(let j = 9; j >= firstTwo; j--){
            for(let l = secondOne; l <= 8; l++){
                for(let h = 9; h >= secondTwo; h--){
                    if(count === 6){
                        break;
                    }
                    if(i % 2 === 0 && l % 2 === 0 && j % 2 !== 0 && h % 2 !== 0){
                        if(i === l && j === h){
                            console.log("Cannot change the same player.");
                       }else{
                        console.log(`${i}${j} - ${l}${h}`);
                        count++
                       }
                    }
                }
            }
        }
    }
}
sbstitute(["6", "7", "5", "6"]);