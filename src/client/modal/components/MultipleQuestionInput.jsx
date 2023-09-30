import React, { useState } from 'react';

export function MultipleQuestionInput({
  onStatementChange,
  statement,
  answer,
  data,
}) {
  const [options, setOptions] = useState(
    'You have not created or generated any options yet. Use "edit options".'
  );
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
          // onClick="showmultipleOptions()"
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
        // onkeypress="showPreview(this)"
        // onChange="showPreview(this)"
        rows="5"
        cols="50"
      ></textarea>

      <div className="question-edit-label">answer</div>
      <textarea
        className="question-edit-textarea"
        id="multipleA"
        // onkeypress="showPreview(this)"
        // onChange="showPreview(this)"
        rows="2"
        cols="50"
      ></textarea>
    </div>
  );
}
