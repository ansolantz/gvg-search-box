import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './WordDisplay.css';


class WordsDisplay extends Component {

  render() {
    const lang = this.props.language;
    const similarWord = this.props.similarWord.word;
    return (
      <NavLink className="word-tag" to={`/${lang}/${similarWord}`}>{similarWord}</NavLink>
    );
  }
}

export default WordsDisplay;