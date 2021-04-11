function vacBookList(pages, speed, days){
    pages = Number(pages);
    speed = Number(speed);
    days = Number(days);

    let neededTime = pages / speed / days;
    console.log(neededTime);

}
vacBookList("1", "2", "3");