function depositCalculator(amount, term, percent){
    amount = Number(amount);
    term = Number(term);
    percent = Number(percent);
 
    let incForYear = amount * percent / 100;
    let incForMounth = incForYear / 12;
    let result = amount + term * incForMounth;
 
    console.log(result);
 
}
depositCalculator("2", "8", "9")