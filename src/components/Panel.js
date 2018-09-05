import React from 'react';
import {connect} from 'react-redux';

import {
  deleteSelectedFiles
} from '../store/actions'

import upload from '../images/actions/upload.png';
import newFolder from '../images/actions/new-folder.png';
import shareFolder from '../images/actions/share-a-folder.png';
import trash from '../images/actions/trash.png';

import ViewsBoard from './ViewsBoard';
import Wrapper from './Wrapper';

const Panel = ({selected, deleteSelected}) => {
  return (
    <div className="panel">
      <a className="panel__item">
        <img src={upload} alt="Upload" />
        Upload
      </a>
      <a className="panel__item">
        <img src={newFolder} alt="New Folder" />
        New Folder
      </a>
      <a className="panel__item">
        <img src={shareFolder} alt="Share" />
        Share a Folder
      </a>
      {
        (selected.length > 0) && (
          <Wrapper>
            <a onClick={deleteSelected} className="panel__item trash">
              <img src={trash} alt="Trash" />
              Trash
            </a>
            <p className="panel__selected-count">You have {selected.length} selected items</p>
          </Wrapper>
        )
      }
      <ViewsBoard />
    </div>
  );
};

const mapStateToProps = state => ({
  selected: state.files.selectedFiles
});

const mapDispatchToProps = dispatch => ({
  deleteSelected: () => dispatch(deleteSelectedFiles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Panel);