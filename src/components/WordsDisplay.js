import React, { Component } from 'react';



class WordsDisplay extends Component {

    

    render() {
        return (
            <div className="wordDisplay">
                <div>
                   {this.props.similarWord.word} 
                </div>
            </div>
        );
    }
}

export default WordsDisplay;