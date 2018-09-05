import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  selectDetailView,
  selectThumbsView
} from '../store/actions'

import thumb from '../images/views/thumb.png';
import detail from '../images/views/detail.png';
import thumbActive from '../images/views/thumb-active.png';
import detailActive from '../images/views/detail-active.png';

class ViewsBoard extends Component {

  render() {

    const { viewType, selectDetail, selectThumbs } = this.props;

    return (
      <div className="panel__views">
        <a className="panel__view" onClick={selectThumbs}>
          <img src={viewType === 'thumbs' ? thumbActive : thumb} alt="Thumbs" />
        </a>
        <a className="panel__view" onClick={selectDetail}>
          <img src={viewType === 'detail' ? detailActive : detail} alt="Detail" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewType: state.UI.viewType
});

const mapDispatchToProps = dispatch => ({
  selectDetail: () => dispatch(selectDetailView()),
  selectThumbs: () => dispatch(selectThumbsView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewsBoard);