function jorney(budget, season){
    budget = Number(budget);
    let price = 0;
    let destination = "";
    let type = "";

    if( budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            type = "Camp";
            price = budget * 0.30;
        }else if(season === "winter"){
            type = "Hotel";
            price = budget * 0.70;
        }
    }
    else if(budget > 100 && budget <= 1000){
        destination = "Balkans";
        if(season === "summer"){
            type = "Camp";
            price = budget * 0.40;
        }else if(season === "winter"){
            type = "Hotel"
            price = budget * 0.80;
        }
    }
    else if(budget > 1000){
        destination = "Europe"
        type = "Hotel";
        price = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);   

}
jorney("1500", "summer");