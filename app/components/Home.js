import React from 'react';
import { connect } from 'react-redux';
import { fetchTrivia, fetchGeography, fetchComputer } from '../redux/projects';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

export class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleClick(event) {
    console.log('event.target.value', event.target.value);

    if (event.target.value === 'geography') {
      this.props.getGeography();
    }
    if (event.target.value === 'computers') {
      this.props.getComputer();
    }
  }

  handleChoice(choice, result, buttonId) {
    console.log('choice', choice);

    let button = document.getElementById(buttonId);
    console.log('result', result.correct_answer);
    console.log('button', button);
    if (button && choice === result.correct_answer) {
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
    } else {
      button.style.backgroundColor = 'red';
    }
  }

  render() {
    const results = this.props.results.results;

    console.log('results~~~~', results);
    console.log('props', this.props);
    const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

    return (
      <div className="trivia">
        <div>
          <h1>Ready to test your trivia skills? Select a category to begin.</h1>
          <div id="category">
            <Button
              type="button"
              color="success"
              value="geography"
              onClick={this.handleClick}
            >
              Geography
            </Button>
            <Button
              color="danger"
              size="large"
              value="games"
              onClick={this.handleClick}
            >
              Games
            </Button>
            <Button value="animals" color="primary" onClick={this.handleClick}>
              Animals
            </Button>
            <Button
              value="computers"
              color="secondary"
              onClick={this.handleClick}
            >
              Computers
            </Button>
            <Button value="history" color="warning" onClick={this.handleClick}>
              History
            </Button>
            <Button value="tv" color="info" onClick={this.handleClick}>
              TV
            </Button>
            {/* <form id="trivia-form">
              {/* <label htmlFor="select">Select a Category: </label> */}
            {/* <select name="category" onChange={this.handleChange}>
                <option defaultValue="selectCategory">
                  Select a category. . .
                </option>
                <option value="geography">Geography</option>{' '}
                <option value="games">Games</option>
                <option value="animals">Animals</option>{' '}
                <option value="computers">Computers</option>
                <option value="history">History</option>{' '}
                <option value="TV">TV</option>
              </select> */}

            {/* </form> */}
          </div>
          <div className="questions-wrapper">
            {results && results.length
              ? results.map((result, questionIndex) => (
                  <div className="question" key={result.question}>
                    <h1>
                      {questionIndex +
                        1 +
                        '. ' +
                        result.question
                          .replace(/(&quot\;)/g, '"')
                          .replace(/&#039;/g, "'")}
                    </h1>

                    <form id="choice-form">
                      {/* <select> */}
                      {/* <option defaultValue="selectAnswer">
                          Select an answer. . .
                        </option> */}
                      {shuffle([
                        ...result.incorrect_answers,
                        result.correct_answer,
                      ]).map((choice, buttonIndex) => (
                        <div key={choice.incorrect_answers}>
                          <button
                            type="button"
                            className="choice"
                            id={questionIndex + '-' + buttonIndex}
                            onClick={() => {
                              this.handleChoice(
                                choice,
                                result,
                                questionIndex + '-' + buttonIndex
                              );
                            }}
                          >
                            {choice
                              .replace(/(&quot\;)/g, '"')
                              .replace(/&#039;/g, "'")}
                          </button>
                        </div>
                      ))}
                      {/* </select> */}
                    </form>
                  </div>
                ))
              : 'A category has not been selected yet.'}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => {
  return {
    results: reduxState.results,
  };
};

const mapDispatch = (dispatch) => ({
  getTrivia: () => dispatch(fetchTrivia()),
  getGeography: () => dispatch(fetchGeography()),
  getComputer: () => dispatch(fetchComputer()),
});

export default withRouter(connect(mapState, mapDispatch)(Home));
