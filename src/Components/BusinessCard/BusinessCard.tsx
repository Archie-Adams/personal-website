import React, { useState } from "react";
import './BusinessCard.scss';

const BusinessCard = () => {
  const frontCard = (
    <div className="card">
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p className="green">A</p>
      <p className="green">R</p>
      <p className="green">C</p>
      <p className="green">H</p>
      <p className="green">I</p>
      <p className="green">E</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>0</p>
      <p className="green">A</p>
      <p className="green">D</p>
      <p className="green">A</p>
      <p className="green">M</p>
      <p className="green">S</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>0</p>
      <p>0</p>
      <p>1</p>
      <p>0</p>
      <p>1</p>
      <p>1</p>
      <p>0</p>
    </div>
  );
  const backCard = (
    <div className="card backCard">
      <p>
        &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;profession: 'Software Developer',
        &nbsp;&nbsp;&nbsp;&nbsp;likes:[<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'React.JS,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Keyboards'<br />],
        &#125;
      </p>
    </div>

  );
  return (
    <div className="business-card-container">
      
      

      
      
      
      
      
      
      {frontCard}
      {frontCard}
      {frontCard}
      {backCard}
      {backCard}
      {frontCard}
      {backCard}
      {frontCard}
      {backCard}
      {frontCard}
      {backCard}
      {frontCard}
      {backCard}
      {frontCard}
      {frontCard}
      {backCard}
      {frontCard}
      {frontCard}
    </div>
  );
}

export default BusinessCard;
