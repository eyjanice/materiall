import React, { useEffect, useState } from 'react';
import { PopupModal } from './PopupModal';

export function TrueFalseQuestionInput({
  onStatementChange,
  onAnswerChange,
  statement,
  data,
}) {
  const [answer, setAnswer] = useState('True');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    onStatementChange(answer === 'True' ? data.text : data.false_sentences[0]);
    onAnswerChange(answer);
  }, [answer]);

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
          onStatementChange(e.currentTarget.value);
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
            onChange={() => {
              setAnswer((v) => {
                return v === 'True' ? 'False' : 'True';
              });
            }}
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
          body={<TrueFalsePopup />}
        />
      )}
    </div>
  );
}

function TrueFalsePopup() {
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
                onchange="toggleModalTrueFalse()"
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
      <form id="trueFalseOptions" className="options-form"></form>
    </div>
  );
}
