function hotelRoom(mounth, nights){
    nights = Number(nights);
    let studio = 0;
    let apart= 0;

    if(mounth === "May" || mounth === "October"){
        studio = nights * 50;
        apart = nights * 65;
        if(nights > 7 && nights <= 14){
            studio = studio * 0.95;
        }else if(nights > 14){
            studio = studio * 0.70;
            apart = apart * 0.90;
        }
    }
    if(mounth === "June" || mounth === "September"){
        studio = nights * 75.20;
        apart = nights * 68.70;
        if(nights > 7 && nights <= 14){
            studio = studio * 0.80;
            apart = apart * 0.90;
        }
    }
    if(mounth === "July" || mounth === "August"){
        studio = nights * 76;
        apart = nights * 77;
        if(nights > 14){
            apart = apart * 0.90;
        }
    }

    console.log(`Apartment: ${apart.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom("May", "15");