function solve(input){
    
        let players = new Map();
     
        for (let i = 0; i < input.length; i+=2)
        {
          let v = input[i];
          let s = input[i + 1];
          if (v !== "END")
          {
            players[v] = Number(s);
          }
        }
     
        var bestPlayer = "";
        var bestScore = 0;
        for (var p in players)
        {
          let score = players[p];
          let player = p;
     
          if (score > bestScore)
          {
            bestScore = score;
            bestPlayer = player;
          }
        }
     
          console.log(bestPlayer + " is the best player!");
          if (bestScore >= 3)
          {
            console.log("He has scored " + bestScore + " goals and made a hat-trick !!!");
          } else
          {
            console.log("He has scored " + bestScore + " goals.");
          }
    }

solve();