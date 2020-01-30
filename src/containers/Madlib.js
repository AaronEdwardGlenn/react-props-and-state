import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    wordsArray: [],
    firstWord: '',
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    // const entries = [...event.target].map(entry => entry.value);
    this.toggleResult();
    this.setState(state => ({ wordsArray: [state.firstWord] }));
    
  }

  handleChange = event => {
    this.setState({ firstWord: event.target.value });
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={this.state.wordsArray} closeResult={this.toggleResult} />}
      </>
    );
  }
}
