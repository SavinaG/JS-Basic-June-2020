function godzilla(budget, count, price){
    budget = Number(budget);
    count = Number(count);
    price = Number(price);
    let decor = budget * 0.1;
    let wearPrice = count * price;
    if(count > 150){
        wearPrice = wearPrice * 0.9;
    }
    let expences = decor + wearPrice;
    if(expences > budget){
        console.log("Not enough money!");
        console.log("Wingard needs " + Math.abs(budget - expences).toFixed(2) + " leva more.");        
    }else{
        console.log("Action!");
        console.log("Wingard starts filming with " + (budget - expences).toFixed(2) + " leva left.");      
    }
}