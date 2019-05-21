import { FETCH_POSTS } from '../actions';

export default function(state = [], action) {
  switch (action.payload) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}
