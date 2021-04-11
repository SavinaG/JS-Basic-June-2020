function suitcaseLoad(input){
    let freeSpace = Number(input[0]);
    let suitcaseSise = 0;
    let suitcaseCount = 0;
    let totalSuitcase = 0;
    let index = 1;
    let command = input[index];

    while(command !== "End"){
        suitcaseSise = Number(command);
        index++
        totalSuitcase += suitcaseSise;
        if((suitcaseCount + 1) % 3 === 0){
            suitcaseSise *= 1.10;
        }  
        if(freeSpace < suitcaseSise){
            console.log("No more space!");
            console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
            break;
        }
        freeSpace -= suitcaseSise;
        command = input[index];
        suitcaseCount++;
        if(command === "End"){
            console.log("Congratulations! All suitcases are loaded!");
            console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
        }
    }
}
suitcaseLoad(["700.5", "180", "340.6", "126", "220"]);