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
    serverFunctions.insertToDoc(value);
  }

  useEffect(() => {
    if (questionType === QuestionType.Blank) {
      setStatement(data.blank.blank_sentence);
    } else {
      setStatement(data.text);
    }
  }, [questionType]);

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

      <div>{statement}</div>
      <div>{answer}</div>
    </div>
  );
}
