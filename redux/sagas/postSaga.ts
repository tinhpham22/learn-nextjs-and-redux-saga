import { put, takeEvery, all, call } from "redux-saga/effects";

import { PostResModel } from '../../models/post/post-res.model';
import { GET_LIST_POST, CREATE_POST } from '../constants/post';
import { Action } from '../../models/reduxModels/action';
import { REQUEST, SUCCESS } from "../constants/actionType";

const posts: PostResModel[] = [
  { id: 1, contents: 'post 1' },
  { id: 2, contents: 'post 2' },
  { id: 3, contents: 'post 3' },
  { id: 4, contents: 'post 4' },
  { id: 5, contents: 'post 5' },
]

function* getLstPost() {
  yield put<Action>({
    type: SUCCESS(GET_LIST_POST),
    payload: {
      response: posts
    }
  })
}

function* getData() {
  try {
    yield all([
      put({
        type: 'GETDATA',
        payload: { response: posts },
      }),
    ]);
  } catch (error) {
    put({
      type: 'GETDATA',
      payload: { response: posts },
    })
  }
}

  // function* createPost(post: PostResModel) {
  //   yield put<Action>({
  //     type: SUCCESS(CREATE_POST),
  //     payload: {
  //       response: posts.push(post)
  //     }
  //   })
  // }

  function* postSaga() {
    console.log('aaa');

    yield all([
      takeEvery(REQUEST(GET_LIST_POST), getLstPost),
      takeEvery(REQUEST('GETDATA'), getData),
      // takeEvery(REQUEST(CREATE_POST), getLstPost),
    ])
  }

  export default postSaga;