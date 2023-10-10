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
  const html = HtmlService.createTemplateFromFile('modal')
    .evaluate()
    .append(
      `<script>
        window.addEventListener('message', function(event) {
          if (event.data === "closeDialog") {
              google.script.host.close();
          }
        }, false);
      </script>`
    )
    .setWidth(800)
    .setHeight(700);
  DocumentApp.getUi().showModalDialog(html, 'MateriALL Question Editor');
};

export const openSidebar = () => {
  const template = HtmlService.createTemplateFromFile('sidebar');
  const html = template.evaluate().setTitle('MateriALL');
  DocumentApp.getUi().showSidebar(html);
};
