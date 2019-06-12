import { FETCH_POSTS, FETCH_POST, POST_CREATED } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return [action.payload];
    // case POST_CREATED:
    //   return state;
    default:
      return state;
  }
}
