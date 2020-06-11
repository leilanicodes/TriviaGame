import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/projects';
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

    this.props.getQuestions(event.target.value);
  }

  handleChoice(choice, result, buttonId) {
    let button = document.getElementById(buttonId);

    if (button && choice === result.correct_answer) {
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
      button.disabled = true;
    } else {
      button.style.backgroundColor = 'red';
    }
    for (let i = 0; i < 4; i++) {
      let id = buttonId[0] + '-' + i;
      let element = document.getElementById(id);
      element.disabled = true;
      this.markCorrectAnswer(element, result.correct_answer);
    }
  }
  markCorrectAnswer(element, correctAnswer) {
    if (element.innerHTML === correctAnswer) {
      element.style.backgroundColor = 'green';
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
                      {shuffle([
                        ...result.incorrect_answers,
                        result.correct_answer,
                      ]).map((choice, buttonIndex) => (
                        <div key={choice.incorrect_answers}>
                          <button
                            disabled={false}
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
  getQuestions: (category) => dispatch(fetchQuestions(category)),
});

export default withRouter(connect(mapState, mapDispatch)(Home));
