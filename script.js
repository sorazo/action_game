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

document.getElementById("attack").addEventListener("click", function () {
  enemyData["hp"] = enemyData["hp"] - 10;
  insertText("currentEnemyHp", enemyData["hp"]);
});
