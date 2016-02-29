function aliveArray(array){
  let result = false;
  array.map( (ships, index) => (array[index].hull > 0) ? result = true : null );
  return result;
}

function alive(ship){
  let result;
  (ship.hull > 0) ? result = true : result = false;
  return result;
}

function selectTarget(ship){
  let target = Math.floor(Math.random() * ship.length);
  while (!alive(ship[target])){
    target = Math.floor(Math.random() * ship.length);
  }
  return target;
}

function calculateDamage(shipDamage){
  let totalDamage = 0;
  for (let x = 0; x < shipDamage; x++){
    switch (Math.floor(Math.random() * 6 + 1)){
      case 4:
        totalDamage = totalDamage + 1;
        break;
      case 5:
        totalDamage = totalDamage + 1;
        break;
      case 6:
        totalDamage = totalDamage + 2;
        break;
      default:
        totalDamage = totalDamage;
        break;
    }
  }
  return totalDamage;
}

function calculateDefense(shipAgility){
  let totalDefense = 0;
  for (let d = 0; d < shipAgility; d++){
    switch (Math.floor(Math.random() * 6 + 1)){
      case 5:
        totalDefense = totalDefense + 1;
        break;
      case 6:
        totalDefense = totalDefense + 1;
        break;
      default:
        totalDefense = totalDefense;
        break;
    }
  }
  return totalDefense;
}

function newArray(arrayDefender, defender, trueDamage){
  for (let i = 0;i < trueDamage;i++){
    if (arrayDefender[defender].shields > 0){
      arrayDefender[defender].shields = arrayDefender[defender].shields - 1;
    }else {
      arrayDefender[defender].hull = arrayDefender[defender].hull - 1;
    }
  }
  return arrayDefender;
}

function attack(arrayAttacker, arrayDefender, attacker, defender){
  let Damage = calculateDamage(arrayAttacker[attacker].damage);
  let Defense = calculateDefense(arrayDefender[defender].agility);
  let trueDamage = Damage - Defense;
  if (trueDamage > 0){
    return newArray(arrayDefender, defender, trueDamage);
  }else {
    return arrayDefender;
  }
}

export default function battle(arrayPlayer, arrayEnemy, onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight){
  let attacker, defender;
  for (let i = 0; i < 10; i++){
    if (aliveArray(arrayPlayer) && aliveArray(arrayEnemy) ){
      attacker = selectTarget(arrayPlayer);
      defender = selectTarget(arrayEnemy);
      arrayEnemy = attack(arrayPlayer, arrayEnemy, attacker, defender);
    }
    if (aliveArray(arrayPlayer) && aliveArray(arrayEnemy) ){
      attacker = selectTarget(arrayEnemy);
      defender = selectTarget(arrayPlayer);
      arrayPlayer = attack(arrayEnemy, arrayPlayer, attacker, defender);
    }
  }
  onChangePlayerSpaceFleetAfterFight(arrayPlayer);
  onChangeEnemySpaceFleetAfterFight(arrayEnemy);
}
