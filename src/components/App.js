import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  finishAppLoading
} from '../store/actions'

import Header from './Header';
import Grid from './Grid';
import Menu from './Menu';
import Content from './Content';
import InitLoader from './InitLoader';

class App extends Component {

  componentDidMount() {
    setTimeout(this.props.finishAppLoading, 2100); 
  }

  render() {
    const {loading} = this.props;
    return (
      <div>
        {loading && <InitLoader />}
        <Header />
        <Grid>
          <Menu />
          <Content />   
        </Grid>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.UI.loading
});

const mapDispatchToProps = dispatch => ({
  finishAppLoading: () => dispatch(finishAppLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);