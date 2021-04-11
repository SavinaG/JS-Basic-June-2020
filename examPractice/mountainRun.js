function mountainRun(recordSec, distansM, timeSecPerM){
    recordSec = Number(recordSec);
    distansM = Number(distansM);
    timeSecPerM = Number(timeSecPerM);

    let time = distansM * timeSecPerM;
    let slowDown = Math.floor(distansM / 50) * 30;
    let totalTime = time + slowDown;
    let timeDif = Math.abs(totalTime - recordSec);

    if(totalTime < recordSec){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
        
    }else{
        console.log(`No! He was ${timeDif.toFixed(2)} seconds slower.`);
        
    }
}
mountainRun("10164",
    "1400",
    "25")