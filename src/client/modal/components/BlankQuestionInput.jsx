import React, { useEffect, useState } from 'react';
import { PopupModal } from './PopupModal';

export function BlankQuestionInput({
  setStatement,
  setAnswer,
  statement,
  answer,
  data,
}) {
  // useEffect(() => {
  //   setAnswer(answer);
  // }, [answer]); // as [answer] changes {setAnswer} is called

  useEffect(() => {
    setStatement(data.blank.blank_sentence);
    setAnswer(data.blank.answer);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
          onClick={(e) => {
            setIsPopupOpen(true);
          }}
        >
          edit blanks
        </div>
      </div>
      <div className="read-only-box" type="text" id="blankQ">
        {statement}
      </div>
      <div className="question-edit-label">answer</div>
      <div className="read-only-box" type="text" id="blankA">
        {answer}
      </div>
      {isPopupOpen && (
        <PopupModal
          onCloseClick={() => setIsPopupOpen(false)}
          headerTypeText={'Fill-in-The-Blank Question'}
          body={
            <BlankPopup
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

const getInitialSelectedIndice = (beginning, answer) => {
  const selectedIndice = [];
  let index = 0;
  if (beginning.length > 0) {
    index += beginning.split(' ').length;
  }

  answer.split(' ').forEach(() => {
    selectedIndice.push(index);
    index++;
  });

  return selectedIndice;
};

function BlankPopup({
  close,
  setStatement,
  setAnswer,
  statement,
  answer,
  data,
}) {
  const words = data.text.split(' ');
  const [selectedIndice, setSelectedIndice] = useState(
    getInitialSelectedIndice(data.blank.beginning, data.blank.answer)
  );

  return (
    <div>
      <div class="question-title-bar">
        <div class="question-title">Blanks</div>
        <div class="tooltip-container tooltip-container-option-generate">
          <img class="tooltip tooltip-option-generate" />
          <span class="tooltiptext tooltiptext-option-generate">
            MateriALL used AI technology to generate these statements. You can
            write your own option as well.
          </span>
        </div>
      </div>
      <div class="margin-bottom-20px">
        Red, underlined words will be blank once converted. To toggle them blank
        or not blank, click on words.
      </div>
      <form id="blankOptions" class="options-form-sentence">
        {words.map((word, index) => {
          return (
            <React.Fragment>
              <input
                type="checkbox"
                name="blankOptions"
                value={word}
                id={`word-${index}`}
                onChange={() => {
                  setSelectedIndice((originalSelectedIndice) => {
                    if (originalSelectedIndice.includes(index)) {
                      return originalSelectedIndice.filter((selectedIndex) => {
                        return selectedIndex !== index;
                      });
                    } else {
                      return originalSelectedIndice.concat(index);
                    }
                  });
                }}
                checked={selectedIndice.includes(index)}
              />
              <label for={`word-${index}`}>{word} </label>
            </React.Fragment>
          );
        })}
        <div class="submit-btn-container">
          <input
            id="submit-blank"
            type="button"
            value="done"
            onClick={(e) => {
              close();
              setStatement(
                words
                  .map((word, index) => {
                    if (selectedIndice.includes(index)) {
                      if (word.endsWith('.')) {
                        return '_'.repeat(word.length - 1) + '.';
                      }
                      return '_'.repeat(word.length);
                    } else {
                      return word;
                    }
                  })
                  .join(' ')
                  .replaceAll('_ _', '___')
              );

              setAnswer(
                selectedIndice
                  .sort((a, b) => a - b)
                  .map((index) => {
                    return words[index];
                  })
                  .join(', ')
              );
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}
