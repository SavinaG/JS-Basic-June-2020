function greenYard(area){
    let finalPrice = area * 7.61;
    let discount = finalPrice * 0.18;

    console.log("The final price is: " + (finalPrice - discount) + " lv.");
    console.log("the discount is: " + discount + " lv.");
} 
greenYard("4");