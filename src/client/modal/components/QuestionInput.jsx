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
          setStatement={setStatement}
          setAnswer={setAnswer}
          statement={statement}
          answer={answer}
          data={data}
        />
      )}

      {/* <!-- for trueFalse main area --> */}
      {questionType === QuestionType.TrueFalse && (
        <TrueFalseQuestionInput
          setStatement={setStatement}
          setAnswer={setAnswer}
          statement={statement}
          answer={answer}
          data={data}
        />
      )}

      {/* <!-- for blank main area --> */}
      {questionType === QuestionType.Blank && (
        <BlankQuestionInput
          setStatement={setStatement}
          setAnswer={setAnswer}
          statement={statement}
          answer={answer}
          data={data}
        />
      )}

      {/* <!-- for multiple main area --> */}
      {questionType === QuestionType.Multiple && (
        <MultipleQuestionInput
          setStatement={setStatement}
          setAnswer={setAnswer}
          statement={statement}
          answer={answer}
          data={data}
        />
      )}
      {/* <!-- for short main area --> */}
      {questionType === QuestionType.Short && (
        <ShortAnswerQuestionInput
          setStatement={setStatement}
          setAnswer={setAnswer}
          statement={statement}
          answer={answer}
          data={data}
        />
      )}
    </div>
  );
}
