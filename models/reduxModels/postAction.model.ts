import { PostResModel } from '../post/post-res.model';

export interface PostActionModel {
  post?: PostResModel,
  posts?: PostResModel[],
}