function wordcount(arg){
    let wordcnt = 0 ;
    
    for (let i = 0; i < arg.length; i++){
         let spaces = arg[i];
         if (spaces === " "){
             wordcnt++
         }
    }
    wordcnt++;
    if (wordcnt <= 10){
        console.log ("The message was send successfully!");
    }
    else {
        console.log (`The message is too long to be send! Has ${wordcnt} words.`)
    }
}
wordcount("This message has exactly eleven words. One more as it's allowed!")