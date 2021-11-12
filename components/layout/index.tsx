import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';

interface MainLayoutProps {
  children: any;
}

function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;