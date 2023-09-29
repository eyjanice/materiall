import React, { useState } from 'react';
import { PopupModal } from './PopupModal';
import { OriginalQuestionInput } from './OriginalQuestionInput';
import { TrueFalseQuestionInput } from './TrueFalseQuesionInput';
import { BlankQuestionInput } from './BlankQuestionInput';
import { MultipleQuestionInput } from './MultipleQuestionInput';
import { ShortAnswerQuestionInput } from './ShortAnswerQuestionInput';

export const QuestionType = {
  Original: 'original',
  TrueFalse: 'trueFalse',
  Blank: 'blank',
  Multiple: 'multiple',
  Short: 'short',
};

export function QuestionInput({
  questionType,
  statement,
  setStatement,
  options,
  setOptions,
  answer,
  setAnswer,
  data,
}) {
  // Prop
  // question
  // options
  // answer

  return (
    <div className="main-question" id="mainQuestion">
      {/* <!-- for original main area --> */}
      {questionType === QuestionType.Original && (
        <OriginalQuestionInput
          onStatementChange={setStatement}
          statement={statement}
        />
      )}

      {/* <!-- for trueFalse main area --> */}
      {questionType === QuestionType.TrueFalse && (
        <TrueFalseQuestionInput
          onStatementChange={setStatement}
          onAnswerChange={setAnswer}
          statement={statement}
          data={data}
        />
      )}

      {/* <!-- for blank main area --> */}
      {questionType === QuestionType.Blank && (
        <BlankQuestionInput
          onStatementChange={setStatement}
          onAnswerChange={setAnswer}
          statement={statement}
          data={data}
        />
      )}

      {/* <!-- for multiple main area --> */}
      {questionType === QuestionType.Multiple && (
        <MultipleQuestionInput
          onStatementChange={setStatement}
          statement={statement}
        />
      )}
      {/* <!-- for short main area --> */}
      {questionType === QuestionType.Short && (
        <ShortAnswerQuestionInput
          onStatementChange={setStatement}
          statement={statement}
        />
      )}
      {/* <PopupModal
        headerTypeText={'True/False Question'}
        body={
          <>
            <div className="true-false-question-bar">
              <div className="question-title-bar">
                <div className="question-title">True Statements</div>

                <div className="tooltip-container tooltip-container-option-generate">
                  <img className="tooltip tooltip-option-generate" />
                  <span className="tooltiptext tooltiptext-option-generate">
                    MateriALL used AI technology to generate these statements.
                    You can write your own option as well.
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
          </>
        }
      /> */}
    </div>
  );
}
