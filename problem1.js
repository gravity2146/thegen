const fs = require("fs");

let data = JSON.parse(fs.readFileSync("data1.json", "utf-8"));
var players = data
var array = [];

for (var key in players) {
    array.push(players[key]);

}

array.sort(function(a, b){
    return b.Score - a.Score;
});

var rank = 1;
for (var i = 0; i < array.length; i++) {
  
  if (i > 0 && array[i].Score < array[i - 1].Score) {
    rank++;
  }
  if(i>0 && array[i].Score == array[i-1].Score){
      console.log("hi")
      if(array[i].CompletionTime < array[i-1].CompletionTime){
          rank++;
      }

  }
    array[i].rank = rank;
}
console.log(array)

