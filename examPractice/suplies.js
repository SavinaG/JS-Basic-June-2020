function suplies(penCount, markerCount, mrProperL, discount){
    penCount = Number(penCount);
    markerCount = Number(markerCount);
    mrProperL = Number(mrProperL);
    discount = Number(discount);
    let penPrice = 5.80;
    let markerPrice = 7.20;
    let mrProper = 1.20;
    let totalSum = 0;

    totalSum = (penCount * penPrice) + (markerCount * markerPrice) + (mrProperL * mrProper) 
    discount = totalSum * discount/100;
    totalSum-= discount;

    console.log(totalSum.toFixed(3));
    
}

suplies("2", "3", "2.5", "25");