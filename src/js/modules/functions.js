//INFO checking for webp support, adding a webp or no-webp class for HTML
export const isWebp = () => {
  //INFO checking for webp support
  const testWebp = callback => {
    let webP = new Image();
    webP.onload = webP.onerror = () => {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  };
  //INFO adding a webp or no-webp class for HTML
  testWebp(support => {
    let className = support === true ? 'webp' : 'no-webp';
    document.body.classList.add(className);
  });
};
