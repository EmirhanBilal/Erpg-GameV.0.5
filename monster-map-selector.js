      // ----------MONSTER----------
      if (monsterName === "slime") {
        // monster --> slime
        monsterImage.src = "Photos/monster-images/monster-slime.png";
        itemImage.src = "Photos/items/slime-sword.png";
        monsterTypeDamage = 50 + 25 * level;
        monsterExp = 60 + 30 * level * 2;
      } else if (monsterName === "skeleton") {
        //monster --> Skeleton
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-skeleton-image.png";
        monsterInfoName.innerHTML = "Skeleton";
        monsterImage.src = "Photos/monster-images/skeleton-image.png";
        itemImage.src = "Photos/items/skeleton-sword.png";
        monsterImage.style.height = "320px";
        monsterImage.style.width = "250px";
        monsterTypeDamage = 55 + 28 * level * 2;
        monsterExp = 70 + 35 * level * 2;
      } else if (monsterName === "vampire") {
        // monster --> Vampire
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-vampire-image.png";
        monsterInfoName.innerHTML = "Vampire";
        monsterImage.src = "Photos/monster-images/vampire-image.png";
        itemImage.src = "Photos/items/vampire-sword.png";
        monsterImage.style.height = "420px";
        monsterImage.style.width = "320px";
        monsterImageMargin.style.marginRight = "20px";
        monsterTypeDamage = 65 + 33 * level * 2;
        monsterExp = 85 + 43 * level * 2;
      } else if (monsterName === "dragon") {
        // monster --> Dragon
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-dragon-image.png";
        monsterInfoName.innerHTML = "Dragon";
        monsterImage.src = "Photos/monster-images/dragon-image.png";
        itemImage.src = "Photos/items/dragon-sword.png";
        monsterImage.style.height = "420px";
        monsterImage.style.width = "400px";
        attackContainer.style.width = "260px";
        championDamageDisplay.style.left = "680px";
        championDamageDisplay.style.top = "80px";
        monsterImageMargin.style.marginRight = "0";
        monsterTypeDamage = 75 + 38 * level * 2;
        monsterExp = 100 + 50 * level * 2;
      }
      // ----------MAPS----------
      if (mapName === "forest") {
      containerArea.style.backgroundImage = `url("Photos/area-backgrounds/forest-background.jpg")`;
      } else if (mapName === "ice-cave") {
      containerArea.style.backgroundImage = `url("Photos/area-backgrounds/ice-cave-background.jpg")`;
      } else if (mapName === "space") {
              containerArea.style.backgroundImage = `url("Photos/area-backgrounds/space-background.jpg")`;
      } else if (mapName === "empty") {
      containerArea.style.backgroundImage = `url("Photos/area-backgrounds/empty-background.png")`;
      }