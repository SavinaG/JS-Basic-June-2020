function worldRecord(record, metters, seconds){
    record = Number(record);
    metters = Number(metters);
    seconds = Number(seconds);
    let time = metters * seconds;
    let slow = Math.floor(metters / 15) * 12.5;
    time += slow;

    if(time < record){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);    
    }
    else{
        let diff = time - record;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldRecord("10464", "1500", "20");