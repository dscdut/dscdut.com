/* eslint-disable no-restricted-syntax */
const EXTRA_OFFSET = 300;

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const { clientHeight, clientWidth } = document.documentElement;
  const rectHeightOffset = rect.bottom - rect.top + EXTRA_OFFSET;
  const rectWidthOffset = rect.right - rect.left + EXTRA_OFFSET;
  return (
    rect.top >= 0 - rectHeightOffset
    && rect.left >= 0 - rectWidthOffset
    && rect.bottom <= (windowHeight || clientHeight) + rectHeightOffset
    && rect.right <= (windowWidth || clientWidth) + rectWidthOffset
  );
};

const applyImageFadeInTransition = () => {
  let images = [];
  images = document.querySelectorAll('img:not([role="presentation"])');
  // eslint-disable-next-line prefer-const
  for (let image of images) {
    if (isInViewport(image)) {
      image.style.opacity = 1;
    } else {
      image.onload = () => { image.style.opacity = 1; };
    }
  }
};

export default applyImageFadeInTransition;
