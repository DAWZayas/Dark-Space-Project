function alive(array){
  let result = false;
  for (let j = 0;j < array.length;j++){
    if (array[j].hull > 0){
      result = true;
    }
  }
  return result;
}

function calculateDamage(Damage){
  let quantityDamage = 0;
  for (let x = 0; x < Damage; x++){
    switch (Math.floor(Math.random() * 6 + 1)){
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
  }
  return quantityDamage;
}

function calculateDefense(Agility){
  let quantityDefense = 0;
  for (let d = 0; d < Agility; d++){
    switch (Math.floor(Math.random() * 6 + 1)){
      case 5:
        quantityDefense = quantityDefense + 1;
        break;
      case 6:
        quantityDefense = quantityDefense + 1;
        break;
      default:
        quantityDefense = quantityDefense;
        break;
    }
  }
  return quantityDefense;
}

export default function battle(arrayPlayer, arrayEnemy){
  debugger;
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
      if (alive(arrayPlayer) === true && alive(arrayEnemy) === true){
        if (arrayPlayer[i].hull > 0){
          objectiveAlive = false;
          while (objectiveAlive !== true){
          objective = Math.floor(Math.random() * enemyLength);
            if (arrayEnemy[objective].hull > 0){
              objectiveAlive = true;
            }
          }
          totalDamage = calculateDamage(arrayPlayer[i].damage);
          totalDefense = calculateDefense(arrayEnemy[objective].agility);
          trueDamage = totalDamage - totalDefense;
          if (trueDamage > 0){
          arrayEnemy[objective].hull = arrayEnemy[objective].hull - trueDamage;
          }
        }
      }
    }
    if (i < enemyLength){
      if (alive(arrayPlayer) && alive(arrayEnemy)){
        if (arrayEnemy[i].hull > 0){
          objectiveAlive = false;
          while (objectiveAlive !== true){
          objective = Math.floor(Math.random() * playerLength);
            if (arrayPlayer[objective].hull > 0){
              objectiveAlive = true;
            }
          }
          totalDamage = calculateDamage(arrayEnemy[i].damage);
          totalDefense = calculateDefense(arrayPlayer[objective].agility);
          trueDamage = totalDamage - totalDefense;
          if (trueDamage > 0){
            arrayPlayer[objective].hull = arrayPlayer[objective].hull - trueDamage;
          }
        }
      }
    }
    i++;
  }

  const object =
    {
     arrayPlayer: arrayPlayer,
     arrayEnemy: arrayEnemy
    }
  ;
  return object;
}

