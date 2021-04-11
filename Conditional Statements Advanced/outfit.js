function outfit(degrees, time){
    degrees = Number(degrees);
    let dres = "";
    let shoes = "";

    if(time === "Morning"){
        if(degrees>= 10 && degrees <= 18){
            dres = "Sweatshirt";
            shoes = "Sneakers";
        }else if( degrees > 18 && degrees <= 24){
            dres = "Shirt";
            shoes = "Moccasins";
        }else{
            dres = "T-Shirt";
            shoes = "Sandals";
        }
    }
    if(time === "Afternoon"){
        if(degrees>= 10 && degrees <= 18){
            dres = "Shirt";
            shoes = "Moccasins";
        }else if( degrees > 18 && degrees <= 24){
            dres = "T-Shirt";
            shoes = "Sandals";
        }else{
            dres = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    if(time === "Evening"){
        if(degrees>= 10 && degrees <= 18){
            dres = "Shirt";
            shoes = "Moccasins";
        }else if( degrees > 18 && degrees <= 24){
            dres = "Shirt";
            shoes = "Moccasins";
        }else{
            dres = "Shirt";
            shoes = "Moccasins";
        }
    }
    
    console.log(`It's ${degrees} degrees, get your ${dres} and ${shoes}.`);
    
}
outfit("20",
"Evening");