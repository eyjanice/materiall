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
