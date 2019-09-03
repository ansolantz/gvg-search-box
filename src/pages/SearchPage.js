import React, { Component } from 'react';
import SearchBar from './../components/SearchBar'
import gavagaiAPI from './../lib/gavagai-api';

class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
       similarWords: []
    }

}



  handleSearchCallback = async (word) => {
      const lang = 'en'
      console.log("Word: ", word)


      let response = await gavagaiAPI.getSimilarWords(lang, word)
      
      try{
        console.log("Response: ", response)
        this.setState({similarWords: response.data.semanticallySimilarWords})

        console.log()
      } catch(error){
        console.log(error)
      } 

      // gavagaiAPI.getSimilarWords(lang, word)
      //   .then((response) => {
      //     console.log("ok")
      //     console.log("Response: ", response)
      //   })
      //   .catch(error => console.log(error))


        console.log("After")
   }

  render(){
    return (
      <div className="searchContainer">
        <SearchBar handleSearchCallback={(word) => this.handleSearchCallback(word)}/>
      </div>
    );
  }
 
}

export default SearchPage;
