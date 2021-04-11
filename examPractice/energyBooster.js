function energyBooster(fruit, size, count){
    count = Number(count);
    let price = 0;
    let discount = 0;
    
    if( size === "small"){
        if( fruit === "Watermelon"){
            price = count * (56 * 2);
        }else if(fruit === "Mango"){
            price = count * (36.66 * 2);
        }else if( fruit === "Pineapple"){
            price = count * (42.10 * 2);
        }else if( fruit === "Raspberry"){
            price = count * (20 * 2);
        }
    }
    if(size === "big"){
        if( fruit === "Watermelon"){
            price = count * (28.70 * 5);
        }else if(fruit === "Mango"){
            price = count * (19.60 * 5);
        }else if( fruit === "Pineapple"){
            price = count * (24.80 * 5);
        }else if( fruit === "Raspberry"){
            price = count * (15.20 * 5);
        }
    }
    if(price >= 400 && price <= 1000){
        discount = price * 0.85;
        console.log(`${(discount).toFixed(2)} lv.`);
        
    }else if( price > 1000){
       discount = price * 0.50;
       console.log(`${(discount).toFixed(2)} lv.`);
       
    }else{
    console.log(`${price.toFixed(2)} lv.`);
    }
    
}
energyBooster("Raspberry",
    "small",
    "50");