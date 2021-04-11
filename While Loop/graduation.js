function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let level = 1;
    let score = 0;
    let error = 0;

    while(level <=12){
        let grade = Number(input[index]);
        index++
        if(grade >= 4.00){
            score += grade;
            level++
        }else{
            error +=1;
            if(error > 1){
                console.log(`${name} has been excluded at ${level} grade`);
                break;
            }
        }
        if(level > 12){
            let avargrade = score / 12;
            console.log(`${name} graduated. Average grade: ${avargrade.toFixed(2)}`);
            
        }
    }

}
graduation();