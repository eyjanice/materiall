const presentationIdRegex = /presentation\/d\/([a-zA-Z0-9-_]+)/;

// gets slide with id
export function getSlide(slideUrl) {
  const presentationId = presentationIdRegex.exec(slideUrl)[1];
  const presentation = Slides.Presentations.get(presentationId);
  const slides = presentation.slides;
  return slides.map((slide) => {
    const currPageId = slide.objectId;
    const thumbnailJson = Slides.Presentations.Pages.getThumbnail(
      presentationId,
      currPageId,
      { 'thumbnailProperties.thumbnailSize': 'SMALL' }
    );

    const currPageElements = slide.pageElements;
    const texts = [];
    const imageUrls = [];
    currPageElements.forEach((element) => {
      if (
        element.shape &&
        element.shape.shapeType === 'TEXT_BOX' &&
        element.shape.text
      ) {
        const currTextElements = element.shape.text.textElements;
        if (currTextElements) {
          currTextElements.forEach((text) => {
            if (text.textRun) {
              texts.push(text.textRun.content);
            }
          });
        }
      } else if (element.image) {
        imageUrls.push(element.image.contentUrl);
      }
    });

    return {
      thumbnailUrl: thumbnailJson.contentUrl,
      texts,
      imageUrls,
    };
  });
}

// gets elements for each slide page
export function getPageTextAndImg(slidePage) {
  const userProperties = PropertiesService.getUserProperties();
  const pageDetails = [];
  let currPage = slidePage - 1;
  const totalPages = getTotalPages();
  if (currPage < 0) {
    currPage = totalPages - 1;
  }
  if (currPage >= totalPages) {
    currPage = 0;
  }
  const thumbnail = userProperties.getProperty(`${currPage}_thumbnail`);
  const text = JSON.parse(userProperties.getProperty(`${currPage}_text`));
  const img = JSON.parse(userProperties.getProperty(`${currPage}_img`));
  pageDetails.push(thumbnail, text, img, currPage + 1);
  return pageDetails;
}

// gets the total page amount for the slide
export function getTotalPages() {
  const userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperty('TOTAL_PAGES');
}

// saves current selected elements
export function saveClickedElements(checkedText, checkedImgUrl) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('CHECKED_TEXT', checkedText);
  userProperties.setProperty('CHECKED_IMG', JSON.stringify(checkedImgUrl));
}
