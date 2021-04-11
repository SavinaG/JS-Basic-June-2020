function volley(arg1, arg2, arg3){
    let year = arg1;
    let hollyDays = Number(arg2);
    let weekendsHome = Number(arg3);
    let allWknd = 48;
    gamesPlayed = 3/4 * (allWknd - weekendsHome) + hollyDays * 2/3 + weekendsHome;
    if (year=="leap"){
        gamesPlayed = gamesPlayed*1.15
    }console.log(Math.floor(gamesPlayed))
}
volley("leap", "5", "2")