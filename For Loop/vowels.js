function vowels(arg){
    let word = (arg);
    let sum=0

    for (let i = 0; i < word.length; i++){
        let letter = word.charAt(i);
        switch(letter){
        case "a": sum += 1;break
        case "e": sum +=2;break
        case "i": sum += 3;break
        case "o": sum += 4;break
        case "u": sum += 5;break
        }
    }
    console.log(sum)
}
vowels("bamboo")