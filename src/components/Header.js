import React from 'react';
import { connect } from 'react-redux';
import whiteLogo from '../images/logos/white.png';
import blueLogo from '../images/logos/blue.png';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import HeaderTools from './HeaderTools';
import User from './User';
import Upgrade from './Upgrade';

const Header = ({ darkTheme }) => {
  return (
    <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
      <a href="https://bogachenkov.github.io/dropbox-redesign/" className="header__logo">
        {darkTheme && <img src={whiteLogo} alt="Dropbox" />}
        {!darkTheme && <img src={blueLogo} alt="Dropbox" />}
      </a>
      <Search />
      <ThemeToggle />
      <div className="header__right">
        <Upgrade />
        <User />
        <HeaderTools />
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  darkTheme: state.UI.darkTheme
});

export default connect(mapStateToProps)(Header);