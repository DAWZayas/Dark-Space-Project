export const campaign = [
  {
    id: 1,
    title: 'Mision one: xxxxx',
    status: 'fail'
  },
  {
    id: 2,
    title: 'Mision two: xxxxx',
    status: 'fail'
  },
  {
    id: 3,
    title: 'Mision three: xxxxx',
    status: 'fail'
  },
  {
    id: 4,
    title: 'Mision four: xxxxx',
    status: 'fail'
  },
  {
    id: 5,
    title: 'Mision five: xxxxx',
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
