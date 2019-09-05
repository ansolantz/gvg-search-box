import React, { Component } from 'react';
import SearchBar from './../components/SearchBar'
import WordsDisplay from './../components/WordsDisplay'
import gavagaiAPI from './../lib/gavagai-api';
import './SearchPage.css';

class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      similarWords: [],
      word: '',
      lang: '',
      loading: false
    }

  }



  handleSearchCallback = async (word, lang) => {
    //const language = 'en'
    console.log("Word: ", word)
    this.setState({ word, lang })

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
    const { similarWords, word, lang } = this.state
    return (
      <div className="page-container">

        <SearchBar handleSearchCallback={(word, language) => this.handleSearchCallback(word, language)} />



        {this.state.similarWords.length > 0 &&
          <div>
            <h3>Similar words to {word}</h3>
            <div className="word-display">
              {
                similarWords.map((similarWord, index) => {
                  return (
                    <WordsDisplay key={index} similarWord={similarWord} language={lang} />
                  )
                })
              }
            </div>
          </div>
        }
      </div>
    );
  }

}

export default SearchPage;
