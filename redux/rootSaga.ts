import { all } from 'redux-saga/effects'
import postSaga from './sagas/postSaga'

function* rootSaga() {
  console.log('fff');
  
  yield all([postSaga(),])
}

export default  rootSaga;