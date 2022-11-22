let gameString = "WLWWWLWWLLLWWLL"
let counter = 0
let highest = 0
for (let i=0; i<gameString.length; i++){
    if (gameString[i]=="W"){
        counter++
    }
    if(gameString[i]=="L"){
        if(counter>highest){
        highest = counter
        }
        counter = 0
    }
}
console.log(highest)