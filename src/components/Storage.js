import { connect } from 'react-redux';
import React, { Component } from 'react';

class StorageComponent extends Component {

  componentDidMount() {
    const {used, total} = this.props;
    setTimeout(() => this.storageUsed.style.width = `${Math.ceil((used/total)*100)}%`, 100);
  }

  render() {
    const {used, total} = this.props;
    return (
      <div className="storage">
        <p className="storage__legend">
          {used}Gb of {total}Gb in used
        </p>
        <div className="storage__level">
          <div className="storage__used" ref={elem => this.storageUsed = elem}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  used: state.storage.used,
  total: state.storage.total
})

export default connect(mapStateToProps)(StorageComponent);