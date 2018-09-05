import React from 'react';
import {connect} from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import FileOptions from './FileOptions';
import CheckIcon from './CheckIcon';

const ThumbsView = ({files, deleteFile}) => {
  return (
    <CSSTransitionGroup
      component="section"
      className="content-thumbs"
      transitionName="animations"
      transitionAppear={true}
      transitionAppearTimeout={400}
      transitionEnter={false}
      transitionLeaveTimeout={300}
      >
        {files.map(({filename, date, size}) => (
          <article key={filename} className="thumb">
            <header className="thumb__header">
              <img className="thumb__image" src={require('../images/photos/' + filename)} alt={filename} />
              <CheckIcon filename={filename} />
            </header>
            <p className="thumb__name">{filename}</p>
            <p className="thumb__info">{date}, {size}</p>
            <FileOptions className="absolute" filename={filename} />
          </article>
        ))}
    </CSSTransitionGroup>
  );
};

const mapStateToProps = state => ({
  files: state.files.files
});

export default connect(mapStateToProps)(ThumbsView);