function charity(numberOfDays,chefs,cakes,waffles,pancakes){
    numberOfDays=Number (numberOfDays)
    chefs=Number(chefs)
    cakes=Number(cakes)
    waffles=Number(waffles)
    pancakes=Number(pancakes)
    let cakePrice=45
    let totalCakePrice=cakes*cakePrice
    let wafflesPrice=5.80
    let totalWafflesPrice=waffles*wafflesPrice
    let pancakesPrice=3.20
    let totalPancakesPrice=pancakes*pancakesPrice
    let sum=(totalCakePrice+totalWafflesPrice+totalPancakesPrice)*chefs
    let fullSum=sum*numberOfDays
    fullSum=fullSum-fullSum/8
    console.log(fullSum)
}
charity("131","5","9","33","46")