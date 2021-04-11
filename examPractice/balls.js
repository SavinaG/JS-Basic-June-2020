function solve(input)
{
    let balsCount = Number(input[0]);
    let totalPoint = 0;
    let redCollorCount = 0;
    let orangeCollorCount = 0;
    let yellowCollorCount = 0;
    let whiteCollorCount = 0;
    let blackCollorCount = 0;
    let otherCollorsCount = 0;
 
      for (let index = 0; index <= balsCount; index++)
      {
        let command = input[index];
          if(command == "red"){
              totalPoint += 5;
              redCollorCount++;
          }else if(command == "orange"){
              totalPoint += 10;
              orangeCollorCount++;
          }else if( command == "yellow"){
              totalPoint += 15;
              yellowCollorCount++;
          }else if(command == "white"){
              totalPoint += 20;
              whiteCollorCount++;
          }else if(command == "black"){
              totalPoint /= 2;
              blackCollorCount++;
          }else{
              otherCollorsCount++;
          }
      }
 
      console.log(`Total points: ${Math.floor(totalPoint)}`);
      console.log(`Points from red balls: ${redCollorCount}`);
      console.log(`Points from orange balls: ${orangeCollorCount}`);
      console.log(`Points from yellow balls: ${yellowCollorCount}`);
      console.log(`Points from white balls: ${whiteCollorCount}`);
      console.log(`Other colors picked: ${otherCollorsCount - 1}`);
      console.log(`Divides from black balls: ${blackCollorCount}`);
}