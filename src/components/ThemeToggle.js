import React from 'react';
import {connect} from 'react-redux';

import {
  changeTheme
} from '../store/actions';

const ThemeToggle = ({changeTheme}) => {
  return (
    <button className="themeToggle" onClick={changeTheme}>
      Toggle Color Theme
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  changeTheme: () => dispatch(changeTheme())
})

export default connect(null, mapDispatchToProps)(ThemeToggle);