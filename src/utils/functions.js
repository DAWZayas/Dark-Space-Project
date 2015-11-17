function alive(array){
  let result = false;
  for (let i = 0;i < array.length;i++){
    if (array[i].hull > 0){
      result = true;
    }
  }
  return result;
}

function calculateDamage(Damage){
  let quantityDamage = 0;
  for (let i = 0; i < Damage; i++){
    switch (Math.random(6)){
      case 4:
        quantityDamage = quantityDamage + 1;
        break;
      case 5:
        quantityDamage = quantityDamage + 1;
        break;
      case 6:
        quantityDamage = quantityDamage + 2;
        break;
      default:
        quantityDamage = quantityDamage;
        break;
    }
  return quantityDamage;
  }
}

function calculateDefense(Agility){
  let quantityDefense = 0;
  for (let i = 0; i < Agility; i++){
    switch (Math.random(6)){
      case 4:
        quantityDefense = quantityDefense + 1;
        break;
      case 5:
        quantityDefense = quantityDefense + 1;
        break;
      case 6:
        quantityDefense = quantityDefense + 2;
        break;
      default:
        quantityDefense = quantityDefense;
        break;
    }
  return quantityDefense;
  }
}

export default function battle(arrayPlayer, arrayEnemy){
  let i = 0;
  let objective;
  let objectiveAlive;
  let totalDamage;
  let totalDefense;
  let trueDamage;
  let playerLength = arrayPlayer.length;
  let enemyLength = arrayEnemy.length;
  while (i < 10){
    if (i < playerLength){
      if (alive(arrayPlayer) && alive(arrayEnemy)){
        if (arrayPlayer[i].hull > 0){
          objectiveAlive = false;
          while (objectiveAlive !== true){
          objective = ((Math.random() *  enemyLength)  + 1);
            if (arrayEnemy[objective].hull > 0){
              objectiveAlive = true;
            }
          }
          totalDamage = calculateDamage(arrayPlayer[i].damage);
          totalDefense = calculateDefense(arrayEnemy[objective].agility);
          trueDamage = totalDamage - totalDefense;
          arrayEnemy[objective].hull = arrayEnemy[objective].hull - trueDamage;
        }
      }
    }
    if (i < enemyLength){
      if (alive(arrayPlayer) && alive(arrayEnemy)){
        if (arrayEnemy[i].hull > 0){
          objectiveAlive = false;
          while (objectiveAlive !== true){
          objective = ((Math.random() *  playerLength)  + 1);
            if (arrayPlayer[objective].hull > 0){
              objectiveAlive = true;
            }
          }
          totalDamage = calculateDamage(arrayEnemy[i].damage);
          totalDefense = calculateDefense(arrayPlayer[objective].agility);
          trueDamage = totalDamage - totalDefense;
          arrayPlayer[objective].hull = arrayPlayer[objective].hull - trueDamage;
        }
      }
    }
    i++;
  }

  let array;
  array[0] = arrayPlayer;
  array[1] = arrayEnemy;
  return array;
}

