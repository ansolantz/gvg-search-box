import React, { Component } from 'react';



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

       if(!this.state.searchWord){
        this.setState({ errorMessage: 'Please enter a word'})
       } else if(!this.state.language){
        this.setState({ errorMessage: 'Please select a language'})
       } else {
        console.log("Search word: ", this.state.searchWord)
        console.log("Language: ", this.state.language)
        const { searchWord, language } = this.state
        this.props.handleSearchCallback(searchWord, language);
       }
        

    }

    // handleChange = (event) => {
    //     this.setState({ searchWord: event.target.value});
    // }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log("Searching. ", this.state.searchWord)
    }
    

    render() {
        return (
            <div className="searchBar">
                <div>Search</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="searchFrm" name="searchWord" placeholder="Search"
                            onChange={this.handleChange} />
                            <select name="language" onChange={this.handleChange}>
                                <option value="">Select language</option>
                                <option value="en">English</option>
                                <option value="sv">Swedish</option>
                                <option value="es">Spanish</option>
                                <option value="fr">France</option>
                             </select>

                        <button type="submit">Search</button>
                    </form>
                    <div className="errorMessage">{this.state.errorMessage}</div>
                </div>
            </div>
        );
    }
}

export default SearchBar;