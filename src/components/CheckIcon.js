import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  selectFile
} from '../store/actions';

class CheckIcon extends Component {

  state = {
    isChecked: false
  }

  componentDidMount() {
    const {selected, filename} = this.props;
    if (selected.includes(filename)) this.setState({isChecked: true});  
  }
  
  clickHandler = filename => {
    this.setState({
      isChecked: !this.state.isChecked
    }, () => this.props.selectFile(filename));
    ;
  }

  render() {

    const {isChecked} = this.state;
    const {filename} = this.props;

    return (
      <svg onClick={() => this.clickHandler(filename)} className={`check ${isChecked ? 'active' : ''}`}
        width="22px" height="22px">
        <path className="check-bg"  fill="rgb(244, 244, 244)"
        d="M11.000,-0.000 C17.075,-0.000 22.000,4.925 22.000,11.000 C22.000,17.075 17.075,22.000 11.000,22.000 C4.925,22.000 -0.000,17.075 -0.000,11.000 C-0.000,4.925 4.925,-0.000 11.000,-0.000 Z"/>
        <path className="check-icon"  fill="rgb(192, 192, 192)"
        d="M15.010,9.902 C14.246,10.852 13.446,11.768 12.664,12.701 C12.060,13.409 11.527,14.186 10.869,14.877 C10.496,15.274 9.856,16.000 9.234,15.965 C8.719,15.948 8.275,15.585 7.937,15.240 C7.137,14.428 6.053,13.150 6.018,11.958 C6.000,11.042 6.853,11.319 7.368,11.699 C8.079,12.234 8.630,12.891 9.270,13.495 C9.554,12.977 10.016,12.528 10.443,12.113 C11.189,11.370 11.864,10.610 12.593,9.850 C13.250,9.159 13.837,8.399 14.530,7.743 C14.832,7.466 15.347,7.000 15.809,7.242 C17.000,7.864 15.489,9.315 15.010,9.902 Z"/>
      </svg>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.files.selectedFiles
});

const mapDispatchToProps = dispatch => ({
  selectFile: filename => dispatch(selectFile(filename))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckIcon);