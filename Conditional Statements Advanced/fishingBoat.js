function fishing(arg1, arg2, arg3){
    let budget=Number(arg1)
    let season=arg2;
    let fishermans=Number(arg3);
    let boatPrice=0
    if (season=="Summer" || season=="Autumn"){
        boatPrice=4200
    }
    else if (season=="Spring"){
        boatPrice=3000
    }
    else if (season=="Winter"){
        boatPrice=2600
    }
    if (fishermans<=6){
        boatPrice*=0.90
    }
    else if (fishermans>=7 && fishermans<=11){
        boatPrice*=0.85
    }
    else {
        boatPrice*=0.75
    }
    if (fishermans %2==0 && season!=="Autumn"){
        boatPrice*=0.95
    }
    if (budget>=boatPrice){
        console.log(`Yes! You have ${(budget-boatPrice).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${(boatPrice-budget).toFixed(2)} leva.`)
    }
}
fishing("3000","Summer","11")