function leapYear(firstYear, secondYear){
    firstYear = Number(firstYear);
    secondYear = Number(secondYear);

    for( let year = firstYear; year <= secondYear; year += 4){
        console.log(year);
        
    }
}
leapYear("1908", "1919")