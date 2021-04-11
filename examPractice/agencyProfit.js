function solve(companyName, ticketCount, kidsTicketCount, ticketPrice, taxes){
    ticketCount = Number(ticketCount);
    kidsTicketCount = Number(kidsTicketCount);
    ticketPrice = Number(ticketPrice);
    taxes = Number(taxes);
    let kidsTicketPrice = (ticketPrice * 0.30) + taxes;
    let totalProfit = ((ticketPrice  + taxes) * ticketCount) + (kidsTicketCount * kidsTicketPrice);
    let winings = totalProfit * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${winings.toFixed(2)} lv.`);
    
    
}
solve("WizzAir",
"60",
"23",
"158.96",
"439.12");