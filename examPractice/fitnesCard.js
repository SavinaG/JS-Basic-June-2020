function fitnesCard(money, gender, age, sportType){
    money = Number(money);
    age = Number(age);
    let sportPrice = 0;

    if(gender === "m"){
        if(sportType === "Gym"){
            sportPrice = 42;
        }else if( sportType === "Boxing"){
            sportPrice = 41;
        }else if( sportType === "Yoga"){
            sportPrice = 45;
        }else if( sportType === "Zumba"){
            sportPrice = 34;
        }else if( sportType === "Dances"){
            sportPrice = 51;
        }else if( sportType === "Pilates"){
            sportPrice = 39;
        }
    }
    if(gender === "f"){
        if(sportType === "Gym"){
            sportPrice = 35;
        }else if( sportType === "Boxing"){
            sportPrice = 37;
        }else if( sportType === "Yoga"){
            sportPrice = 42;
        }else if( sportType === "Zumba"){
            sportPrice = 31;
        }else if( sportType === "Dances"){
            sportPrice = 53;
        }else if( sportType === "Pilates"){
            sportPrice = 37;
        }
    }
    if(age <= 19){
        sportPrice *= 0.80;
    }
    if(money >= sportPrice){
        console.log(`You purchased a 1 month pass for ${sportType}.`);
        
    }else{
        console.log(`You don't have enough money! You need $${(sportPrice - money).toFixed(2)} more.`);
        
    }

}
fitnesCard("10", "m", "50", "Pilates");