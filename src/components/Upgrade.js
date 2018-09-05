import React from 'react';
import icon from '../images/navbar/upgrade.png';

const Upgrade = () => {
  return (
    <div className="upgrade">
      <img className="upgrade__icon" src={icon} alt="Upgrade" />
      <div>
        <p className="upgrade__text">Upgrade account</p>
        <p className="upgrade__price">Pay 10$, Yearly</p>
      </div>
    </div>
  );
};

export default Upgrade;