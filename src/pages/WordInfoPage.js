import React, { Component } from 'react';
import gavagaiAPI from './../lib/gavagai-api';
import './WordInfoPage.css';

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
      <div className="page-container">
        <h1>More info about {this.state.searchWord}</h1>
        <div className="word-info-container">

          {Object.keys(this.state.wordInfo).length > 0 &&
            <div>
              <p>Frequency: {frequency ? frequency : 'No frequency info available'}</p>
              <p>DocumentFrequency: {documentFrequency ? documentFrequency : 'No document frequency info available'}</p>
              <p>Absolute Rank: {absoluteRank ? absoluteRank : 'No absolute rank info available'}</p>
              <p>Relative Rank: {relativeRank ? relativeRank : 'No relative rank info available'}</p>
              <p>Vocabulary Size: {vocabularySize ? vocabularySize : 'No vocabulary size info available'}</p>
              <p>Additional Information: {(additionalInformation && additionalInformation.link) ?
                <a href={additionalInformation.link}>{additionalInformation.link}</a>
                :
                'No additional info available'}
              </p>
            </div>
          }
          <p className="errorMessage">{this.state.errorMessage} </p>


        </div>
        <div className="button-wrap">
          <button className="btn-back" onClick={() => this.props.history.go(-1)} type="button">BACK</button>
        </div>

      </div>
    );
  }

}

export default WordInfoPage;
