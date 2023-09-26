import React, { useState } from 'react';
import { serverFunctions } from '../../utils/serverFunctions';

export function SourceSelectionPage({ slides }) {
  const [pageNumber, setPageNumber] = useState(0);
  const slide = slides[pageNumber];
  return (
    <div className="main">
      <div id="output"></div>
      <div className="source-thumbnails">
        <div
          className="change-source"
          // TODO: onClick="backToLanding()"
        >
          <a>change source</a>
        </div>
        <div className="thumbnails">
          <button
            className="material-icons"
            type="button"
            style={{
              visibility: pageNumber === 0 ? 'hidden' : null,
            }}
            onClick={() => {
              setPageNumber((v) => {
                return v - 1;
              });
            }}
          >
            arrow_left
          </button>
          <span id="thumbnail">
            <img src={slide.thumbnailUrl} />
          </span>
          <button
            className="material-icons"
            type="button"
            style={{
              visibility: pageNumber === slides.length - 1 ? 'hidden' : null,
            }}
            onClick={() => {
              setPageNumber((v) => {
                return v + 1;
              });
            }}
          >
            arrow_right
          </button>
        </div>
        <div className="page-input">
          <span>slide </span>
          <input
            id="pageNumber"
            onChange={(v) => setPageNumber(v - 1)}
            value={pageNumber + 1}
          />
          <span> of </span>
          <span id="totalPages">{slides.length}</span>
        </div>
      </div>

      <div className="detected-content-container">
        <div className="detected-content">
          <div>
            <h1>Detected Source Content</h1>
            <div className="tooltip">
              <span className="material-symbols-outlined">info</span>
              <div className="tooltiptext">
                MateriALL is only able to detect text boxes and images.
              </div>
            </div>
          </div>
          <div className="detected-description">
            <p>
              <DetectedContent slide={slides[pageNumber]} />
              Below are the source content that MateriALL detected based on the
              slide above.
            </p>
          </div>
          <form id="textOptions"></form>

          <div className="subtext">
            Don’t forget to convert your answer key into a material!
            <br />
            Go to your Google Docs™ toolbar - Extensions -<br />
            MateriALL - Convert Answer Key to Worksheet
          </div>
        </div>
      </div>
    </div>
  );
}

function DetectedContent({ slide }) {
  // use map - one for texts and one for image
  const [checked, setChecked] = useState({});
  function onClickHandler() {
    console.log(Object.keys(checked));
    serverFunctions
      .saveClickedElements(Object.keys(checked).join(' '))
      .then(() => serverFunctions.openDialog());
  }
  return (
    <div>
      <ul>
        {slide.texts.map((text, index) => {
          if (text !== '\n' && text !== '\u000b' && text !== ' ')
            return (
              <li>
                <input
                  type="checkbox"
                  className="textOption"
                  id={`text-${index}`}
                  onClick={(e) => {
                    const selected = e.currentTarget.checked;
                    setChecked((prevChecked) => {
                      if (selected) {
                        prevChecked[text] = true;
                      } else {
                        delete prevChecked[text];
                      }
                      console.log(prevChecked);
                      return prevChecked;
                    });
                  }}
                  value={text}
                />
                <label for={`text-${index}`}>{text}</label>
              </li>
            );
        })}
      </ul>
      <button className="btn btn-green" onClick={onClickHandler}>
        generate
      </button>
    </div>
  );
}
