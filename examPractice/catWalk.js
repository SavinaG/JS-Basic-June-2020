function catWalk(walkMin, walkCount, calories){
    walkMin = Number(walkMin);
    walkCount = Number(walkCount);
    calories = Number(calories);
    let burnCal = 0;

    burnCal = (walkMin * walkCount) * 5;

    if(burnCal >= calories / 2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCal}.`);
        
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCal}.`);
        
    }

}
catWalk("15", "2", "500")