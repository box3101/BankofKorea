(function () {

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
  function navigator() {
    const $$gnbItem = document.querySelectorAll(".gnbItem");
    const $gnbItem = document.querySelector(".gnbItem");
    const $subMenu = document.querySelector(".subMenu li");

    // 각 첫번째 메뉴 활성화 프로젝트 진행 시 삭제해주세요.
    $gnbItem.classList.add("on");
    $subMenu.classList.add("on");
    // 여기까지

    $$gnbItem.forEach(function (el) {
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

  // 공통 팝업
  document.addEventListener('DOMContentLoaded', function () {
    window.renderPopupType1 = function () {
      let popupCnt = document.querySelector('.compopup-container');
      let html = `
      <div class="com-popup">
        <div class="popup-content">
          <div class="popup-title">제목</div>
          <div class="popup-body">
            <div>타입1</div>
            <button onclick="renderPopupType1_1(event)">팝업 타입1-1</button>
            <button onclick="closePopup(event)">닫기</button>
          </div>
        </div>
      </div>
      `
      popupCnt.innerHTML = html;
    },
      window.renderPopupType1_1 = function (event) {
        event.stopPropagation();
        let popupCnt = document.querySelector('.compopup-container');
        let html = `
      <div class="com-popup">
        <div class="popup-content">
          <div class="popup-title">타입1-1</div>
          <div class="popup-body">
            <div>타입1</div>
            <button onclick="closePopup(event)">닫기</button>
          </div>
        </div>
      </div>
      `
        popupCnt.innerHTML += html;
      },
      window.renderPopupType2 = function () {
        let popupCnt = document.querySelector('.compopup-container');
        let html = `
      <div class="com-popup">
        <div class="popup-content">
          <div class="popup-title">제목2</div>
          <div class="popup-body">
            <div>타입2</div>
            <button onclick="closePopup(event)">닫기</button>
          </div>
        </div>
      </div>
      `
        popupCnt.innerHTML = html;
      },
      window.closePopup = function (e) {
        let target = e.target.closest(".com-popup");
        target.classList.add("hidden")
      }
  });

  // 달력
  function datePicker() {
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

  // 공통 로딩후
  function updateOnEvt(){
    document.querySelectorAll('.cnt-wrap').forEach(el => el.classList.add("v-motion"));
    document.querySelectorAll('.tab-contents .tab-item').forEach(el => el.classList.add("v-motion"));
  }

  function eventBinding() {
    if (document.querySelector('.com-btn')) comBtnActive();
    if (document.querySelector(".com-tab-wrap")) comTab();
    if (document.querySelector(".com-date-range")) datePicker();

    // 공통
    navigator();
    updateOnEvt();
  }

  function init() {
    eventBinding();
  }

  init();
})();
