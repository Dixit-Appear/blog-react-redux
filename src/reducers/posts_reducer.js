import { FETCH_POSTS } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}
