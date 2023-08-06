(function () {

  // 버튼 효과
  function comBtnActive() {
    const rippleElements = document.querySelectorAll('.com-btn');

    if (rippleElements) {
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

    if ($$tabs) {
      $$tabs.forEach(function (tab, idx) {
        tab.querySelector("button").addEventListener("click", function (e) {
          e.preventDefault();
          $$tabs.forEach(innerTab => innerTab.classList.remove("on"));
          tab.classList.add("on");

          $$tabContents.forEach(cnt => cnt.style.display = "none");
          $$tabContents[idx].style.display = "block";
        });
      });
    }
  }

  // 공통 select 커스텀
  function comSelect() {
    const $$selects = document.querySelectorAll('.cont-select');
    const $$btnSet = document.querySelectorAll('.btn-select');
    const $body = document.querySelector('body');

    $body.addEventListener("click", (e) => {
      $$btnSet.forEach((el) => {
        if (el.classList.contains("on") && e.target != el) el.classList.remove("on")
      })
    })

    $$selects.forEach((el) => {
      let btnSel = el.querySelector(".btn-select");
      let listMember = el.querySelector(".list-member");
      btnSel.addEventListener("click", () => {
        $$btnSet.forEach((el) => el.classList.remove("on"))
        btnSel.classList.toggle("on");
      });
      listMember.addEventListener("click", (e) => {
        if (e.target.classList.contains('list-item')) {
          let innerTxt = e.target.innerText;
          btnSel.innerText = innerTxt;
          btnSel.classList.remove("on");
        }
      });
    });
  }



  // btnSel이 on이고 e.target이 listMeber가 아닐땐 

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

  // 공통 모션
  function updateOnEvt() {
    document.querySelectorAll('.cnt-wrap').forEach(el => el.classList.add("v-motion"));
    document.querySelectorAll('.tab-contents .tab-item').forEach(el => el.classList.add("v-motion"));
  }

  function eventBinding() {
    comBtnActive();
    comTab();
    navigator();
    updateOnEvt();
    comSelect();
  }

  function init() {
    eventBinding();
  }

  init();
})();
