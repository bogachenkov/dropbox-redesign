import React from 'react';
import settings from '../images/navbar/settings.png';
import notifications from '../images/navbar/notifications.png';

const HeaderTools = () => {
  return (
    <div className="hTools">
      <a className="hTools__settings">
        <img src={settings} alt="Settings" />
      </a>
      <a className="hTools__notifications">
        <img src={notifications} alt="Notifications" />
      </a>
    </div>
  );
};

export default HeaderTools;