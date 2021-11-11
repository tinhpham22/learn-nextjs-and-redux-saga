import React from 'react';
import { useRouter } from 'next/router';

import { PostResModel } from '../../models/post/post-res.model';
import { PostList } from '../../shared/constant/datas';
import styles from '../../styles/Home.module.css'

const PostListPage = () => {
  const router = useRouter()
  const postList: PostResModel[] = [...PostList];

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