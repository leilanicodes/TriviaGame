import React from 'react';
import { connect } from 'react-redux';
import { fetchTrivia } from '../redux/projects';
import { withRouter } from 'react-router-dom';

export class Home extends React.Component {
  componentDidMount() {
    this.props.getTrivia();
  }
  render() {
    const results = this.props.results.results;
    console.log('results', results);
    console.log('props', this.props);
    return (
      <div>
        <div>
          <h1>Welcome to Trivia!</h1>
          <div>
            <form id="trivia-form">
              <label htmlFor="select">Select a category: </label>
              <select name="category">
                <option value="geography">Geography</option>{' '}
                <option value="entertainment">Entertainment</option>
              </select>
            </form>
          </div>
          <div>
            {results && results.length
              ? results.map((result) => (
                  <div key={result.question}>{result.question}</div>
                ))
              : 'There are no questions in this category.'}
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
});

export default withRouter(connect(mapState, mapDispatch)(Home));
