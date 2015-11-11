export const campaign = [
  {
    id: 1,
    title: 'Battle of Chandrila',
    status: 'success',
    percentage: 100
  },
  {
    id: 2,
    title: 'Battle of Yavin 4',
    status: 'success',
    percentage: 55
  },
  {
    id: 3,
    title: 'Attack on Coruscant',
    status: 'fail',
    percentage: 30
  },
  {
    id: 4,
    title: 'First battle of Korriban',
    status: 'fail',
    percentage: 0
  },
  {
    id: 5,
    title: 'Second battle of Korriban',
    status: 'fail',
    percentage: 0
  }
];
/*
shield "escudo", no deja queun golpe inferior al shield power le haga daño a la nave 
  precision, probabilidad de hacer el doble de daño por disparo
*/
export const playerFleet = [
  {
    id      : 1,
    type    :'cruise',
    shield  : 'yes',
    shield_power : 150,
    alive   : 3000,
    damege  : 150,
    shots   : 8,
    precision : 20


  },
  {
    id      : 2,
    type    :'destroyer',
    shield  : 'yes',
    shield_power : 100,
    alive   : 1000,
    shots   : 4,
    damage  : 200,
    precision : 40
  },
  {
    id: 3,
    type    :'fighter',
    shield  : 'no',
    shield_power : 0,
    alive   : 100,
    shots   : 2,
    damage  : 90,
    precision : 15
  }
];

export const playerDefenses = [
    {
    id      : 1,
    type    :'dome',
    shield  : 'yes',
    shield_power : 1000,
    distance:"",
    alive   : 1
    shots   : 0,
    damage  : 0,
  },
  {
    id      : 2,
    type    :'Gauss canyon ',
    shield  : 'no',
    shield_power : 0,
    alive   : 160,
    distance: "long",
    shots   : 3,
    damage  : 250,
    precision : 45
  },

  {
    id      : 3,
    type    :'missile launches',
    shield  : 'no',
    shield_power : 0,
    alive   : 180,
    distance :"short",
    shots   : 5,
    damage  : 200,
    precision : 15
  }
];



export const initialState = {
  campaign, playerFleet, playerDefenses
};

/*
\\\\\\batalla espacial//////
1º funcion random, si es par empieza el jugador, si es b empieza la maquina
2º ataque (por cada unidad, y cada disparo de la misma)
   2.1  calcular un numero de 1 al 100 si sale un numero del 1 al numero de la variable precision es critico

            var precision = 40;
            function getRandomInt(min, max) {
                return Math.floor((Math.random() * 100) + 1);
            }

            function critical_attack(crit,precision){
             
             console.log(crit);
             if (crit <= precision){
              return true;
             }else{
               return false;
               }
            }
            console.log(critical_attack(getRandomInt(1,100),precision));
    2.1 ataca a una unidad del array enemigo de naves

            console.log(getRandomInt(1,array.length));
              le hara a la unidad objetivo el daño de la atacante si critical_attack sale false o el doble si sale true
              (el daño se restara a shield power y despues a la vida de la unidad atacada).
3º si la vida todal de la la vida de la flota se reduce a un 30% del original 


\\\\\\batalla tierra//////




*/