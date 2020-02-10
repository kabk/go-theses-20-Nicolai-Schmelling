
const chapters = Array.from(document.querySelectorAll('.chapter-wrapper'));

chapters.forEach(chapter => {
  const glossary = chapter.querySelector('.glossary');
  const glossaryItems = Array.from(chapter.querySelectorAll('.glossary-item'));
  const left = chapter.querySelector('.arrow-left');
  const right = chapter.querySelector('.arrow-right');
  const buffer = chapter.querySelector('.glossary-buffer');
  const getBufferWidth = () => buffer.getBoundingClientRect().width;

  // You can also add this properties as 'scroll-snap-type and 'scroll-snap-align'
  // to your .glossary and .glossary-item in your css files
  glossary.style.scrollSnapType = 'x mandatory';
  glossaryItems.forEach(item => {
    item.style.scrollSnapAlign = 'center';
  });

  function getCurrentIndex() {
    let closestIndex = 0;
    let distance = Infinity;
    const bufferWidth = getBufferWidth();
    glossaryItems.forEach((item, index) => {
      const itemDistance = Math.abs(item.getBoundingClientRect().x - bufferWidth);
      if (itemDistance < distance) {
        distance = itemDistance;
        closestIndex = index;
      }
    });
    return closestIndex;
  }

  function navigate(direction) {
    const currentIndex = getCurrentIndex() + direction
    const targetGlossaryItem = glossaryItems[currentIndex];
    if (targetGlossaryItem) {
      const scrollPositionLeft = targetGlossaryItem.offsetLeft - getBufferWidth();
      glossary.scroll({ left: scrollPositionLeft, behavior: 'smooth' });
    }
  }

  left.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(-1);
  });
  right.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(+1);
  });
});