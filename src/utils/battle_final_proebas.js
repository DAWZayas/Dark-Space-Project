//\\\\\\batalla espacial//////
function getRandomInt(max) {
      return Math.floor((Math.random() * max) + 1);
  }

function initial(){
              let rand = getRandomInt(100);
              let decision = 0;
              if ( rand > 50){
                  decision = 1;
              }else if (rand < 50 ){
                  decision = 2;
              }else if (rand === 50){

                decision = initial();
              }
            return decision;
          }
function actualicenave(navetarget, defense, aliveaux){
    defense[navetarget].alive = aliveaux;
return defense;
}
function attac(damage, defense, navetarget){

          let shield  = defense[navetarget].shieldpower;
          let alive   = defense[navetarget].alive;
            if (damage > shield){

              damage = damage - shield;

              alive = alive - damage;
            }
            if (alive < 0){
                alive = 0;
            }
        defense = actualicenave(navetarget, defense, alive);

  return defense;
}
function gettarget(defense){
   let navetarget = getRandomInt(defense.length - 1);
  return navetarget;
}

function target(defense){
let  posnavetarget;
for (let x = 0; x <  defense.length ;x++){
    posnavetarget = gettarget(defense);
 if (defense[posnavetarget].alive !== 0){
  x = defense.length;
 }
}
    return posnavetarget;
}
function round(attacker, defense){
  for (let i = 0; i < attacker.length ; i++){
          if (attacker[i].alive !== 0){
               let damage     = attacker[i].damage;
               let precision  = attacker[i].precision;

              for (let x = 1; x <= attacker[i].shots; x++) {

                    //es critic?
                    let criticalattack = (getRandomInt(100), precision);
                    if (criticalattack === "true"){
                      damage = damage * 2;
                    }

                    //nave objetivo
                    let navetarget = target(defense);
                     if (navetarget !== -1){
                        defense = attac(damage, defense, navetarget);
                     }

              }
          }
    }
    return defense;
}


function initial(){
   let rand = getRandomInt(100);
   let decision = 0;
    if ( rand > 50){
        decision = 0;
    }else if (rand < 50 ){
        decision = 1;
    }else if (rand === 50){

      decision = initial();
    }
    return decision;
}


  function criticalattack(crit, precision){
   if (crit <= precision){
    return true;
   }else {
     return false;
     }
  }

  function showresult(arrat, arrdf, NavPunt){
    let alive = 0;
    let type = "";
    let ptotal = 0;
    let totaldeadfigters = 0;
    let totaldeaddestroyers = 0;
    let totaldeadcruises = 0;
    for (let a = 1; a < arrdf.length ; a++) {

          //var  aliveaux=arrdf[i].alive;
       if (arrdf[a].alive === 0 ){

         let q = arrdf[a].type;

           if (q === "fighter"){
               totaldeadfigters++;
            }else if (q === "destroyer"){
               totaldeaddestroyers++;
            }else if (q === "cruise"){
               totaldeadcruises++;
            }

            for (let s = 0;s < NavPunt.length; s++){
            if (NavPunt[s].type === q){
             ptotal = ptotal + NavPunt[s].point;
            }
            }
//console.log(NavPunt[q].point);
  //      ptotal=ptotal+NavPunt[q].point;

       }

    }
let Punt =
  {
    name   :arrat[0].type,
    point  :ptotal,
    deadfigters: totaldeadfigters,
    deaddestroyers: totaldeaddestroyers,
    deadcruises: totaldeadcruises
  }
;

return  Punt;
  }

export function battle(attackers, defenses, NavPunt, turns){

 let att = 0;

    while (att < turns ){
     if ( att % 2 === 0){
      attackers = round(defenses, attackers);
     }else {
      defenses = round(attackers, defenses);
     }

      att++;
    }
  let result1 = showresult(attackers, defenses, NavPunt);
  let result2 = showresult(defenses, attackers, NavPunt);

 return result1.point - result2.point;
}

///batalla todos los datos

export function battleall(attackers, defenses, NavPunt, turns){

 let att = 0;

    while (att < turns ){

     if ( att % 2 === 0){
      attackers = round(defenses, attackers);
     }else {
      defenses = round(attackers, defenses);
     }


      att++;
    }
  let result1 = showresult(attackers, defenses, NavPunt);
  let result2 = showresult(defenses, attackers, NavPunt);

 let  arresult = [
      {
        point: result1.point,
        deadfigters: result1.deadfigters,
        deadcruises: result1.deadcruises,
        deaddestroyers: result1.deaddestroyers
      },
     {
        point: result2.point,
        deadfigters: result2.deadfigters,
        deadcruises: result2.deadcruises,
        deaddestroyers: result2.deaddestroyers
      }

    ];

  return arresult;


}
export function battleareturnstatus(attackers, defenses, NavPunt,  onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight){

 let att = 0;
 let turns = 4;
    while (att < turns ){

     if ( att % 2 === 0){
      attackers = round(defenses, attackers);
     }else {
      defenses = round(attackers, defenses);
     }
      att++;
    }
onChangePlayerSpaceFleetAfterFight(attackers);
onChangeEnemySpaceFleetAfterFight(defenses);

}
