function toyStore(arg1,arg2,arg3,arg4,arg5,arg6){
    let vacPrice=Number(arg1)
    let puzzleCnt=Number(arg2)
    let dollCnt=Number(arg3)
    let teddyCnt=Number(arg4)
    let minionCnt=Number(arg5)
    let truckCnt=Number(arg6)
    let totalToyCnt=puzzleCnt+dollCnt+teddyCnt+minionCnt+truckCnt
    let toyPrice=puzzleCnt*2.60+dollCnt*3+teddyCnt*4.10+minionCnt*8.20+truckCnt*2
    let finalPrice=toyPrice*0.9
    if(totalToyCnt>=50){
        finalPrice*=0.75
    }if (finalPrice>=vacPrice){
        console.log(`Yes! ${(finalPrice-vacPrice).toFixed(2)} lv left.`)
    }else {
        console.log(`Not enough money! ${(vacPrice-finalPrice).toFixed(2)} lv needed.`)
    }

}
toyStore("40.8", "20", "25", "30", "50", "10")