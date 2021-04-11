function fruitShop2(fruit, day, quantity){
    quantity = Number(quantity);
    let totalPrice =0;
    if(day=="Monday" || day=="Tuesday" || day=="Wednesday" || day=="Thursday" || day=="Friday"){
        if(fruit=="banana"){
            totalPrice = quantity * 2.50;
        }else if(fruit=="apple"){
            totalPrice = quantity * 1.20;
        }else if(fruit=="orange"){
            totalPrice = quantity * 0.85;
        }else if(fruit=="grapefruit"){
            totalPrice = quantity * 1.45;
        }else if(fruit=="kiwi"){
            totalPrice = quantity * 2.70;
        }else if(fruit=="pineapple"){
            totalPrice = quantity * 5.50;
        }else if(fruit=="grapes"){
            totalPrice = quantity * 3.85;
        }
    }if(day=="Saturday" || day=="Sunday"){
        if(fruit=="banana"){
            totalPrice = quantity * 2.70;
        }else if(fruit=="apple"){
            totalPrice = quantity * 1.25;
        }else if(fruit=="orange"){
            totalPrice = quantity * 0.90;
        }else if(fruit=="grapefruit"){
            totalPrice = quantity * 1.60;
        }else if(fruit=="kiwi"){
            totalPrice = quantity * 3.00;
        }else if(fruit=="pineapple"){
            totalPrice = quantity * 5.60;
        }else if(fruit=="grapes"){
            totalPrice = quantity * 4.20;
        }
    }if(day !== "Monday" && day !== "Tuesday" && day !== "Wednesday" && day !== "Thursday" && day !== "Friday" && day !== "Saturday" && day !== "Sunday" ||
    fruit !== "banana" && fruit !== "apple" && fruit !== "orange" && fruit !== "grapefruit" && fruit !== "kiwi" && fruit !== "pineapple" && fruit !== "grapes"){
        console.log("error");
    }else{
        console.log((totalPrice).toFixed(2));
    }      
    }
    fruitShop2("grapefruit",

    "Monda",
    
    "1")