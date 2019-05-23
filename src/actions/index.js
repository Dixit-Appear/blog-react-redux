export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=LEWAGON-BLOG')
    .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}
