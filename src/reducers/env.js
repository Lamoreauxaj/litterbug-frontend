import { combineActions, createAction, handleActions } from 'redux-actions';

const prefix = 'ENV';

const setTaskIndex = createAction(`${prefix}/SET_TASK_INDEX`, taskIndex => ({ taskIndex }));

export const actions = {
  setTaskIndex,
};

const defaultState = {
  tasks: [
    {
      title: 'Pick Up Litters',
      cover: './img/litters.jpg',
      total: 25,
      current: 0,
    },
    {
      title: 'Attend Earth Day TX',
      cover: './img/earthday.jpg',
      total: 50,
      current: 50,
    },
    {
      title: 'Plant a Tree',
      cover: './img/planting.jpg',
      total: 80,
      current: 80,
    },
    {
      title: 'Join Earth Hour',
      cover: './img/earthhour.jpg',
      total: 40,
      current: 0,
    },
    {
      title: 'Invite Friends to LitterBug',
      cover: './img/invitation.jpg',
      total: 20,
      current: 5,
    },
  ],
  sponsors: [
    {
      title: '$50 Amazon Gift Card',
      cover: './img/amazongift.jpg',
      points: 250,
    },
    {
      title: '$1,000 Southwest Airlines Holidays',
      cover: './img/southwest.jpg',
      points: 5000,
    },
    {
      title: '$500 Paypal Cash',
      cover: './img/paypal.png',
      points: 2500,
    },
    {
      title: '$200 Uber Gift Card',
      cover: './img/ubergiftcard.jpg',
      points: 1000,
    },
    {
      title: 'iPhone 8',
      cover: './img/iphone8.jpeg',
      points: 5000,
    },
    {
      title: 'Curved Samsung TV',
      cover: './img/samsungtv.jpeg',
      points: 5000,
    },
  ],
  taskIndex: -1,
};

export default handleActions({
  [combineActions(
    setTaskIndex,
  )]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, defaultState);
