import React, { Component } from 'react';



class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

    }

    handleSubmit = (event) => {
       event.preventDefault();
        console.log("Search: ", this.state.search)
        this.props.handleSearchCallback(this.state.search);

    }

    handleChange = (event) => {
        this.setState({ search: event.target.value});
    }


    render() {
        return (
            <div className="searchBar">
                <div>Search</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="searchFrm" name="search" placeholder="Search"
                            onChange={this.handleChange} />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;