import React from 'react';

export function OriginalQuestionInput({ setStatement, statement }) {
  return (
    <div id="originalDiv" className="question-edit-container">
      <div>
        You selected the original content source below to make a question. To
        add the content in its plain form, click "add." To make it into another
        question type, click an option on the left.
      </div>
      <div className="question-edit-label">source content</div>
      <textarea
        className="question-edit-textarea"
        type="text"
        id="originalQ"
        value={statement}
        onChange={(e) => {
          setStatement(e.currentTarget.value);
        }}
        rows="2"
        cols="50"
      ></textarea>
      <div className="margin-top-20">
        Doesn't look right? To return to the sidebar and select other source
        content, click on the "x".
      </div>
    </div>
  );
}
