function cinema(type, line, column){
    line = Number(line);
    column = Number(column);
    let price = 0;
    let totalSeats = line * column;

    if(type === "Premiere"){
        price = 12 * totalSeats;
    }else if(type === "Normal"){
        price = 7.50 * totalSeats;
    }else{
        price = 5 * totalSeats;
    }
        console.log(`${(price.toFixed(2))} leva`);
        

}
cinema("Discount", "12", "30");