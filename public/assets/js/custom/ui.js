(function () {
	// 버튼 효과
	function comBtnActive() {
		const rippleElements = document.querySelectorAll(".com-btn");

		if (rippleElements) {
			rippleElements.forEach((element) => {
				element.addEventListener("click", (e) => {
					const rippleElement = document.createElement("span");
					rippleElement.classList.add("v-ripple-overlay");
					element.appendChild(rippleElement);
					const x = e.clientX - e.target.offsetLeft;
					const y = e.clientY - e.target.offsetTop;
					rippleElement.style.left = x + "px";
					rippleElement.style.top = y + "px";
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
					$$tabs.forEach((innerTab) => innerTab.classList.remove("on"));
					tab.classList.add("on");

					$$tabContents.forEach((cnt) => (cnt.style.display = "none"));
					$$tabContents[idx].style.display = "block";
				});
			});
		}
	}

	// 공통 select 커스텀
	function comSelect() {
		const $$selects = document.querySelectorAll(".cont-select");
		const $$btnSet = document.querySelectorAll(".btn-select");
		const $body = document.querySelector("body");

		$body.addEventListener("click", (e) => {
			$$btnSet.forEach((el) => {
				if (el.classList.contains("on") && e.target != el)
					el.classList.remove("on");
			});
		});

		$$selects.forEach((el) => {
			let btnSel = el.querySelector(".btn-select");
			let listMember = el.querySelector(".list-member");
			btnSel.addEventListener("click", () => {
				$$btnSet.forEach((el) => el.classList.remove("on"));
				btnSel.classList.toggle("on");
			});
			listMember.addEventListener("click", (e) => {
				if (e.target.classList.contains("list-item")) {
					let innerTxt = e.target.innerText;
					btnSel.innerText = innerTxt;
					btnSel.classList.remove("on");
				}
			});
		});
	}

	// 공통 전체메뉴
	function allMenu() {
		const $menuToggle = document.getElementById("menuToggle");
		if ($menuToggle) {
			$menuToggle.addEventListener("click", function (event) {
				event.preventDefault();
				const menuContent = document.getElementById("menuContent");
				if (
					menuContent.style.display === "none" ||
					menuContent.style.display === ""
				)
					menuContent.style.display = "block";
				else menuContent.style.display = "none";
			});
		}
	}

	// 공통 팝업
	window.openPop = function (element) {
		const popupElement = document.querySelector(`#${element}`);
		popupElement.classList.add("on");
		setTimeout(() => {
			popupElement.style.opacity = "1";
			popupElement.querySelector(".popup-content").style.transform = "scale(1)";

			//20230825 추가 팝업 스크롤바를 조건부로 표시
			const contentWrapper = document.querySelectorAll(".popup-body");
			if (contentWrapper) {
				contentWrapper.forEach((item) => {
					if (item.scrollHeight <= window.innerHeight - 100) {
						item.classList.remove("scroll"); // 스크롤이 필요 없으면 overflow-y를 hidden으로 설정
					} else {
						item.classList.add("scroll"); // 스크롤이 필요하면 overflow-y를 scroll로 설정
					}
				});
			}
		}, 50);
	};

	window.closePop = function () {
		const closePopBtns = document.querySelectorAll(".closePopBtn");
		closePopBtns.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.preventDefault();
				el.closest(".com-popup").classList.remove("on");
				setTimeout(() => {
					el.closest(".popup-content").style.transform = "scale(0.7)";
					el.closest(".com-popup").style.opacity = "0";
				}, 50);
			});
		});
	};

	// 공통 모션
	function updateOnEvt() {
		document
			.querySelectorAll(".gnb-wrap + .cnt-wrap")
			.forEach((el) => el.classList.add("v-motion"));
		document
			.querySelectorAll(".tab-contents .tab-item")
			.forEach((el) => el.classList.add("v-motion"));
	}

	//20230829 추가 기간선택 버튼
	function comPerioBtnActive() {
		const perioBtns = document.querySelectorAll(".perioBtns button");
		if (perioBtns) {
			perioBtns.forEach((btn) => {
				btn.addEventListener("click", (e) => {
					let target = e.target;

					perioBtns.forEach((btn) => btn.classList.remove("on"));
					target.classList.add("on");
				});
			});
		}
	}
	//20230829 추가 기간선택 버튼 eee

	function eventBinding() {
		comBtnActive();
		comTab();
		navigator();
		updateOnEvt();
		comSelect();
		allMenu();
		closePop();
		comPerioBtnActive();
	}

	function init() {
		eventBinding();
	}

	init();
})();



$(document).ready(function () {
  adjustHeaderPadding();
  function adjustHeaderPadding() {
    const gridBody = $(".ui-jqgrid-bdiv"); // jqGrid 바디
    const headerDiv = $(".ui-jqgrid-hdiv"); // jqGrid 헤더

    for (let i = 0; i < gridBody.length; i++) {
      // 스크롤바를 제외한 콘텐츠의 너비
      let scrollbarWidth = gridBody[i].offsetWidth - gridBody[i].clientWidth;

      // 스크롤바의 너비가 0보다 크다면 스크롤바가 존재 +  오른쪽 패딩을 추가
      if (scrollbarWidth > 0)
        $(headerDiv[i]).css("padding-right", scrollbarWidth + "px");
      // 스크롤바가 없다면 헤더 DIV의 오른쪽 패딩을 0
      else $(headerDiv[i]).css("padding-right", "0px");
    }
  }

	$(window).resize(function () {
		adjustHeaderPadding();
	});
});

