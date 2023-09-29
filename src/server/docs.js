// opens the sidebar
function showSidebar() {
  const template = HtmlService.createTemplateFromFile('landing');
  const ui = template.evaluate().setTitle('MateriALL');
  DocumentApp.getUi().showSidebar(ui);
}

// includes file
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// makes the worksheet from answer sheet
function makeWorkSheet() {
  const currID = DocumentApp.getActiveDocument().getId();
  const file = DriveApp.getFileById(currID);
  const currName = file.getName();
  // const source_folder = DriveApp.getFolderById(currID);
  const newFile = file.makeCopy(
    'WorkSheet ' +
      currName +
      ' ' +
      Utilities.formatDate(
        new Date(),
        Session.getScriptTimeZone(),
        "yyyy.MM.dd 'at' HH:mm:ss z"
      )
  );
  const newFileId = newFile.getId();
  const newURL = newFile.getUrl();
  const newDocBody = DocumentApp.openById(newFileId).getBody();
  newDocBody.replaceText('Your Added Questions', 'Worksheet');
  newDocBody.replaceText('Instruction to convert to worksheet:.*$', '');
  newDocBody.replaceText('Answer:.*$', 'Answer:\n');
  provideNewDocURL(newURL);
}

// gets the worksheet url
function provideNewDocURL(newURL) {
  const currDoc = DocumentApp.getActiveDocument();
  const style = {};
  style[DocumentApp.Attribute.FONT_SIZE] = 10;
  const instructionPar = currDoc
    .getBody()
    .insertParagraph(
      1,
      'Worksheet for this answer key was generated. The link is:'
    );
  instructionPar.setAttributes(style);
  const linkPar = currDoc.getBody().insertParagraph(2, `${newURL}\n`);
  linkPar.setAttributes(style);
  linkPar.setLinkUrl(newURL);
}

// inserts images to google doc
function insertImgToDoc() {
  const userProperties = PropertiesService.getUserProperties();
  const imgresult = JSON.parse(userProperties.getProperty('CHECKED_IMG'));
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  for (var i = 0; i < imgresult.length; i++) {
    const image = UrlFetchApp.fetch(imgresult[i]).getBlob();
    const currI = body.appendImage(image);
    currI.setWidth(currI.getWidth() * 0.3);
    currI.setHeight(currI.getHeight() * 0.3);
  }
}

// inserts content to google doc
export function insertToDoc(text) {
  const body = DocumentApp.getActiveDocument().getBody();

  let isEmpty = true;
  for (var i = 0; i < body.getNumChildren(); i++) {
    if (body.getChild(i).getText() != '') {
      isEmpty = false;
      break;
    }
  }
  if (isEmpty) {
    const style = {};
    style[DocumentApp.Attribute.FONT_SIZE] = 10;
    // const answerKeyTitle = body.insertParagraph(0, "Your Added Questions");
    const instructionText = body.insertParagraph(
      1,
      'Instruction to convert to worksheet: Please make sure you convert your answer key to a material! Go to the Google Docs toolbar --> Extensions --> MateriALL --> Convert Answer Key to Worksheet. This current document will become your answer key.'
    );
    instructionText.setAttributes(style);
  }

  body.appendParagraph(text);
}

// ===== functions for all pages ===========================================

// gets new page content to generate
function newPage(page) {
  return HtmlService.createTemplateFromFile(page).evaluate().getContent();
}

// ===== functions for landing.html ========================================
// function test() {
//   Logger.log(saveSlideID("https://docs.google.com/presentation/d/1oGmPZ0SFMrHCslWdR0Sqvyxn_wGnKvRTcK20IzqxZ8c/edit#slide=id.p"))
// }

// updates current slide url
function saveSlideID(url) {
  const userProperties = PropertiesService.getUserProperties();
  // delete previous stored slide first
  userProperties.deleteAllProperties();
  const myRe = /presentation\/d\/([a-zA-Z0-9-_]+)/;
  const presentationId = myRe.exec(url)[1];
  userProperties.setProperty('PRESENTATION_ID', presentationId);
  return true;
}

// ===== functions for modal.html ========================================

// get previously selected elements
export function getCheckedData() {
  const userProperties = PropertiesService.getUserProperties();
  const checkedData = userProperties.getProperty('CHECKED_TEXT');
  const dataText = { text: checkedData };
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(dataText),
  };
  // backup API: "https://materiall.herokuapp.com/autogenerate"
  const response = UrlFetchApp.fetch(
    'https://materiall.onrender.com/autogenerate',
    options
  );
  const result = JSON.parse(response.getContentText());

  const imgresult = JSON.parse(userProperties.getProperty('CHECKED_IMG'));

  return [result, imgresult];
}

// gets thumbnail for slides
function getThumbnailUrl() {
  const userProperties = PropertiesService.getUserProperties();
  const presentationId = userProperties.getProperty('PRESENTATION_ID');
  const currPage = parseInt(userProperties.getProperty('CURR_PAGE'), 10);
  const presentationPageIds = JSON.parse(
    userProperties.getProperty('PAGE_IDS')
  );
  const thumbnailJson = Slides.Presentations.Pages.getThumbnail(
    presentationId,
    presentationPageIds[currPage],
    { 'thumbnailProperties.thumbnailSize': 'SMALL' }
  );
  return thumbnailJson.contentUrl;
}
