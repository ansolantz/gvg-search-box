import React, { Component } from 'react';
import SearchBar from './../components/SearchBar'
import WordsDisplay from './../components/WordsDisplay'
import gavagaiAPI from './../lib/gavagai-api';
import './SearchPage.css';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

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
    this.setState({ loading: true, word, lang })
    let response = await gavagaiAPI.getSimilarWords(lang, word)

    try {
      console.log("Response: ", response)
      this.setState({ similarWords: response.data.semanticallySimilarWords })
      console.log("State: ", this.state.similarWords)
      this.setState({ loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  render() {
    const { similarWords, word, lang } = this.state
    return (
      <div className="page-container">
        <SearchBar handleSearchCallback={(word, language) => this.handleSearchCallback(word, language)} />
        {this.state.similarWords.length > 0 &&
          <div>
            <h3 className="padding">Similar words to {word}</h3>
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
        <div className="sweet-loading">
          <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={10}
            color={'#33ceff'}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
