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
