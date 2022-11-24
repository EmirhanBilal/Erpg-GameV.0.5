let name_character;
let specCharacter;
let slimeSword;
let totalCoin;
let addCoin;
function send_name() {
    name_character = sessionStorage.setItem("name", document.getElementById('character-name').innerHTML);
    sessionStorage.setItem("levelName", document.getElementById('level').innerHTML);
}

function paste_name() {
    document.getElementById('champion-name').innerHTML = sessionStorage.getItem("name");
    document.getElementById('area-level').innerHTML = sessionStorage.getItem("levelName");
}

function paste_town_name() {
document.getElementById('character-name').innerHTML = sessionStorage.getItem("nameback");
document.getElementById('player').innerHTML ="Name: " + sessionStorage.getItem("nameback");

if (sessionStorage.getItem("sword") != null && sessionStorage.getItem("sword") != "null") {
    // for (let i= 1; document.getElementById(`item${i}`).getAttribute("src") == "";  i++) {

    //    if (document.getElementById(`item${i}`).getAttribute("src") == "") {
    //     document.getElementById(`item${i}`).src = sessionStorage.getItem("sword");
    //     document.getElementById(`item${i}`).style.visibility = "visible"
    //     i -= 1
    //    }
    // }
    document.getElementById(`item1`).src = sessionStorage.getItem("sword");
    document.getElementById(`item1`).style.visibility = "visible"
}
else{
    item1.style.visibility = "hidden"
}
totalCoin = sessionStorage.getItem("totalCoin")
console.log(sessionStorage.getItem("totalCoin"))
document.getElementById('coin').innerHTML = totalCoin;
}

function character_spec() {
    if ( document.getElementById('spec-name').innerHTML === "WARRIOR") {
        sessionStorage.setItem("specCharacter", "warrior")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    if ( document.getElementById('spec-name').innerHTML === "ROGUE") {
        specCharacter = sessionStorage.setItem("specCharacter", "rogue")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    if ( document.getElementById('spec-name').innerHTML === "MAGE") {
        specCharacter = sessionStorage.setItem("specCharacter", "mage")
        specCharacter = sessionStorage.getItem("specCharacter")
    }
    sessionStorage.setItem("totalCoin",0)
    sessionStorage.setItem("sword",null)
    sessionStorage.setItem("forNextLevel",null)
}
function load_for_spec(){
    if (sessionStorage.getItem("specCharacter") === "warrior") {
        document.getElementById('championİmage').src = "Photos/medival-knight-png-5a3a8e26810fe5.8281968015137869185287-removebg-preview (4).png"
        document.getElementById('small-champion-image').src = "Photos/small-img/warrior-small-img.png"
        document.getElementById('flee').href = "warrior-town.html"
        document.getElementById('back-after-victory').action= "warrior-town.html"
    }
    if (sessionStorage.getItem("specCharacter") === "rogue") {
        document.getElementById('championİmage').src = "Photos/266-2663387_rogue-final-ronin-rpg-class.png"
        document.getElementById('small-champion-image').src = "Photos/small-img/small-rogue.png"
        document.getElementById('flee').href = "rogue-town.html"
        document.getElementById('back-after-victory').action= "rogue-town.html"
    }
    if (sessionStorage.getItem("specCharacter") === "mage") {
        document.getElementById('championİmage').src = "Photos/png-transparent-drakensang-online-drakensang-the-dark-eye-mu-online-monster-hunter-freedom-browser-game-mage-game-fictional-character-quest-thumbnail-removebg-preview.png"
        document.getElementById('small-champion-image').src = "Photos/small-img/small-mage.png"
        document.getElementById('flee').href = "mage-town.html"
        document.getElementById('back-after-victory').action= "mage-town.html"
    }
}
function item_pickup() {
    const itemSelect = document.getElementById("itemImage").getAttribute("src");

    if (itemSelect != null){
        sessionStorage.setItem("sword",itemSelect)
    }
    
    if (sessionStorage.getItem("totalCoin") === null) {
        sessionStorage.setItem("totalCoin",0)
    }
    totalCoin = document.getElementById('coinLoot').innerHTML - "";
    totalCoin += sessionStorage.getItem("totalCoin") - "";
    sessionStorage.setItem("totalCoin",totalCoin)
}
function reset_coins() {
    sessionStorage.setItem("totalCoin",0)
    sessionStorage.setItem("sword",null)
    sessionStorage.setItem("forNextLevel",null)
}