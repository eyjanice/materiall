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
