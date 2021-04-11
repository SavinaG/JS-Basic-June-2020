function divided(arg1, arg2){
    let n1=Number(arg1);
    let n2=Number(arg2);
    let sum = 0;
    for(let i = n1; i <= n2; i++){
        if (i % 9 == 0){
            sum += i
        }
    }
    console.log(`The sum: ${sum}`);

    for(let i = n1; i <= n2; i++){
        if (i % 9 == 0){
            console.log(i);
        }
    }
}
divided("100", "200")