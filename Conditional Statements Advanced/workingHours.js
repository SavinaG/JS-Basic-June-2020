function workingHours(arg1,arg2){
    let hour=Number(arg1)
    let day=arg2
    if(hour>=10 && hour<=18){
        switch(day){
            case "Monday":
                case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                        case "Friday":
                            case "Saturday":
                                console.log("open");break;
                                case "Sunday":
                                    default:
                                        console.log("closed");break;
        }
    }else {
        console.log("closed")
    }
}