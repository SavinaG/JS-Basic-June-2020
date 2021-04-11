function solve(bagsPrice, bagsKg, daysDue, bagsCount){
    bagsPrice = Number(bagsPrice);
    bagsKg = Number(bagsKg);
    daysDue = Number(daysDue);
    bagsCount = Number(bagsCount);

    let extraBagPrice = 0;

    if(bagsKg < 10){
        extraBagPrice = bagsPrice * 0.20;
    }else if(bagsKg >= 10 && bagsKg <= 20){
        extraBagPrice = bagsPrice / 2
    }else if(bagsKg > 20){
        extraBagPrice = bagsPrice;
    }
    if(daysDue > 30){
        extraBagPrice *= 1.10;
    }else if(daysDue >=7 && daysDue <= 30){
        extraBagPrice *= 1.15;
    }else if(daysDue < 7){
        extraBagPrice *= 1.40;
    }
            console.log(`The total price of bags is: ${(extraBagPrice * bagsCount).toFixed(2)} lv.`);
            


}
solve("63.80", "23", "3", "1");