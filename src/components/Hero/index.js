import React, { useState } from 'react';
import "./index.css";
import "./Hero.js"

function OnHover() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="onHover">
      <button className="moreBtn"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            Scroll down to see my work!
      </button>
      {
      isShown && (
          <div>
          <button src="./images/arrow.png"> </button>
        </div>
      )}
    </div>
  );
}

export default OnHover;
