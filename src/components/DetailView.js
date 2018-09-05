import React from 'react';
import {connect} from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import FileOptions from './FileOptions';
import CheckIcon from './CheckIcon';

const DetailView = ({files}) => {
  return (
    <table className="content-detail">
      <thead>
        <tr>
          <th width="50%">Name</th>
          <th className="tablet-only">Date</th>
          <th className="tablet-only">Size</th>
          <th width="70" style={{textAlign: 'right'}}></th>
        </tr>
      </thead>
      <CSSTransitionGroup
        component="tbody"
        transitionName="animations"
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnter={false}
        transitionLeaveTimeout={300}
      >
        {files.map(({filename, date, size}) => (
          <tr className="detail" key={filename}>
            <td>
              <div className="detail__filename">
                <CheckIcon filename={filename} />
                <img className="detail__image" src={require('../images/photos/' + filename)} alt={filename} />
                {filename}
              </div>
            </td>
            <td className="detail__date tablet-only">{date}</td>
            <td className="detail__size tablet-only">{size}</td>
            <td style={{textAlign: 'right'}}>
              <FileOptions className="relative" filename={filename} />
            </td>
          </tr>
        ))}
      </CSSTransitionGroup>
    </table>
  );
};

const mapStateToProps = state => ({
  files: state.files.files
});

export default connect(mapStateToProps)(DetailView);