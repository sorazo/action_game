const playerData = {
  name: "ヒカル",
  hp: 100
}

const enemyData = {
  name: "ヤミ",
  hp: 50
}


function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

// 主人公
insertText("playerName", playerData["name"]);
insertText("currentPlayerHp", playerData["hp"]);
insertText("maxPlayerHp", playerData["hp"]);

// 敵
insertText("enemyName", enemyData["name"]);
insertText("currentEnemyHp", enemyData["hp"]);
insertText("maxEnemyHp", enemyData["hp"]);


// id="attack"をクリックしたらイベント発生
document.getElementById("attack").addEventListener("click", function () {
  let endGame = false;

  // enemyData["hp"] = enemyData["hp"] - 10;↓
  enemyData["hp"] -= 10;

  // playerData["hp"] = playerData["hp"] - 10;↓
  playerData["hp"] -= 10;

  insertText("currentEnemyHp", enemyData["hp"]);
  insertText("currentPlayerHp", playerData["hp"]);

  // 勝利条件
  if (enemyData["hp"] <= 0) {
    alert("勝利！");
    endGame = true;

  } else if(playerData["hp"] <= 0){
    alert("敗北…");
    endGame = true;

  }

  // endGame = true;ならば
  if (endGame) {
    // id="attack"をクリックしたら、新しいclass名を付ける
    this.classList.add("deactive");
  }
});
