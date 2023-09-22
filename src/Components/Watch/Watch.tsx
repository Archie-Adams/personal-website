import React, { useEffect, useState } from "react";
import './Watch.scss';

const Watch = () => {
  //     {/* https://www.watchuseek.com/attachments/b4e93939-5116-48a8-a82e-ed5e3bb4e23b-jpeg.16563386/   */}
  //   {/* insp for watch  */}
  //   {/* https://codepen.io/Wujek_Greg */}
  //   {/* https://codepen.io/jrg/pen/RwEERB */}
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="watch-container">
      <div className="strap">
        <div className="line"></div>
        <div className="buckle"></div>
        <div className="loop-top"></div>
        <div className="loop-bottom"></div>
      </div>
      <div className="face">
        
      </div>
    </div>
  );

};

export default Watch;
