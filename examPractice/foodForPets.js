function foodForPets(input){
    let daysCount = Number(input[0]);
    let totalFood = Number(input[1]);
    let totalDogFood = 0;
    let dogFoodDay = 0;
    let totalCatFood = 0;
    let catFoodDay = 0;
    let biscuts = 0;
    let biscuitsCount = 0;
    let days = 0;

        for( let i = 2; i <= daysCount * 2; i++){
            dogFoodDay = Number(input[i]);
            totalDogFood += dogFoodDay;
            i++
            catFoodDay = Number(input[i]);
            totalCatFood += catFoodDay;
            days++
            if(days % 3 === 0){
                biscuts = ((dogFoodDay + catFoodDay) / 100)*10;
                biscuitsCount += biscuts;
            }
        }
        let totalEatenFood = totalDogFood + totalCatFood;
    
        console.log(`Total eaten biscuits: ${Math.round(biscuitsCount)}gr.`);
        console.log(`${((totalEatenFood / totalFood) * 100 ).toFixed(2) }% of the food has been eaten.`);
        console.log(`${((totalDogFood / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`);
        console.log(`${((totalCatFood /totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`);
        
    
}
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"
]);