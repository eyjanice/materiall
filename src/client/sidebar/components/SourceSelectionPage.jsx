import React, { useState } from 'react';

// function getPageContent() {
//   let slidePage = document.getElementById('pageNumber').value;
//   google.script.run
//     .withSuccessHandler(displayContent)
//     .getPageTextAndImg(parseInt(slidePage));
// }

// function displayContent(pageDetails) {
//   let thumbnailDiv = document.getElementById('thumbnail');
//   thumbnailDiv.innerHTML =
//     "<image src='" + pageDetails[0] + "' atl='pageThumbnail'/>";
//   let textOptionsDiv = document.getElementById('textOptions');
//   var currTextOptions = '';
//   pageDetails[1].forEach((e, i) => {
//     if (e !== '\n' && e !== '\u000b' && e !== ' ') {
//       currTextOptions += `<input type="checkbox" class="textOption" id="text-${i}" name="text-${i}" value="${e}">
//     <label for="text-${i}">${e}</label><br>`;
//     }
//   });
//   var currImgOptions = '';
//   pageDetails[2].forEach((e, i) => {
//     currImgOptions += `<input type="checkbox" class="imgOption" id="img-${i}" name="img-${i}" value="${e}">
//     <label for="img-${i}"><img src="${e}" width="200"/></label><br>`;
//   });
//   textOptionsDiv.innerHTML = currTextOptions;
//   textOptionsDiv.innerHTML += currImgOptions;
//   textOptionsDiv.innerHTML += `<button class="btn btn-green" id="create-question" onclick="saveCheckedItems()">generate</button>`;
//   document.getElementById('pageNumber').value = pageDetails[3];
// }

// function updatePageNumber(action) {
//   var pageInput = document.getElementById('pageNumber');
//   var pageNumber = parseInt(pageInput.value);
//   if (action === 'next') {
//     pageInput.value = pageNumber + 1;
//   } else {
//     pageInput.value = pageNumber - 1;
//   }
//   getPageContent();
// }

// function displayTotal(total) {
//   var pageInput = document.getElementById('totalPages');
//   pageInput.innerHTML = parseInt(total);
// }

// function changePage(page) {
//   document.open();
//   document.write(page);
//   document.close();
// }

// function saveCheckedItems() {
//   var checkedTextArr = Array.from(
//     document.querySelectorAll("input[class='textOption']:checked")
//   ).map((elem) => elem.value.replace(/\s+/g, ' ').trim());
//   var checkedText = checkedTextArr.join(' ');
//   var checkedImgUrl = Array.from(
//     document.querySelectorAll("input[class='imgOption']:checked")
//   ).map((elem) => elem.value);

//   google.script.run
//     .withSuccessHandler(showModal)
//     .saveClickedElements(checkedText, checkedImgUrl);
// }

// function showModal() {
//   google.script.run.withSuccessHandler().showDialog();
// }

// function convertToWorksheet() {
//   google.script.run
//     .withSuccessHandler(alert('WorkSheet is in your Google Drive™ now.'))
//     .makeWorkSheet();
// }

// function backToLanding() {
//   google.script.run.withSuccessHandler(changePage).newPage('landing');
// }

// google.script.run.withSuccessHandler(displayContent).getPageTextAndImg(1);

// google.script.run.withSuccessHandler(displayTotal).getTotalPages();

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
              {' '}
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
  // slide.texts
  // slide.imageUrls
}
