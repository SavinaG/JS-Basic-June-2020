function workWeek(day){
    let weekDay = day;
    switch(weekDay){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday" : console.log("Working day"); break;
        case "Saturday":    
        case "Sunday": console.log("Weekend");break;
        default: console.log("Error");
             
    }
}
workWeek("Simda")






