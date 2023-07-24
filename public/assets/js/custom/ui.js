(function () {
  const comBtnActive = () => {
    const rippleElements = document.querySelectorAll('.com-btn');

    rippleElements.forEach(element => {
      element.addEventListener('click', e => {
        const rippleElement = document.createElement('span');
        rippleElement.classList.add('v-ripple-overlay');
        element.appendChild(rippleElement);
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        rippleElement.style.left = x + 'px';
        rippleElement.style.top = y + 'px';
        setTimeout(() => {
          rippleElement.remove();
        }, 500);
      });
    });
  }

  function eventBinding() {
    if (document.querySelector('.com-btn')) {
      comBtnActive();
    }
  }

  function init() {
    eventBinding();
  }

  init();
})();
