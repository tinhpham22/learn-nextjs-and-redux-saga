import { Action, Payload } from '../../models/reduxModels/action';
import { GET_LIST_POST, GET_POST_BY_ID, CREATE_POST, DELETE_POST } from '../constants/post';
import { PostResModel } from '../../models/post/post-res.model';


const initialState: {post: PostResModel, posts: PostResModel[]} = {
  post: {} as PostResModel,
  posts: [],
}

const reducer = (state=initialState, action: Action) => {
  const {type, payload } = action;

  switch(type) {
    case GET_LIST_POST:
      return {
        ...state,
        posts: payload?.data || [],
      }
      case GET_POST_BY_ID:
        return {
          ...state,
          post: payload?.data || {},
        }
      case CREATE_POST: 
        return {
          ...state,
          posts: [state.posts, ...payload?.data]
        }
      case DELETE_POST:
        const filter = state.posts.filter(f => f.id !== payload?.data.id)
        return {
          ...state,
          posts: filter
        }
      default:
          return state;
  }
}

export default reducer;