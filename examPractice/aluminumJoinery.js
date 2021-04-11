function solve(windowCount, windowType, deliveryType){
    windowCount =Number(windowCount);

    let totalPrice =0;
    let windowPrice =0;

    if(windowType === "90X130"){
        windowPrice = 110;
        if(windowCount >= 30 && windowCount < 60){
            windowPrice *= 0.95;
        }else if(windowCount >= 60){
            windowPrice *= 0.92;
        }
    }else if(windowType === "100X150"){
        windowPrice = 140;
        if(windowCount >= 40 && windowCount < 80){
            windowPrice *= 0.94;
        }else if(windowCount >= 80){
            windowPrice *= 0.90;
        }
    }else if(windowType === "130X180"){
        windowPrice = 190;
        if(windowCount >= 20 && windowCount < 50){
            windowPrice *= 0.93;
        }else if(windowCount >= 50){
            windowPrice *= 0.88;
        }
    }else if(windowType === "200X300"){
        windowPrice = 250;
        if(windowCount >= 25 && windowCount < 50){
            windowPrice *= 0.91;
        }else if(windowCount >= 50){
            windowPrice *= 0.86;
        }
    }
    totalPrice = windowPrice * windowCount;
    if(deliveryType === "With delivery"){
        totalPrice += 60;
    }
    if(windowCount > 99){
        totalPrice *= 0.96;
    }
    if(windowCount < 10){
        console.log("Invalid order");
        
    }else{
        console.log(`${totalPrice.toFixed(2)} BGN`);
        
    }

}
solve("2", "100X150", "With delivery");