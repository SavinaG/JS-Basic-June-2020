function changeMoney(bitCoinCount, chinaYunCount, comission){
    bitCoinCount = Number(bitCoinCount);
    chinaYunCount = Number(chinaYunCount);
    comission = Number(comission);
    bitCoinPrice = 1168;
    dollarPrice = 1.76;
    chinaYunPrice = dollarPrice * 0.15;
    euroPrice = 1.95;
    totalSum = 0;

    totalSum = ((bitCoinCount * bitCoinPrice) + (chinaYunCount * chinaYunPrice)) / euroPrice;
    comission = (totalSum * comission)/100;
    

    console.log((totalSum-comission).toFixed(2));
    

}
changeMoney("20", "5678", "2.4");
