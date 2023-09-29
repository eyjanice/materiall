import React, { useEffect, useState } from 'react';

export function BlankQuestionInput({
  onStatementChange,
  onAnswerChange,
  statement,
  data,
}) {
  const [answer, setAnswer] = useState(data.blank.answer);
  useEffect(() => {
    onAnswerChange(answer);
  }, [answer]); // as [answer] changes {onAnswerChange} is called

  return (
    <div id="blankDiv" className="question-edit-container">
      <div>
        To change which words to leave blank, click "edit blanks". To create
        your own question, edit "statement" box.
      </div>
      <div className="more-option-bar">
        <div className="question-edit-label">statement</div>
        <div
          className="more-option-btn"
          // onClick="showBlankOptions()"
        >
          edit blanks
        </div>
      </div>
      <textarea
        className="question-edit-textarea"
        type="text"
        id="blankQ"
        value={statement}
        onChange={(e) => {
          onStatementChange(e.currentTarget.value);
        }}
        rows="2"
        cols="50"
      ></textarea>
      <div className="question-edit-label">answer</div>
      <textarea
        className="question-edit-textarea"
        type="text"
        id="blankA"
        value={answer}
        // onkeypress="showPreview(this)"
        onChange={(e) => setAnswer(e.currentTarget.value)}
        rows="2"
        cols="50"
      ></textarea>
    </div>
  );
}
