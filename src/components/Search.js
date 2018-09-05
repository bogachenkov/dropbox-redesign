import React, { Component } from 'react';
import icon from '../images/navbar/search.png';

class Search extends Component {

  state = {
    value: ''
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <form className="search__form">
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          type="text"
          placeholder="Type to Search..."
          className="search" />
          <img className="search__icon" src={icon} alt=">" />
      </form>
    );
  }
}

export default Search;