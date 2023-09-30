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
          data={data}
        />
      )}
      {/* <!-- for short main area --> */}
      {questionType === QuestionType.Short && (
        <ShortAnswerQuestionInput
          onStatementChange={setStatement}
          statement={statement}
        />
      )}
    </div>
  );
}
