function smallShop(arg1, arg2, arg3){
    let product = arg1;
    let town = arg2;
    let quntity = Number(arg3);
    let totalPrice = 0;
    switch(town){
        case("Sofia"):
        switch(product){
            case "coffee": totalPrice = quntity * 0.50; break;
            case "water": totalPrice = quntity * 0.80; break;
            case "beer": totalPrice = quntity * 1.20; break;
            case "sweets": totalPrice = quntity * 1.45; break;
            case "peanuts": totalPrice = quntity * 1.60; break;
        }
        break;
        case("Plovdiv"):
        switch(product){
            case "coffee": totalPrice = quntity * 0.40; break;
            case "water": totalPrice = quntity * 0.70; break;
            case "beer": totalPrice = quntity * 1.15; break;
            case "sweets": totalPrice = quntity * 1.30; break;
            case "peanuts": totalPrice = quntity * 1.50; break;
        }
        break;
        case ("Varna"):
            switch(product){
                case "coffee": totalPrice = quntity * 0.45; break;
                case "water": totalPrice = quntity * 0.70; break;
                case "beer": totalPrice = quntity * 1.10; break;
                case "sweets": totalPrice = quntity * 1.35; break;
                case "peanuts": totalPrice = quntity * 1.55; break;
            }
            break;
    }
    console.log(totalPrice);
    
}
smallShop("coffee",

"Varna",

"2")