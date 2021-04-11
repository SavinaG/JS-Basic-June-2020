function metricConverter(arg1,arg2,arg3){
    let ammount=Number(arg1)
    let metricCnt=arg2
    let microMetric=arg3
    let result=ammount
    if(metricCnt=="m"){
        if(microMetric=="mm"){
            result=ammount*1000
        }else if(microMetric=="cm"){
            result=ammount*100
        }
    }else if(metricCnt=="mm"){
            if(microMetric=="cm"){
                result=ammount/10
            }else if(microMetric=="m"){
                result=ammount/1000
            }
        }else if(metricCnt=="cm"){
                if(microMetric=="m"){
                    result=ammount/100
                }else if(microMetric=="mm"){
                    result=ammount*10
                }
            }   
    console.log(result.toFixed(3))
}   
metricConverter("12","mm","m")