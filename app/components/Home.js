import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/projects';
import { withRouter, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

export class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('event.target.value', event.target.value);

    this.props.getQuestions(event.target.value);
  }

  render() {
    return (
      <div className="trivia">
        <div>
          <h1>Ready to test your trivia skills? Select a category to begin.</h1>
          <div id="category">
            <div>
              <NavLink to="/questions">
                <Button
                  type="button"
                  color="success"
                  value="geography"
                  onClick={this.handleClick}
                >
                  Geography
                </Button>
              </NavLink>
              <NavLink to="/questions">
                <Button
                  color="danger"
                  size="large"
                  value="games"
                  onClick={this.handleClick}
                >
                  Games
                </Button>
              </NavLink>
              <NavLink to="/questions">
                <Button
                  value="animals"
                  color="primary"
                  onClick={this.handleClick}
                >
                  Animals
                </Button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/questions">
                <Button
                  value="computers"
                  color="secondary"
                  onClick={this.handleClick}
                >
                  Computers
                </Button>
              </NavLink>
              <NavLink to="/questions">
                <Button
                  value="history"
                  color="warning"
                  onClick={this.handleClick}
                >
                  History
                </Button>
              </NavLink>
              <NavLink to="/questions">
                <Button value="tv" color="info" onClick={this.handleClick}>
                  TV
                </Button>
              </NavLink>
            </div>
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
