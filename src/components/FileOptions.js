import React from 'react';
import {connect} from 'react-redux';

import {
  deleteFile
} from '../store/actions'

import options from '../images/item/options.png';
import share from '../images/item/share.png';
import download from '../images/item/download.png';
import deleteIcon from '../images/item/delete.png';

const FileOptions = ({deleteFile, filename, className}) => {
  return (
    <div className={`options ${className}`}>
      <img src={options} alt="More..." />
      <ul className="options__dropdown">
        <li>
          <img src={share} alt="Share" />
          Share
        </li>
        <li>
          <img src={download} alt="Download" />
          Download as .zip
        </li>
        <li onClick={() => deleteFile(filename)}>
          <img src={deleteIcon} alt="Delete" />
          Delete
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteFile: filename => dispatch(deleteFile(filename))
});


export default connect(null, mapDispatchToProps)(FileOptions);

