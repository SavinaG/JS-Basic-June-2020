function sumNum(input){
    let index =0;
    let num = Number(input[index]);
    index++;
    let sum =0;

    while(sum < num){
        let curentNumber = Number(input[index]);
        index++;
        sum += curentNumber;
    }
    console.log(sum)
    

}
sumNum((["100",

"10",

"20",

"30",

"40"])
)