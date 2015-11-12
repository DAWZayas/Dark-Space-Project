
/*
shield "escudo", no deja queun golpe inferior al shield power le haga daño a la nave 
  precision, probabilidad de hacer el doble de daño por disparo
*/
var playerFleet = [
  
    {
    type    :'cruise',
    shield_power : 150,
    alive   : 3000,
    damage  : 150,
    shots   : 8,
    precision : 20


  },
    {
    id      : 2,
    type    :'cruise',
    shield_power : 150,
    alive   : 3000,
    damage  : 150,
    shots   : 8,
    precision : 20


  },
  {
    id      : 3,
    type    :'destroyer',
    shield_power : 100,
    alive   : 1000,
    shots   : 4,
    damage  : 200,
    precision : 40
  },
  {
    id: 4,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
    {
    id: 5,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  }
];
var dummyFleet = [
  {
    id      : 1,
    type    :'cruise',
    shield_power : 150,
    alive   : 3000,
    damage  : 150,
    shots   : 8,
    precision : 20


  },
    {
    id      : 2,
    type    :'cruise',
    shield_power : 150,
    alive   : 3000,
    damage  : 150,
    shots   : 8,
    precision : 20


  }, 
  {
    id      : 3,
    type    :'cruise',
    shield_power : 150,
    alive   : 3000,
    damage  : 150,
    shots   : 8,
    precision : 20


  },
  {
    id      : 4,
    type    :'destroyer',
    shield_power : 100,
    alive   : 1000,
    shots   : 4,
    damage  : 200,
    precision : 40
  },
  {
    id:5,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
    {
    id: 6,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  }
];

//\\\\\\batalla espacial//////
//turno

function Battle(playerFleet,dummyFleet,turns){
    var att = initial() 
 
 if (att == "dummyFleet"){
      attacker = playerFleet;
      defense = dummyFleet;
      
    }else if(att == "playerFleet" ){
      attacker = dummyFleet;
      defense = playerFleet;
    }

  var turn=1;

    while (turn <= turns ){
      var aux_at=attacker;
      var aux_def=defense;

      defense=aux_at;
      attacker=aux_def;

      defense=round(attacker,defense);

      turn++;
    }

    //final batalla    
}
function initial(){
              var rand = getRandomInt(1,100);
              var decision = 0;
              if ( rand > 50){
                  decision = "playerFleet";
              }else if(rand < 50 ){
                  decision = "dummyFleet";
              }else if(rand == 50){

                decision = initial();
              }
            return decision;
          }
function round(attacker,defense){
    while (var i = 0; i <= attacker.length ; i++){
          if (attacker[i].alive !== 0){
                var damage     = attacker[i].damage;
                var precision  = attacker[i].precision;
                
                //es critic?
                critical_attack(getRandomInt(1,100),precision)
                if (critical_attack == "true"){
                  damage=damage*2;
              }
              //nave objetivo
              defense=attac(damage,defense,target(defense));

          }
    }
    return defense;
}

function attac(damage,defense,nav_target){
            shield  =defense[nav_target].shield_power;
            alive   =defense[nav_target].alive;
            if (damage > shield){

              damage=damage-shield;
              
              alive=alive-damage;
              
            }
            if (alive < 0){
                alive = 0;
            }
        defense=actu_nav(nav_target,defense,alive);

  return defense;
}
function actu_nav(nav_target,defense,alive){
  defense[nav_target].alive=alive;
  return defense;
}
function target(defense){
  nav_target=getRandomInt(0,playerFleet.length)-1);

  return nav_target;
}

function initial(){
    var rand = getRandomInt(1,100);
    var decision = 0;
    if ( rand > 50){
        decision = 1;
    }else if(rand < 50 ){
        decision = 2;
    }else if(rand =50){

      desision = initial();
    }
  return desision;
}

  function getRandomInt(min, max) {
      return Math.floor((Math.random() * max) + 1);
  }

  function critical_attack(crit,precision){
   
   console.log(crit);
   if (crit <= precision){
    return true;
   }else{
     return false;
     }
  }