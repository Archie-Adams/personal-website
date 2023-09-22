import React, { useState, useEffect } from 'react';
import './Phone.scss';

const Phone = () => {
  const [date, setDate] = useState(new Date());
  type AppTypes = 'home' | 'phone' | 'instagram';
  const [currentApp, setCurrentApp] = useState<AppTypes>('home');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const navbar = (
    <div className="navbar">
      <p>≡</p>
      {/* todo app drawer just puts a smaller viewpoint in application-area */}
      <p>O</p>
      <p>&lt;</p>
    </div>
  );

  let application = <></>;
  if (currentApp === 'home') {
    application = (
      <div className="home-app">
        <p className="clock">{date.toLocaleTimeString().substring(0, 5)}</p>
        <div className="app-container">
          <div className="app-row">
            <a
              className="app"
              href="https://www.linkedin.com/in/archie-adams"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="" />
            </a>
            <a
              className="app"
              href="https://github.com/Archie-Adams"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="" />
            </a>
            <a
              className="app"
              href="mailto:archiea2002@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=w240-h480-rw" alt="" />
            </a>
            <button className="app" onClick={() => setCurrentApp('phone')}>
              <img src="https://play-lh.googleusercontent.com/bk3e0glVbvRC4Z0uEZ5Oso5wjS89r1P_X5e-k3N_UBkTPXZLhGv50rRy7LAuDzzC9w=w240-h480-rw" alt="" />
            </button>
          </div>
          <div className="app-row">
            {/* TODO: Need to implement this app. */}
            {/* <button
              className="app"
              >
              <img src="https://play-lh.googleusercontent.com/i-0HlK6I-K5ZVI28HFa4iXz0T22Mg2WjQ4gMsEYvqmSNdifp2NE41ZiaUCavmbIimQ=w240-h480-rw" alt="" />
            </button> */}
            <button
              className="app"
            >
              {/* TODO: Have a photo of actual desk set up like this */}
              <img src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  } else if (currentApp === 'phone') {
    application = (
      <div className="app-nav-container">
        <div className="phone-app">
          {/* TODO: This would be better as a contacts list with references. */}
          <p className="name">Archie Adams</p>
          <p className="number">+44 7783 620 835</p>
          <div className="dial-pad">
            <div>
              <p>1</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
            <div>
              <p>4</p>
            </div>
            <div>
              <p>5</p>
            </div>
            <div>
              <p>6</p>
            </div>
            <div>
              <p>7</p>
            </div>
            <div>
              <p>8</p>
            </div>
            <div>
              <p>9</p>
            </div>
          </div>
          <div>
            <a href="tel:+447783620835">
              <div>ICON</div><span>Call Number</span>
            </a>
            <button>
              <div>ICON</div><span>Copy Number</span>
            </button>
          </div>
        </div>
        {navbar}
      </div>
    );
  }

  return (
    <div className="phone">
      <div className="top-bezel">
        <div className="ir-sensor" />
        <div className="speaker" />
        <div className="camera" />
        <div className="camera" />
      </div>
      <div className="screen">
        <div className="status-bar">
          {date.toLocaleTimeString().substring(0, 5)}
        </div>
        <div className="application-area">
          {application}
        </div>
      </div>
      <div className="volume" />
      <div className="power" />
    </div>
  );
};

export default Phone;
