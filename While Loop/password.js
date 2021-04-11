function password(input){
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let curentPassowrd = input[index];
    index++;

    while(password !== curentPassowrd){
        curentPassowrd = input[index];
        index++
    }
    console.log(`Welcome ${username}!`);
    
}
password(["Nakov",

"1234",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop"])