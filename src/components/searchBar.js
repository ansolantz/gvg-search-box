import React, { Component } from 'react';
import gavagaiAPI from './lib/gavagai-api';


class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <div>Search</div>
        <div>
            <form>
            <input type="text" className="searchFrm" name="id" placeholder="Search" onChange="" />
          <button type="submit">Search</button>
            </form>
         
        </div>
      </div>
    );
  }
}

export default SearchBar;