import React, { useEffect, useState } from 'react';
import { QuestionInput, QuestionType } from './QuestionInput';
import { serverFunctions } from '../../utils/serverFunctions';

export function QuestionEditor({ data }) {
  const [questionType, setQuestionType] = useState(QuestionType.Original);
  const [statement, setStatement] = useState(data.text);
  const [options, setOptions] = useState('');
  const [answer, setAnswer] = useState('');

  function onClickQuestionTypeHandler(e) {
    setQuestionType(e.currentTarget.value);
  }

  function onClickAddHandler() {
    // question. options. answer
    let value = statement;
    value = value.split('<br>').join('\n');
    serverFunctions.insertToDoc(value).then(() => {
      window.parent?.postMessage('closeDialog', '*');
    });
  }

  return (
    <div className="modal-container" id="afterLoading">
      {/* <!-- form for question types --> */}
      <div className="main-editing-container" id="cover-area-1">
        <div className="main-menu">
          <form className="question-type-form">
            <input
              type="radio"
              id="original"
              className="questionType"
              name="questionType"
              value={QuestionType.Original}
              onClick={onClickQuestionTypeHandler}
              defaultChecked
            />
            <label for="original">Original</label>
            <input
              type="radio"
              id="trueFalse"
              className="questionType"
              name="questionType"
              value={QuestionType.TrueFalse}
              onClick={onClickQuestionTypeHandler}
            />
            <label for="trueFalse">True/False</label>
            <input
              type="radio"
              id="blank"
              className="questionType"
              name="questionType"
              value={QuestionType.Blank}
              onClick={onClickQuestionTypeHandler}
            />
            <label for="blank">Fill-in-The Blank</label>
            <input
              type="radio"
              id="multiple"
              className="questionType"
              name="questionType"
              value={QuestionType.Multiple}
              onClick={onClickQuestionTypeHandler}
            />
            <label for="multiple">Multiple Choice</label>
            <input
              type="radio"
              id="short"
              className="questionType"
              name="questionType"
              value={QuestionType.Short}
              onClick={onClickQuestionTypeHandler}
            />
            <label for="short">Short Answer</label>
          </form>

          <button className="btn btn-orange-add" onClick={onClickAddHandler}>
            add
          </button>
        </div>
        <QuestionInput
          questionType={questionType}
          statement={statement}
          setStatement={setStatement}
          options={options}
          setOptions={setOptions}
          answer={answer}
          setAnswer={setAnswer}
          data={data}
        />
      </div>
      <PreviewBox
        questionType={questionType}
        statement={statement}
        answer={answer}
      />
    </div>
  );
}

function PreviewBox({ questionType, statement, answer, options }) {
  const [answerPreviewOn, setAnswerPreviewOn] = useState(true);

  let answerPreviewText;
  let worksheetPreviewText;

  if (questionType === QuestionType.Original) {
    answerPreviewText = <div>{statement}</div>;
    worksheetPreviewText = <div>{statement}</div>;
  } else if (questionType === QuestionType.TrueFalse) {
    answerPreviewText = (
      <>
        <div>True or False? {statement}</div>
        <div>Answer: {answer}</div>
      </>
    );
    worksheetPreviewText = (
      <>
        <div>True or False? {statement} </div>
        <div>Answer:</div>
      </>
    );
  } else if (questionType === QuestionType.Blank) {
    answerPreviewText = (
      <>
        <div>{statement}</div>
        <div>Answer: {answer}</div>
      </>
    );
    worksheetPreviewText = (
      <>
        <div>{statement}</div>
        <div>Answer:</div>
      </>
    );
  } else if (questionType === QuestionType.Multiple) {
    answerPreviewText = (
      <>
        <div>{statement}</div>
        <div>{options}</div>
        <div>Answer: {answer}</div>
      </>
    );
    worksheetPreviewText = (
      <>
        <div>{statement}</div>
        <div>{options}</div>
        <div>Answer:</div>
      </>
    );
  } else {
    answerPreviewText = (
      <>
        <div>{statement}</div>
        <div>Answer: {answer}</div>
      </>
    );
    worksheetPreviewText = (
      <>
        <div>{statement}</div>
        <div>Answer:</div>
      </>
    );
  }

  return (
    <div className="preview-container">
      <img
        src="https://i.imgur.com/D97YLAT.png"
        className="preview-decor-left"
      />
      <img
        src="https://i.imgur.com/NFvNaQr.png"
        className="preview-decor-right"
      />
      <div className="preview-area">
        <div className="preview-btns">
          <form className="preview-btn-form">
            <input
              className="preview-btn-show"
              type="radio"
              name="showPreview"
              id="showAnswerKey"
              onClick={(e) => {
                setAnswerPreviewOn(true);
              }}
            />
            <label for="showAnswerKey">Answer Key Preview</label>
            <input
              className="preview-btn-show"
              type="radio"
              name="showPreview"
              id="showWorksheet"
              onClick={(e) => {
                setAnswerPreviewOn(false);
              }}
            />
            <label for="showWorksheet">Worksheet Preview</label>
          </form>
          <div className="tooltip-container tooltip-container-preview">
            <img className="tooltip tooltip-preview" />
            <span className="tooltiptext tooltiptext-preview">
              These previews show how your generated content will look once
              MateriALL has converted them.
            </span>
          </div>
        </div>
        <div className="preview-content">
          <div id="worksheetPreview" className="preview-text">
            {answerPreviewOn === false && worksheetPreviewText}
          </div>
          <div id="answerKeyPreview" className="preview-text">
            {answerPreviewOn && answerPreviewText}
          </div>
          <div id="imagePreview" className="preview-img"></div>
        </div>
      </div>
    </div>
  );
}
