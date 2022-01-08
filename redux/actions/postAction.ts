import { Action, Payload } from '../../models/reduxModels/action';
import { REQUEST } from '../constants/actionType';
import { GET_LIST_POST, CREATE_POST } from '../constants/post';

export const lstPostAction = (payload?: Payload):Action => ({
  type: REQUEST(GET_LIST_POST),
  payload
})

export const createPostAction = (payload?: Payload):Action => ({
  type: REQUEST(CREATE_POST),
  payload
})