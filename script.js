const damageRange = 0.2;


const playerData = {
  name: "ヒカル",
  hp: 100,
  attack: 5,
  deffence: 2
}

const enemyData = {
  name: "ヤミ",
  hp: 50,
  attack: 4,
  deffence: 2
}

// 関数：テキストの表示
function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

// 関数：ダメージ計算
function damageCalculation(attack, deffence) {
  // ランダムでダメージを計算
  const maxDamage = attack * (1 + damageRange),
        minDamage = attack * (1 - damageRange),
        attackDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
        // Math.random()→0から1未満がランダムに入る
        // Math.floor→小数点切り捨て

  // 敵の防御力も計算した総ダメージ
  const damage = attackDamage - deffence;

  // 防御力が高くてhp回復する現象を防ぐ
  if (damage < 1) {
    return 0
  } else {
    return damage;
  }
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

  // ダメージを関数で計算
  const playerDamage = damageCalculation(playerData["attack"], enemyData["deffence"]),
        enemyDamage = damageCalculation(playerData["attack"], enemyData["deffence"]);

  // hpから引いていく
  // enemyData["hp"] = enemyData["hp"] - 10;↓
  enemyData["hp"] -= playerDamage;
  // playerData["hp"] = playerData["hp"] - 10;↓
  playerData["hp"] -= enemyDamage;

  // ダメージ受けた後のhp表示
  insertText("currentEnemyHp", enemyData["hp"]);
  insertText("currentPlayerHp", playerData["hp"]);

  // 勝利条件
  if (enemyData["hp"] <= 0) {
    alert("勝利！");
    endGame = true;

    enemyData["hp"] = 0;
    insertText("currentEnemyHp", enemyData["hp"]);

  } else if(playerData["hp"] <= 0){
    alert("敗北…");
    endGame = true;

    playerData["hp"] = 0;
    insertText("currentPlayerHp", playerData["hp"]);
  }

  // endGame = true;（ゲーム終了）ならば
  if (endGame) {
    // id="attack"をクリックしたら、新しいclass名を付ける
    this.classList.add("deactive");
  }
});
