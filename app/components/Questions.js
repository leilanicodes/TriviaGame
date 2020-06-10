import React from 'react';

export const Questions = (props) => {
  const results = props.results.results;

  const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

  return (
    <div className="trivia">
      <div>
        <div>
          {results && results.length
            ? results.map((result) => (
                <div key={result.question}>
                  <h1>{result.question}</h1>

                  <form>
                    <select>
                      <option defaultValue="selectAnswer">
                        Select an answer. . .
                      </option>
                      {shuffle([
                        ...result.incorrect_answers,
                        result.correct_answer,
                      ]).map((choice) => (
                        <option key={choice.incorrect_answers}>{choice}</option>
                      ))}
                    </select>
                  </form>
                </div>
              ))
            : 'There are no questions in this category.'}
        </div>
      </div>
    </div>
  );
};

export default Questions;
