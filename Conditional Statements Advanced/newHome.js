function newHome(flower, count, budget){
    count = Number(count);
    budget = Number(budget);
    let price = 0;

    if( flower === "Roses"){
        price = count * 5;
        if( count > 80){
            price = price * 0.90;
        }
    }else if(flower === "Dahlias"){
        price = count * 3.8;
        if( count > 90){
            price *= 0.85;
        }
    }else if(flower === "Tulips"){
        price = count * 2.8;
        if( count > 80){
            price *= 0.85;
        }
    }else if(flower === "Narcissus"){
        price = count * 3;
        if( count < 120){
            price *= 1.15;
        }
    }else if(flower === "Gladiolus"){
        price = count * 2.5;
        if(count < 80){
            price *= 1.20;
        }
    }

    let diff = budget - price;
    if(budget>= price){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(2)} leva left.`);
        
    } else{
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
        
    }
}
newHome("Rosses", "55", "250");