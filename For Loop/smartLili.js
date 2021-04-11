function smartLili(age, washPrice, toyPrice){
    age = Number(age);
    washPrice = Number(washPrice);
    toyPrice = Number(toyPrice);

    let sumMoney = 0;
    let toyNum =0;
    let money = 10;

    for( let i = 1; i <= age; i++){
        if(i % 2 === 0){
            sumMoney += money -1;
            money += 10;
        }else{
            toyNum++
        }
    }
    sumMoney += toyNum * toyPrice;
    let diff = sumMoney - washPrice;
    if(diff >= 0){
    console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${Math.abs(diff).toFixed(2)}`);
        
    }

}
smartLili("21", "1570.98", "3")