import React, { useEffect, useCallback, useState } from 'react';

function LandingPage() {
  const [reveals, ] = useState(document.querySelectorAll('.parallax'));
  const windowHeight = window.innerHeight;
  const revealTop = reveals[1].getBoundingClientRect().top;

  // const reveal = useCallback(() => {
  //   for (let i = 0; i < reveals.length; i++) {
  //     const revealPoint = 100;
  //     if (revealTop < windowHeight - revealPoint) {
  //       reveals[i].classList.add('active');
  //     } else {
  //       reveals[i].classList.remove('.active');
  //     }
  //   }
  // }, [revealTop, reveals, windowHeight])

  useEffect(() => {
    console.log(reveals);
    


    // window.addEventListener('scroll', reveal);
  }, [reveals])

  return (
    <section className="landing-page-container">
      <div className="parallax">
        <div className="content">
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling.
          Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
      </div>

      <div className="parallax">
        <div className="content">
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling.
          Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
      </div>

      <div className="parallax">
        <div className="content">
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling.
          Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
      </div>
    </section>
  )
}

export default LandingPage;