function personelTitles(arg1, arg2){
    let yers = Number(arg1);
    let gender = (arg2);
    if(yers >=16 && gender === "m"){
        console.log("Mr.");
    }else if(yers < 16 && gender === "m") {
        console.log("Master");  
    }
    if(yers >=16 && gender === "f"){
        console.log("Ms.");
    }else if(yers <16 && gender === "f") {
        console.log("Miss");
        
    }
}
personelTitles("13.5",

"m")