import React, { Component } from 'react';
import SearchBar from './../components/SearchBar'
import WordsDisplay from './../components/WordsDisplay'
import gavagaiAPI from './../lib/gavagai-api';

class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      similarWords: [],
      word: ''
    }

  }



  handleSearchCallback = async (word, lang) => {
    //const language = 'en'
    console.log("Word: ", word)
    this.setState({ word })

    let response = await gavagaiAPI.getSimilarWords(lang, word)

    try {
      console.log("Response: ", response)
      this.setState({ similarWords: response.data.semanticallySimilarWords })

      console.log("State: ", this.state.similarWords)
    } catch (error) {
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

  render() {
    const { similarWords } = this.state
    return (
      <div className="searchContainer">

        <SearchBar handleSearchCallback={(word, language) => this.handleSearchCallback(word, language)} />
       {this.state.word &&
        <h3>Similar words to {this.state.word}</h3>
       } 
        
        {
          similarWords.map((word, index) => {
            return (

              <WordsDisplay key={index} similarWord={word} />

            )
          })
        }



      </div>
    );
  }

}

export default SearchPage;
