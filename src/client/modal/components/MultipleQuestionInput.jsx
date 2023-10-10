import React, { useState } from 'react';
import { PopupModal } from './PopupModal';

export function MultipleQuestionInput({
  setStatement,
  setAnswer,
  statement,
  answer,
  data,
}) {
  const [options, setOptions] = useState(
    'You have not created or generated any options yet. Use "edit options".'
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div id="multipleDiv" className="question-edit-container">
      <div>
        To make word(s) blank, use "edit options". In "edit options", you can
        also edit your options, or choose options that MateriALL generates.
      </div>
      <div className="more-option-bar">
        <div className="question-edit-label">statement</div>
        <div
          className="more-option-btn"
          onClick={(e) => {
            setIsPopupOpen(true);
          }}
        >
          edit options
        </div>
      </div>
      <textarea
        className="question-edit-textarea"
        id="multipleQ"
        value={statement}
        onChange={(e) => {
          onStatementChange(e.currentTarget.value);
        }}
        rows="2"
        cols="50"
      ></textarea>
      <div className="question-edit-label">options</div>
      <textarea
        className="question-edit-textarea"
        id="multipleO"
        value={options}
        rows="5"
        cols="50"
      ></textarea>

      <div className="question-edit-label">answer</div>
      <textarea
        className="question-edit-textarea"
        id="multipleA"
        rows="2"
        cols="50"
      ></textarea>
      {isPopupOpen && (
        <PopupModal
          onCloseClick={() => setIsPopupOpen(false)}
          headerTypeText={'Multiple Choice Question'}
          body={
            <MultiplePopup
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

function MultiplePopup({
  close,
  setStatement,
  setAnswer,
  statement,
  answer,
  data,
}) {
  return (
    <div>
      <input
        id="submit-blank"
        type="button"
        value="done"
        onClick={(e) => {
          close();
        }}
      ></input>
    </div>
  );
}
