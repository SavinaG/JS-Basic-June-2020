function timePlus(arg1,arg2){
    let hours=Number(arg1)
    let minutes=Number(arg2)
    minutes=minutes+15
    hours=hours+Math.floor(minutes/60)
    hours=hours%24
    minutes=minutes%60
    if(minutes<10){
        console.log(`${hours}:0${minutes}`)
    }else {
        console.log(`${hours}:${minutes}`)
    }
}
timePlus("0","01")   