import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { PostActionModel } from '../../models/reduxModels/postAction.model';
import { RootReducerModel } from '../../models/reduxModels/rootReducer';
import { PostResModel } from '../../models/post/post-res.model';
import { lstPostAction } from '../../redux/actions/postAction';
import { PostList } from '../../shared/constant/datas';
import styles from '../../styles/Home.module.css'

const PostListPage = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const dataReducer = useSelector<RootReducerModel, PostActionModel>(state => state.postReducer);
  const postList: PostResModel[] = [...PostList];

  const {post, posts} = dataReducer;
  console.log(post, posts);

  useEffect(() => {
    dispatch(lstPostAction())
  }, [dispatch])

  const goToPostDetail = (postId: PostResModel['id']) => {
    router.push({
      pathname: 'posts/[postId]',
      query: {
        postId: postId
      }
    })
  }

  return (
    <>
      {
        postList.map((post) => (
          <div key={post.id} className={styles.grid}>
            <div className={styles.card} onClick={() => goToPostDetail(post.id)}>
              {post.id}. {post.contents}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default PostListPage;