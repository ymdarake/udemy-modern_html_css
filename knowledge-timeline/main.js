((selector, className) => {
  const items = document.querySelectorAll(selector);

  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () => {
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add(className);
      }
    });
  };

  window.addEventListener('load', run);
  window.addEventListener('resize', run);
  window.addEventListener('scroll', run);
})('#timeline li', 'show');
