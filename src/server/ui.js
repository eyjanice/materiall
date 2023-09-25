export const onOpen = (e) => {
  const menu = DocumentApp.getUi()
    .createAddonMenu()
    .addItem('Create Questions from Slides', 'openSidebar')
    .addItem('Sheet Editor', 'openDialog');

  if (e && e.authMode !== ScriptApp.AuthMode.NONE) {
    // Add a normal menu item (works in all authorization modes).
    menu.addItem('Convert Answer Key to Worksheet', 'makeWorkSheet');
  }

  menu.addToUi();
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  DocumentApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const openSidebar = () => {
  const template = HtmlService.createTemplateFromFile('sidebar');
  const html = template.evaluate().setTitle('MateriALL');
  DocumentApp.getUi().showSidebar(html);
};
