function operationsNumbers(n1, n2, operation){
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;
    let evenOdd = "";

    if( operation === "+"){
        result = n1 + n2;
    }else if( operation === "-"){
        result = n1 - n2;
    }else if( operation === "*"){
        result = n1 * n2;
    }
    if( result % 2 === 0){
        evenOdd = "even";
    }else{
        evenOdd = "odd";
    }
    if(operation === "+" || operation === "-" || operation ==="*"){
        console.log(`${n1} ${operation} ${n2} = ${result} - ${evenOdd}`);   
    }
    if( operation === "/" && n2 !== 0){
        result = n1 / n2;
    console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
    if( operation === "%" && n2 !== 0){
        result = n1 % n2;
    console.log(`${n1} % ${n2} = ${result}`);
    }
    else if( n2 === 0 && operation === "/" || operation === "%"){
        console.log(`Cannot divide ${n1} by zero`);
    }    
    
    
}
operationsNumbers("10", "3", "%");