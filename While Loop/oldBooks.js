function oldBoox(arr){
    let book = arr[0];
    let curentBook = arr[1];
    let index = 1;
    let isFount = false;
    let count = 0;

    while(curentBook !== "No More Books"){
        if(curentBook === book){
            isFount = true;
            console.log(`You checked ${index - 1} books and found it.`);
            break;   
        }
        count++;
        index++
        curentBook = arr[index];
    }
    if(!isFount){
        console.log('The book you search is not here!');
        console.log(`You checked ${count} books.`);
        
    }

}
oldBoox(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])