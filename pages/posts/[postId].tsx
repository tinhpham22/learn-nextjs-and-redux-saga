import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/server/router';
import React from 'react';

function PostDetailPage() {
  const router = useRouter(); // lấy param trên đường dẫn trình duyệt

  return (
    <>
      <h3>Hello Post Detail Page!</h3>
      <p>Query params: {JSON.stringify(router.query)}</p>
    </>
  )
}

export default PostDetailPage;