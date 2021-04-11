function comission(arg1,arg2){
    let town=arg1
    let tradeVol=Number(arg2)
    let comissionRate=0
    if (town==="Sofia"){
        if (tradeVol>=0 && tradeVol<=500){
            comissionRate=tradeVol*0.05
        }else if (tradeVol>500 && tradeVol<=1000){
            comissionRate=tradeVol*0.07
        }else if (tradeVol>1000 && tradeVol<=10000){
            comissionRate=tradeVol*0.08
        }else if (tradeVol>10000){
            comissionRate=tradeVol*0.12
        }
    }if (town==="Varna"){
        if (tradeVol>=0 && tradeVol<=500){
            comissionRate=tradeVol*0.045
        }else if (tradeVol>500 && tradeVol<=1000){
            comissionRate=tradeVol*0.075
        }else if (tradeVol>1000 && tradeVol<=10000){
            comissionRate=tradeVol*0.10
        }else if (tradeVol>10000){
            comissionRate=tradeVol*0.13
        }
    }if (town==="Plovdiv"){
        if (tradeVol>=0 && tradeVol<=500){
            comissionRate=tradeVol*0.055
        }else if (tradeVol>500 && tradeVol<=1000){
            comissionRate=tradeVol*0.08
        }else if (tradeVol>1000 && tradeVol<=10000){
            comissionRate=tradeVol*0.12
        }else if (tradeVol>10000){
            comissionRate=tradeVol*0.145
        }
    }if (tradeVol<0 || town!=="Sofia" && town!=="Varna" && town!=="Plovdiv"){
        console.log("error")
    }else {
        console.log(comissionRate.toFixed(2))
    }
}