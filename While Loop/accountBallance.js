function solve (input){
    let ballance = 0;
    let index = 0;
    let summary = input[index];
    index++

    while (summary !== "NoMoreMoney"){
        let currentMoney = Number(summary);
        if (currentMoney < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: "+ currentMoney.toFixed(2));
    ballance += currentMoney;
    summary = input[index];
    index++

    }
    console.log(`Total: ${ballance.toFixed(2)}`)
}
solve([ "5.51", "69.42", "100", "NoMoreMoney" ])