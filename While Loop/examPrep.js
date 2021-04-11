function examPrep(arr){;
    let countPoorGrade = Number(arr[0]);
    let curentProblem = arr[1];
    let poorGrades = 0;
    let curentGrade = Number(arr[2]);
    let index = 1
    let sum = 0;
    let problemCount = 0;

    while(curentProblem !== "Enough"){
        sum += curentGrade;
        problemCount++
        if(curentGrade <= 4){
            poorGrades++
        }    
        if(poorGrades == countPoorGrade){
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }
        index+=2;
        curentProblem = arr[index];
        curentGrade = Number(arr[index + 1]);

    }
    let avr = sum / problemCount;
    if(poorGrades !== countPoorGrade){
        console.log((`Average score: ${avr.toFixed(2)}`));
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${arr[index - 2]}`);
        
    }
}
examPrep(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])