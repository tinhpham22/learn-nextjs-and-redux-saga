import React from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="not-found">
      Không tìm thấy trang!
      <div className="btn-goback">
        <Link href="/">
          <a>Go to home page</a>
        </Link>
      </div>
    </div>
  )
}

export default NotFound;