function puppyCare(input){
    let totalFood = Number(input[0]);
    let index = 1;
    let command = input[index];
    let eatenFood = 0;
    let currentDayFood = 0;
    totalFood *= 1000;

    while(command !== "Adopted"){
        currentDayFood = Number(command);
        index++;
        eatenFood += currentDayFood;
        command = input[index];
    }if(totalFood >= eatenFood){
        console.log(`Food is enough! Leftovers: ${totalFood - eatenFood} grams.`);
    }else{
        console.log(`Food is not enough. You need ${eatenFood - totalFood} grams more.`);
    }

}
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])