// slime --> 4 , skeleton --> 3 ,
function random_select() {
    let randomMonster = Math.floor(Math.random() * 10);
    let randomMap = Math.floor(Math.random() * 4);
    let monster
    let map
if (randomMonster <= 3 ) {
    // monster --> slime
    monster = "slime"
}
else if(randomMonster <= 6 ){
    //monster --> Skeleton
    monster = "skeleton"
}
else if(randomMonster <= 8 ){
    //monster --> Vampire
    monster = "vampire"
}
else if(randomMonster <= 9 ){
    //monster --> Dragon
    monster = "dragon"
}
sessionStorage.setItem("monsterName",monster)

if (randomMap === 0) {
//     // map --> Forest
    map = "forest"
}
else if(randomMap === 1){
//     // map --> ice-cave
    map = "ice-cave"
}
else if(randomMap === 2){
    map = "space"
}
else if(randomMap === 3){
    map = "empty"
}
sessionStorage.setItem("mapName", map)
}

