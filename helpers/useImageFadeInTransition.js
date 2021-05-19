/* eslint-disable no-restricted-syntax */
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const { clientHeight, clientWidth } = document.documentElement;
  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (windowHeight || clientHeight) + (rect.bottom - rect.top)
    && rect.right <= (windowWidth || clientWidth)
  );
};

const useImageFadeInTransition = () => {
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

export default useImageFadeInTransition;
