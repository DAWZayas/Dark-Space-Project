export const campaign = [
  {
    id: 1,
    tittle: 'Mision one: xxxxx',
    status: 'fail'
  },
  {
    id: 2,
    tittle: 'Mision two: xxxxx',
    status: 'fail'
  },
  {
    id: 3,
    tittle: 'Mision three: xxxxx',
    status: 'fail'
  },
  {
    id: 4,
    tittle: 'Mision four: xxxxx',
    status: 'fail'
  },
  {
    id: 5,
    tittle: 'Mision five: xxxxx',
    status: 'fail'
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

export const initialState = {
  campaign, playerFleet
};
