function finish(sport1, sport2, sport3){
    sport1 = Number(sport1);
    sport2 = Number(sport2);
    sport3 = Number(sport3);
    let totaltime = sport1 + sport2 +sport3;
    let minutes = Math.floor(totaltime / 60);
    let seconds = totaltime % 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else{
        console.log(`${minutes}:${seconds}`);
    }
}
finish();