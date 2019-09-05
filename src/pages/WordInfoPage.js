import React, { Component } from 'react';
import gavagaiAPI from './../lib/gavagai-api';
import './WordInfoPage.css';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class WordInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordInfo: {},
      searchWord: '',
      errorMessage: '',
      loading: false
    }
  }

  componentDidMount() {
    this.getSingelWordInfo();
  }

  getSingelWordInfo = async () => {
    const { lang, word } = this.props.match.params
    this.setState({ searchWord: word, loading: true })
    let response = await gavagaiAPI.getWordInfo(lang, word)

    try {
      console.log("Response: ", response)
      if (response.data.wordInformation) {
        this.setState({ wordInfo: response.data.wordInformation, loading: false })
      } else {
        this.setState({ errorMessage: 'No information avaliable', loading: false })
      }
      console.log("State: ", this.state.wordInfo)
    } catch (error) {
      console.log(error)
      this.setState({ loading: false })
    }
  }

  render() {
    const { frequency, documentFrequency, absoluteRank, relativeRank, vocabularySize, additionalInformation } = this.state.wordInfo
    return (
      <div className="page-container">
        {Object.keys(this.state.wordInfo).length > 0 &&
          <div>
            <h1>More info about <i>'{this.state.searchWord}'</i></h1>
            <div className="word-info-container">
              <div>
                <p>Frequency: {frequency ? frequency : 'No frequency info available'}</p>
                <p>DocumentFrequency: {documentFrequency ? documentFrequency : 'No document frequency info available'}</p>
                <p>Absolute Rank: {absoluteRank ? absoluteRank : 'No absolute rank info available'}</p>
                <p>Relative Rank: {relativeRank ? relativeRank : 'No relative rank info available'}</p>
                <p>Vocabulary Size: {vocabularySize ? vocabularySize : 'No vocabulary size info available'}</p>
                <p>Additional Information: {(additionalInformation && additionalInformation.link) ?
                  <a href={additionalInformation.link} className="link">{additionalInformation.link}</a>
                  :
                  'No additional info available'}
                </p>
              </div>
            </div>
            <div className="button-wrap">
              <button className="btn-back" onClick={() => this.props.history.go(-1)} type="button">BACK</button>
            </div>
          </div>
        }
        {this.state.errorMessage &&
          <div>
            <h1>More info about <i>'{this.state.searchWord}'</i></h1>
            <div className="word-info-container">
              <p className="error-message">{this.state.errorMessage} </p>
            </div>
            <div className="button-wrap">
              <button className="btn-back" onClick={() => this.props.history.go(-1)} type="button">BACK</button>
            </div>
          </div>
        }
        <div className='sweet-loading'>
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

export default WordInfoPage;
