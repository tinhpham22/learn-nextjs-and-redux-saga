import { Payload } from '../../models/reduxModels/action';
import { GET_LIST_POST } from '../constants/post';

export const lstPostAction = (payload?: Payload) => ({
  type: GET_LIST_POST,
  payload
})