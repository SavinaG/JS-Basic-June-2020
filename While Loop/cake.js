function cake (input){
    let index = 2;
    let piece = Number(input[index]);
    let l = Number(input[0]);
    let w = Number(input[1]);
    let size = l * w;
    let cakeLeft= 0;
    sum = 0;
    isNotEnought = false;
   
    while ( piece !== "STOP") {
        currentPiece = input[index];
        cakeLeft += Number(currentPiece);
        sum = Math.abs( cakeLeft - size);
        isNotEnought = true;
        if (cakeLeft > size) {
            console.log(`No more cake left! You need ${sum} pieces more.`);
            break;
        }
        index++;
        piece = (input[index]);
    }
 
    if(isNotEnought) {
        if ( cakeLeft < size)
        console.log(`${sum} pieces are left.`);
       
    }
 
}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"]);