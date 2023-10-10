import React, { useEffect, useState } from 'react';
import { PopupModal } from './PopupModal';

const TrueFalseAnswers = {
  True: 'True',
  False: 'False',
};

export function TrueFalseQuestionInput({
  setStatement,
  setAnswer,
  statement,
  answer,
  data,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setStatement(data.text);
    setAnswer(TrueFalseAnswers.True);
  }, []); // Since dependency is a blank array, onStatemenChange and setAnswer only run once, when loaded for the first time.

  const toggleAnswerCheckbox = () => {
    const a =
      answer === TrueFalseAnswers.True
        ? TrueFalseAnswers.False
        : TrueFalseAnswers.True;
    setAnswer(a);
    setStatement(
      a === TrueFalseAnswers.True ? data.text : data.false_sentences[0]
    );
  };

  const onSubmitHandler = (localStatement, localAnswer) => {
    setAnswer(localAnswer);
    setStatement(localStatement);
  };

  return (
    <div id="trueFalseDiv" className="question-edit-container">
      <div>
        To change the statement, toggle between true and false or edit it
        yourself. To see more options MateriaALL generated, click "other
        statement options".
      </div>
      <div className="more-option-bar">
        <div className="question-edit-label">statement</div>
        <div className="more-option-btn" onClick={(e) => setIsPopupOpen(true)}>
          other statement options
        </div>
      </div>
      <textarea
        className="question-edit-textarea"
        type="text"
        id="trueFalseQ"
        value={statement}
        onChange={(e) => {
          setStatement(e.currentTarget.value);
        }}
        rows="2"
        cols="50"
      ></textarea>
      <div className="toggle-slider-container">
        <div className="margin-right-10px">true</div>
        <label className="switch" for="trueFalseCheckbox">
          <input
            type="checkbox"
            id="trueFalseCheckbox"
            value={answer}
            onChange={toggleAnswerCheckbox}
          />
          <div className="slider round"></div>
        </label>
        <div className="margin-left-10px">false</div>
      </div>
      <div className="question-edit-label">answer</div>
      <div className="true-false-answer" id="trueFalseA">
        {answer}
      </div>

      {isPopupOpen && (
        <PopupModal
          onCloseClick={() => setIsPopupOpen(false)}
          headerTypeText={'True/False Question'}
          body={
            <TrueFalsePopup
              close={() => setIsPopupOpen(false)}
              setStatement={setStatement}
              setAnswer={setAnswer}
              statement={statement}
              answer={answer}
              data={data}
            />
          }
        />
      )}
    </div>
  );
}

function TrueFalsePopup({
  close,
  setStatement,
  setAnswer,
  statement,
  answer,
  data,
}) {
  const [options, setOptions] = useState(
    answer === TrueFalseAnswers.True ? [statement] : data.false_sentences
  );
  const [localAnswer, setLocalAnswer] = useState(answer);
  const [localStatement, setLocalStatement] = useState();
  return (
    <div>
      <div className="true-false-question-bar">
        <div className="question-title-bar">
          <div className="question-title">True Statements</div>
          <div className="tooltip-container tooltip-container-option-generate">
            <img className="tooltip tooltip-option-generate" />
            <span className="tooltiptext tooltiptext-option-generate">
              MateriALL used AI technology to generate these statements. You can
              write your own option as well.
            </span>
          </div>
        </div>
        <div className="toggle-wrapper">
          <div className="toggle-slider-container">
            <div className="margin-right-10px">true</div>
            <label className="switch" for="modalTrueFalseCheckbox">
              <input
                type="checkbox"
                id="modalTrueFalseCheckbox"
                value={localAnswer === TrueFalseAnswers.True}
                onChange={() => {
                  if (localAnswer === TrueFalseAnswers.True) {
                    setLocalAnswer(TrueFalseAnswers.False);
                    setOptions(data.false_sentences);
                  } else {
                    setLocalAnswer(TrueFalseAnswers.True);
                    setOptions([statement]);
                  }
                }}
              />
              <div className="slider round"></div>
            </label>
            <div className="margin-left-10px">false</div>
          </div>
        </div>
      </div>
      <div className="margin-bottom-20px">
        Select the statement for this question, or write your own.
      </div>
      <form id="trueFalseOptions" className="options-form">
        {options.map((option, index) => {
          return (
            <React.Fragment key={option}>
              <input
                type="radio"
                className="tFstatements"
                name="tFStatements"
                id={`option-${index}`}
                value={option}
                onChange={(e) => setLocalStatement(e.currentTarget.value)}
              />
              <label for={`option-${index}`}>{option}</label>
            </React.Fragment>
          );
        })}

        <input
          type="radio"
          className="tFStatements"
          name="tFStatements"
          value=""
          id="other"
        />
        <label for="other" id="other-label">
          Other
        </label>
        <input
          id="inputother"
          className="other-input"
          type="text"
          name="othertext"
        />
        <input
          id="submit-true-false"
          type="button"
          value="done"
          onClick={(e) => {
            close();
            setStatement(localStatement);
            setAnswer(localAnswer);
          }}
        ></input>
      </form>
    </div>
  );
}
