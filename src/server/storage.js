// saves current selected elements
export function saveClickedElements(checkedText) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('CHECKED_TEXT', checkedText);
}

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
