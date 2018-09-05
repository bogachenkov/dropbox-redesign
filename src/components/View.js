import React from 'react';
import {connect} from 'react-redux';
import ThumbsView from './ThumbsView';
import DetailView from './DetailView';



const View = ({viewType}) => {
  switch (viewType) {
    case 'thumbs':
      return <ThumbsView />
    case 'detail':
      return <DetailView />
    default:
      return <ThumbsView />
  }
};

const mapStateToProps = state => ({
  viewType: state.UI.viewType
})

export default connect(mapStateToProps)(View);