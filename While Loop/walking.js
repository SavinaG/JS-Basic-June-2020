function walking(arr){

    const goal = 10000;
    let steps = 0;
    let index = 0;

    while(steps < goal){
        let curent = arr[index];
        if(curent == "Going home"){
            steps += Number(arr[index + 1]);
            break;
        }
        steps += Number(curent);
        index++
    }
    if(steps >= goal){
        console.log("Goal reached! Good job!");
        console.log(`${steps - goal} steps over the goal!`);
        
    }else{
        console.log(`${goal - steps} more steps to reach goal.`);
        
    }

}
walking(["1000",

"1500",

"2000",

"6500"]);