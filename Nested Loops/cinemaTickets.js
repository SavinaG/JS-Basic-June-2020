function cinemaTickets(input) {
 
    let film = input.shift();
    let totalTickets = 0;
    let totalstudents = 0;
    let totalKids = 0;
    let totalStandard = 0;
 
    while (film !== "Finish") {
 
        let freeSpace = Number(input.shift());
        let ticket = input.shift();
        let soldTickets = 0;
 
        while (ticket !== "End"){
            if(ticket === "standard"){
                totalStandard++;
            }else if (ticket === "student") {
                totalstudents++;
            }else if (ticket === "kid"){
                totalKids++;
            }
            totalTickets++;
            soldTickets++;
 
            if(soldTickets >= freeSpace){
                break;
            }
            ticket = input.shift();
        }
        let capacityProcentage = (soldTickets / freeSpace) * 100;
        console.log(`${film} - ${capacityProcentage.toFixed(2)}% full.`);
       
        film = input.shift();
 
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((totalstudents / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKids / totalTickets ) * 100).toFixed(2)}% kids tickets.`)
 
}
cinemaTickets();