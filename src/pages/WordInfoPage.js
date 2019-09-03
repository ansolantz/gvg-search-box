import React, { Component } from 'react';
import gavagaiAPI from './../lib/gavagai-api';

class WordInfoPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wordInfo: {},
      searchWord: '',
      errorMessage: ''
    }

  }

  componentDidMount() {
    this.getSingelWordInfo();
  }

  getSingelWordInfo = async () => {
    const { lang, word } = this.props.match.params
    this.setState({ searchWord: word })
    let response = await gavagaiAPI.getWordInfo(lang, word)

    try {
      console.log("Response: ", response)
      if (response.data.wordInformation) {
        this.setState({ wordInfo: response.data.wordInformation })
      } else {
        this.setState({ errorMessage: 'No information avaliable' })
      }


      console.log("State: ", this.state.wordInfo)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { frequency, documentFrequency, absoluteRank, relativeRank, vocabularySize, additionalInformation } = this.state.wordInfo
    return (
      <div className="container">
        <h1>More info about {this.state.searchWord}</h1>
        {Object.keys(this.state.wordInfo).length > 0 &&
          <div>
            <p>Frequency: {frequency}</p>
            <p>DocumentFrequency: {documentFrequency}</p>
            <p>Absolute Rank: {absoluteRank}</p>
            <p>Relative Rank: {relativeRank}</p>
            <p>Vocabulary Size: {vocabularySize}</p>
            <p>Additional Information: {additionalInformation.link}</p>
          </div>
        }

        <p className="errorMessage">{this.state.errorMessage} </p>
      </div>
    );
  }

}

export default WordInfoPage;
