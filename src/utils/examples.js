 export const campaign = [
  {
    id: 1,
    title: 'Battle of Chandrila',
    percentage: 100,
    playerFleet:[
      {
        id: 3,
        name:'Tie Interceptor',
        damage : 3,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 18
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12
      }
    ]
  },
  {
    id: 2,
    title: 'Battle of Yavin 4',
    percentage: 55,
    playerFleet:[
      {
        id: 3,
        name:'Tie Interceptor',
        damage : 3,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 18
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12
      }
    ]
  },
  {
    id: 3,
    title: 'Attack on Coruscant',

    percentage: 30,
    playerFleet:[
      {
        id: 3,
        name:'Tie Interceptor',
        damage : 3,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 18
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12
      }
    ]
  },
  {
    id: 4,
    title: 'First battle of Korriban',

    percentage: 0,
    playerFleet:[
      {
        id: 3,
        name:'Tie Interceptor',
        damage : 3,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 18
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12,
      }
    ]
  },
  {
    id: 5,
    title: 'Second battle of Korriban',
    status: 'fail',
    percentage: 0,
    playerFleet:[
      {
        id: 3,
        name:'Tie Interceptor',
        damage : 3,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 18
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12
      }
    ]
  }
];

export const playerFleet = [
    {
    type    :'cruise',
    shieldpower : 150,
    alive   : 2000,
    damage  : 500,
    shots   : 1,
    precision : 20


  },
 {
    type    :'cruise',
    shieldpower : 150,
    alive   : 2000,
    damage  : 500,
    shots   : 1,
    precision : 20


  },
 {
    type    :'cruise',
    shieldpower : 150,
    alive   : 2000,
    damage  : 500,
    shots   : 1,
    precision : 20

  },
  {
    id      : 3,
    type    :'destroyer',
    shieldpower : 100,
    alive   : 1000,
    shots   : 1,
    damage  : 500,
    precision : 40
  },
  {
    id: 4,
    type    :'fighter',
    shieldpower : 0,
    alive   : 100,
    shots   : 1,
    damage  : 90,
    precision : 15
  }
];

export const playerFleetAfterFight = [
];


export const enemyPlayerFleet = [
{
    type    :'cruise',
    shieldpower : 150,
    alive   : 2000,
    damage  : 500,
    shots   :1,
    precision : 20
  },
                  {
    type    :'cruise',
    shieldpower : 150,
    alive   : 2000,
    damage  : 500,
    shots   : 1,
    precision : 20
  },
  {
    id      : 3,
    type    :'destroyer',
    shieldpower : 100,
    alive   : 1000,
    shots   : 1,
    damage  : 500,
    precision : 40
  },
  {
    id: 4,
    type    :'fighter',
    shieldpower : 0,
    alive   : 100,
    shots   : 1,
    damage  : 90,
    precision : 15
  }
];

export const enemyPlayerFleetAfterFight = [
];

export const points = [
  {
    id: 0,
    name: 'David',
    userpoints: '750',
   missionpoints:[485, 326, 261, 149, 0 ]
  },
  {
    id: 1,
    name: 'Alex',
    userpoints: '75',
   missionpoints:[492, 354, 152, 0, 0 ]
  },
  {
    id: 2,
    name: 'Raul',
    userpoints: '21',
   missionpoints:[453, 264, 156, 0, 0 ]
  },
  {
    id: 3,
    name: 'Javier',
    userpoints: '0',
    missionpoints:[0, 0, 0, 0, 0 ]
  }
];

export const naves = [
  {
    id      : 1,
    type    :'cruise',
    shieldpower : 150,
    alive   : 2000,
    damage  : 500,
    shots   : 2,
    precision : 20,
    points   : 12
  },
  {
    id      : 2,
    type    :'destroyer',
    shieldpower : 100,
    alive   : 1000,
    shots   : 3,
    damage  : 500,
    precision : 40,
    points  : 7
  },
   {id      : 4,
    type    :'fighter',
    shieldpower : 0,
    alive   : 100,
    shots   : 1,
    damage  : 90,
    precision : 15,
    points   : 4
  }

];
export const initialState = {
  campaign, playerFleet, playerFleetAfterFight, enemyPlayerFleet, enemyPlayerFleetAfterFight, points, naves
};
