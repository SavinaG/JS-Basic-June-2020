function skiTrip(days, kind, grade){
    days = Number(days);
    let price = 0;
    if(kind==="room for one person"){
        price = (days -1) * 18;
    }else if(kind==="apartment"){
        price = (days - 1) * 25;
    }else if(kind==="president apartment"){
        price =(days - 1) * 35;
    }if(kind==="apartment" && days < 10){
        price = price * 0.70;
    }else if(kind==="apartment" && days>= 10 && days <15){
        price = price * 0.65;
    }else if(kind==="apartment" && days>= 15){
        price = price * 0.50;
    }if(kind==="president apartment" && days < 10){
        price = price * 0.90;
    }else if(kind==="president apartment" && days >= 10 && days < 15){
        price = price * 0.85;
    }else if(kind==="president apartment" && days>= 15){
        price = price * 0.80;
    }if(grade==="negative"){
        price = price * 0.90;
    }else if(grade==="positive"){
        price = price *1.25
    }

    console.log((price).toFixed(2));
    
}
skiTrip("2",

"apartment",

"positive")