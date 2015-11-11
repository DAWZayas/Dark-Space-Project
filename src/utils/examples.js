 export const campaign = [
  {
    id: 1,
    title: 'Battle of Chandrila',
    status: 'success',
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
    status: 'success',
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
    status: 'fail',
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
    id: 1,
    name:'X - Wing',
    damage : 2,
    agility : 2,
    hull : 3,
    shields : 2,
    points : 21
  },
  {
    id: 2,
    name:'B - Wing',
    damage : 3,
    agility : 1,
    hull : 3,
    shields : 5,
    points : 22
  }
];

export const enemyPlayerFleet = [
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
];

export const points = [
  {
    id: 0,
    name: 'David',
    userpoints: '15'
  },
  {
    id: 1,
    name: 'Alex',
    userpoints: '10'
  }
];

export const naves = [
  {
    id: 1,
    name:'X - Wing',
    damage : 2,
    agility : 2,
    hull : 3,
    shields : 2,
    points : 21
  },
  {
    id: 2,
    name:'Y - Wing',
    damage : 3,
    agility : 1,
    hull : 3,
    shields : 5,
    points : 22
  },  {
    id: 3,
    name:'B - Wing',
    damage : 2,
    agility : 2,
    hull : 3,
    shields : 2,
    points : 21
  },
  {
    id: 4,
    name:'Tie Interceptor',
    damage : 3,
    agility : 3,
    hull : 3,
    shields : 0,
    points : 18
  },
  {
    id: 5,
    name:'Tie Fighter',
    damage : 2,
    agility : 3,
    hull : 3,
    shields : 0,
    points : 12
  },
  {
    id: 6,
    name:'tie advanced',
    damage : 3,
    agility : 1,
    hull : 3,
    shields : 5,
    points : 22
  }

];

export const initialState = {
  campaign, playerFleet, enemyPlayerFleet, naves, points
};

