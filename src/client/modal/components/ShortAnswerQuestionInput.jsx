import React from 'react';

export function ShortAnswerQuestionInput({ onStatementChange, statement }) {
  return (
    <div id="shortDiv" className="question-edit-container">
      <div>To change the question MateriALL generated, edit the question.</div>
      <div className="question-edit-label">question</div>
      <textarea
        className="question-edit-textarea"
        type="text"
        id="shortQ"
        value={statement}
        onChange={(e) => {
          setStatement(e.currentTarget.value);
        }}
        rows="2"
        cols="50"
      ></textarea>
      <div className="question-edit-label">answer</div>
      <textarea
        className="question-edit-textarea"
        type="text"
        id="shortA"
        // onkeypress="showPreview(this)"
        // onChange="showPreview(this)"
        rows="5"
        cols="50"
      ></textarea>
    </div>
  );
}
