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

export const playerFleet = [
  {
    id: 1,
    type:'cruise',
    ammount : 0,
    alive : 0
  },
  {
    id: 1,
    type:'destroyer',
    ammount : 0,
    alive : 0
  },
  {
    id: 1,
    type:'fighter',
    ammount : 0,
    alive : 0
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

export const initialState = {
  campaign, playerFleet
};

