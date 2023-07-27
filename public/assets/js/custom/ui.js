(function () {

  // 공통 motion
  function comMotion(){
    document.querySelector('.cnt-wrap').classList.add("v-motion");
    let $$tabList = document.querySelectorAll('.tab-contents .cnt__body');
    $$tabList.forEach(el => el.classList.add("v-motion"));
  }

  // 버튼 효과
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

  // 네비게이션
  function navi() {
    const $$gnbItem = document.querySelectorAll(".gnbItem");
    const $gnbItem = document.querySelector(".gnbItem");

    // 첫번째 대시보드만 활성화
    $gnbItem.classList.add("on");

    // 

    $$gnbItem.forEach(function (el, idx) {
      // 클릭 이벤트
      el.addEventListener("click", function (e) {
        if (!this.classList.contains("on")) {
          $$gnbItem.forEach((item) => item.classList.remove("on"));
          this.classList.add("on");
        }
        // else this.classList.remove("on");
      });
    });
  }

  // 공통 탭
  function comTab() {
    const $$tabs = document.querySelectorAll(".com-tab-wrap .head li");
    const $$tabContents = document.querySelectorAll(".tab-contents .cnt__body");

    $$tabs.forEach(function (tab, idx) {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        $$tabs.forEach(innerTab => innerTab.classList.remove("on"));
        tab.classList.add("on");

        $$tabContents.forEach(cnt => cnt.style.display = "none");
        $$tabContents[idx].style.display = "block";
      });
    });
  }

  // 달력
  function comDatePicker() {
    const $$datePickerbtns = document.querySelectorAll(".datepicker-button");

    $$datePickerbtns.forEach((btn, idx) => {
      const input = document.querySelectorAll('.datepicker-input')[idx];

      const datepicker = flatpickr(input, {
        dateFormat: "Y.m.d",
        allowInput: true,
        locale: 'ko'
      });

      btn.addEventListener("click", () => {
        datepicker.open();
      })
    });
  }


  function eventBinding() {
    comMotion();
    navi();
    if (document.querySelector('.com-btn')) comBtnActive();
    if (document.querySelector(".com-tab-wrap")) comTab();
    if (document.querySelector(".com-date-range")) comDatePicker()
  }

  function init() {
    eventBinding();
  }

  init();
})();
