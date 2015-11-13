
/*
shield "escudo", no deja queun golpe inferior al shield power le haga daño a la nave 
  precision, probabilidad de hacer el doble de daño por disparo
*/
var NavPunt =[
    {
      type    :'cruise',
      point   : 12
    },
    {
      type    :'destroyer',
      point   : 7
    },
    {
      type    :'fighter',
      point   : 4
    }
];

var playerFleet = [
      {
    type : 'playerFleet',
    shield_power : 0,
       alife: 0
       
  },
    {
    type    :'cruise',
    shield_power : 150,
    alive   : 1000,
    damage  : 500,
    shots   : 8,
    precision : 20


  },
    {
    id      : 2,
    type    :'cruise',
    shield_power : 150,
    alive   : 1000,
    damage  : 500,
    shots   : 8,
    precision : 20


  },
  {
    id      : 3,
    type    :'destroyer',
    shield_power : 100,
    alive   : 1000,
    shots   : 4,
    damage  : 500,
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
  },    {
    id: 6,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
 
 {
    id: 7,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
     {
    id: 8,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
     {
    id: 9,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
     {
    id: 10,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
 
     {
    id: 11,
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
    type : 'dummyFleet',
   shield_power : 0,
    alife: 0
  },
  {
    id      : 1,
    type    :'cruise',
    shield_power : 150,
    alive   : 1000,
    damage  : 500,
    shots   : 8,
    precision : 20


  },
    {
    id      : 2,
    type    :'cruise',
    shield_power : 150,
    alive   : 1000,
    damage  : 500,
    shots   : 8,
    precision : 20


  }, 
  {
    id      : 3,
    type    :'cruise',
    shield_power : 150,
    alive   : 1000,
    damage  : 500,
    shots   : 8,
    precision : 20


  },
  {
    id      : 4,
    type    :'destroyer',
    shield_power : 100,
    alive   : 1000,
    shots   : 4,
    damage  : 500,
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
  },
  {
    id: 7,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
     {
    id: 8,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
     {
    id: 9,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
     {
    id: 10,
    type    :'fighter',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  },
 
     {
    id: 11,
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

function Battle(playerFleet,dummyFleet,NavPunt,turns){
     let att = initial();
 
 /*if (att == 1){
     let attacker = playerFleet;
     let  defense = dummyFleet;
      
    }else{
    let  attacker = dummyFleet;
    let  defense = playerFleet;
    }
*/
   let  attacker = dummyFleet;
    let  defense = playerFleet;
  
 let turn=1;

    while (turn <= turns ){
     let aux_at=attacker;
     let aux_def=defense;

      defense=aux_at;
      attacker=aux_def;

      defense=round(attacker,defense);

      turn++;
    }
let result1 = Show_result(attacker,defense,NavPunt);
let result2 = Show_result(defense,attacker,NavPunt);
    

      arresult = [
      {
        name: result1[0].name,
        point: result1[0].point,
        d_figter: result1[0].d_fighter,
        d_cruise: result1[0].d_cruise,
        d_destroyer: result1[0].d_destroyer
      },
     {
        name: result2[0].name,
        point: result2[0].point,
      d_figter: result2[0].d_fighter,
      d_cruise: result2[0].d_cruise,
      d_destroyer: result2[0].d_destroyer
      }

    ];
 return arresult;


}
function initial(){
              let rand = getRandomInt(1,100);
              let decision = 0;
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
   
  for (let i = 1; i < attacker.length ; i++){
          if (attacker[i].alive !== 0){
               let damage     = attacker[i].damage;
               let precision  = attacker[i].precision;
                
                //es critic?
                let critical_attack=(getRandomInt(1,100),precision);
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
           console.log(nav_target);
           console.log(defense[nav_target].shield_power);
          let shield  =defense[nav_target].shield_power;
          let alive   =defense[nav_target].alive;
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
function actu_nav(nav_target,defense,alive_aux){
  defense[nav_target].alive=alive_aux;
  return defense;
}
function target(defense){
  nav_target=getRandomInt(1,playerFleet.length -1);

  return nav_target;
}

function initial(){
   let rand = getRandomInt(1,100);
   let decision = 0;
    if ( rand > 50){
        decision = 1;
    }else if(rand < 50 ){
        decision = 2;
    }else if(rand == 50){

      decision = initial();
    }
  return decision;
}

function getRandomInt(min, max) {
      return Math.floor((Math.random() * max) + 1);
  }

  function critical_attack(crit,precision){
   
   if (crit <= precision){
    return true;
   }else{
     return false;
     }
  }

  function Show_result(arrat,arrdf,NavPunt){
   let alive=0;
   let type="";
   let ptotal=0;
let t_d_fighter=0;
   let t_d_destroyer=0;
   let t_d_cruise=0;
    for (let a = 1; a < arrdf.length ; a++) {

          //var  alive_aux=arrdf[i].alive;
       if (arrdf[a].alive === 0 ){

         let q= arrdf[a].type;
            
            if (q=="fighter"){
               t_d_fighter++;
            };
            if (q=="destroyer"){
               t_d_destroyer++;
            };
            if (q=="cruise"){
               t_d_cruise++;
            };

            for (let s = 0;s < NavPunt.length; s++){
            if (NavPunt[s].type == q){
             ptotal=ptotal+NavPunt[s].point;
            }
            }
//console.log(NavPunt[q].point);
  //      ptotal=ptotal+NavPunt[q].point;

       }

    }
let Punt = [
  {
    name   :arrat[0].type,
    point  :ptotal,
    d_fighter: t_d_fighter,
    d_destroyer: t_d_destroyer,
    d_cruise: t_d_cruise
  }
];

return  Punt;
  }
//console.log(round(playerFleet,dummyFleet));
//console.log(initial());
//console.log(attac(20,playerFleet,5));
//console.log(actu_nav(3,dummyFleet,40));
//console.log(target(dummyFleet));
//console.log(critical_attack(getRandomInt(1,100),30));
//console.log(Show_result(dummyFleet,playerFleet,NavPunt));
console.log(Battle(playerFleet,dummyFleet,NavPunt,8));