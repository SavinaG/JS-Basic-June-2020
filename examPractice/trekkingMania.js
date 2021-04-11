function trekkingMania(input){
    let groupCount = Number(input[0]);
    let currentMusala = 0;
    let currentMonblant = 0;
    let currentKilimandgaro = 0;
    let currentK2 = 0;
    let currentEverest = 0;

    let groupTotal = 0;

    for(let i =1; i <= groupCount; i++){
        groupTotal = Number(input[i]);
        if(groupTotal <= 5){
            currentMusala += groupTotal;
        }else if(groupTotal >= 6 && groupTotal <= 12){
            currentMonblant += groupTotal;
        }else if(groupTotal >= 13 && groupTotal <= 25){
            currentKilimandgaro += groupTotal;
        }else if(groupTotal >= 26 && groupTotal <= 40){
            currentK2 += groupTotal;
        }else{
            currentEverest += groupTotal;
        }
    }
    groupTotal = currentMusala + currentMonblant + currentKilimandgaro + currentK2 + currentEverest
    console.log(((currentMusala / groupTotal)*100).toFixed(2)+"%");
    console.log(((currentMonblant / groupTotal)*100).toFixed(2)+"%");
    console.log(((currentKilimandgaro / groupTotal)*100).toFixed(2)+"%");
    console.log(((currentK2 / groupTotal)*100).toFixed(2)+"%");
    console.log(((currentEverest / groupTotal)*100).toFixed(2)+"%");
    
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);