import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'



class WordsDisplay extends Component {

  render() {
    const lang = this.props.language;
    const similarWord = this.props.similarWord.word;
    return (
      <div className='wordDisplay'>
        <div>
          <NavLink to={`/${lang}/${similarWord}`}>{similarWord}</NavLink>
        </div>
      </div>
    );
  }
}

export default WordsDisplay;