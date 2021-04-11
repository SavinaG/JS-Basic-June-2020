function onTime(examHour, examMin, arriveHour, arriveMin){
    examHour = Number(examHour);
    examMin = Number(examMin);
    arriveHour = Number(arriveHour);
    arriveMin = Number(arriveMin);
    let examTime = examMin + examHour * 60;
    let arriveTime = arriveMin + arriveHour * 60;
    let timeDiff = examTime - arriveTime;

    if(timeDiff < 0){
        console.log("Late");
        if(Math.abs(timeDiff) < 60){
            console.log(`${Math.abs(timeDiff)} minutes after the start`); 
        }else{
            let hour = Math.abs(Math.trunc(timeDiff / 60));
            let min = Math.abs(timeDiff % 60);
            if(min < 10){
                min = "0" + min;
            }
            console.log(`${hour}:${min} hours after the start`);
            
        }
    }else if(timeDiff <=30){
        console.log("On time");
        if(timeDiff !=0){
            console.log(`${timeDiff} minutes before the start`);
            
        }
    }else{
        console.log("Early");
        if(timeDiff < 60){
            console.log(`${timeDiff} minutes before the start`);
        }else{
            let hour = Math.abs(Math.trunc(timeDiff / 60));
            let min = Math.abs(timeDiff % 60);
            if(min < 10){
                min = "0" + min;
            }
            console.log(`${hour}:${min} hours before the start`);
            
        }
    }

}
onTime("9", "00", "10", "30");