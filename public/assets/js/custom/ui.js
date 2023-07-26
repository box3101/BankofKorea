(function () {
  function comBtnActive() {
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

  function navi() {
    const $$gnbItem = document.querySelectorAll(".gnbItem");
    const $gnbItem = document.querySelector(".gnbItem");


    $$gnbItem.forEach(function (el) {
      el.addEventListener("click", function (e) {
        if (!this.classList.contains("on")) {
          $$gnbItem.forEach((item) => item.classList.remove("on"));
          this.classList.add("on");
        }
        else this.classList.remove("on");
      });
    });
  }

  function eventBinding() {
    if (document.querySelector('.com-btn')) {
      comBtnActive();
    }
    navi();
  }

  function init() {
    eventBinding();
  }

  init();
})();
