import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: '',
      language: '',
      errorMessage: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.searchWord) {
      this.setState({ errorMessage: 'Please enter a word' })
    } else if (!this.state.language) {
      this.setState({ errorMessage: 'Please select a language' })
    } else {
      console.log("Search word: ", this.state.searchWord)
      console.log("Language: ", this.state.language)
      const { searchWord, language } = this.state
      this.props.handleSearchCallback(searchWord, language);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div className="search-bar">
        <h1>Search for a word</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="inner-form">
              <div className="first-wrap">
                <input type="text" className="search-field" name="searchWord" placeholder="Enter a word"
                  onChange={this.handleChange} />
              </div>
              <div className="second-wrap">
                <select name="language" className="languages-select" onChange={this.handleChange}>
                  <option value="">Language</option>
                  <option value="en">English</option>
                  <option value="sv">Swedish</option>
                  <option value="es">Spanish</option>
                  <option value="fr">France</option>
                </select>
              </div>
              <div className="third-wrap">
                <button className="btn-search" type="submit">SEARCH</button>
              </div>
            </div>
          </form>
          <div className="error-message">{this.state.errorMessage}</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;