const menu = [
	{
		category: "sub",
		title: "대시보드",
		items: [
			{ url: "대시보드", title: "개인대시보드" },
			{ url: "타임라인", title: "타임라인" },
			{ url: "TotalAlign", title: "Total Align" },
		],
	},
	{
		category: "sub",
		title: "평가설정",
		items: [
			{ url: "근무경력", title: "근무경력" },
			{ url: "임원부서장연계", title: "임원부서장연계" },
			{ url: "평가조직관리", title: "평가조직관리" },
			{ url: "평가직책관리", title: "평가직책관리" },
			{ url: "평가군관리", title: "평가군관리" },
			{ url: "평가등급배분표", title: "평가등급 배분표" },
		],
	},
	{
		category: "sub",
		title: "평가관리",
		items: [
			{
				url: "목표면담설정", title: "목표·면담 설정",
				subItems: [
					{ url: "목표마스터설정", title: "목표마스터 설정" },
					{ url: "목표라인설정", title: "목표라인 설정" },
				]
			},
			{
				url: "개인성과평점", title: "개인성과평점",
				subItems: [
					{ url: "성과평가마스터설정", title: "성과평가 마스터 설정" },
					{ url: "성과평가라인설정", title: "성과평가 라인 설정" },
					{ url: "평가조정회의설정", title: "평가조정회의 설정" },
				]
			},
			{
				url: "리더십리뷰설정", title: "리더십리뷰 설정",
				subItems: [
					{ url: "리더십리뷰마스터설정", title: "리더십리뷰 마스터 설정" },
					{ url: "리더십리뷰라인설정", title: "리더십리뷰 라인설정" },
				]
			},
			{
				url: "개인성과평점", title: "개인성과평점",
				subItems: [
					{ url: "성과평가마스터설정", title: "성과평가 마스터 설정" },
					{ url: "성과평가라인설정", title: "성과평가 라인 설정" },
				]
			},
		],
	},
	{
		category: "sub",
		title: "평가운영",
		items: [
			{ url: "개인성과평가운영", title: "개인성과평가 운영" },
			{ url: "리더십리뷰운영", title: "리더십리뷰 운영" },
			{ url: "일하는방식리뷰 운영", title: "일하는방식리뷰운영" },
			{ url: "목표및면담운영", title: "목표 및 면담운영" },
			{ url: "이의신청관리", title: "이의신청관리" },
			{ url: "라인오류신고", title: "라인오류신고" },
			{ url: "업무이력조회", title: "업무이력조회" },
		],
	},
	{
		category: "sub",
		title: "평가결과",
		items: [
			{ url: "개인성과평가 결과", title: "개인성과평가결과" },
			{ url: "리더십리뷰결과", title: "리더십리뷰 결과" },
			{ url: "일하는방식리뷰결과", title: "일하는방식리뷰 결과" },
			{ url: "목표및면담조회", title: "목표 및 면담조회" },
			{ url: "평가결과출력", title: "평가결과출력" },
			{
				url: "과거결과보기", title: "과거결과보기",
				subItems: [
					{ url: "과거근무성적평가결과", title: "과거근무성적평가결과" },
					{ url: "과거관리능력조사결과", title: "과거관리능력조사결과" },
					{ url: "과거동료평가결과", title: "과거동료평가 결과" },
				]
			},
		],
	},
	{
		category: "sub",
		title: "승진관리",
		items: [
			{ url: "승진이동마스터설정정", title: "승진·이동마스터설정" },
			{ url: "자기신고서관리", title: "자기신고서관리" },
			{ url: "자기신고서통합검색", title: "자기신고서통합검색" },
			{ url: "보임희망현황", title: "보임희망현황" },
			{ url: "자기신고서부서코드", title: "자기신고서 부서코드" },
			{ url: "전입희망서권한관리", title: "전입희망서 권한관리" },
			{ url: "전입희망서관리", title: "전입희망서 관리" },
			{
				url: "승진관리", title: "승진 관리",
				subItems: [
					{ url: "승진대상자 설정", title: "승진대상자설정" },
					{ url: "자기추천서관리", title: "자기추천서 관리" },
					{ url: "리더추천서관리", title: "리더추천서 관리" },
				]
			},
		],
	},
	// {
	// 	category: "sub",
	// 	title: "알림관리",
	// 	items: [
	// 		{ url: "공지사항", title: "공지사항" },
	// 		{ url: "faq", title: "FAQ" },
	// 		{ url: "자료실", title: "자료실" },
	// 		{ url: "알림메시지", title: "알림메시지" },
	// 	],
	// },
	{
		category: "sub",
		title: "시스템관리",
		items: [
			{
				url: "사용자관리",
				title: "사용자관리",
				subItems: [
					{ url: "사용자관리", title: "사용자 관리" },
					{ url: "사용자그룹관리", title: "사용자그룹 관리" },
					{ url: "메뉴권한관리", title: "메뉴권한 관리" },
				],
			},
			{
				url: "코드관리",
				title: "코드관리",
				subItems: [
					{ url: "공통코드", title: "공통코드" },
					{ url: "ms코드", title: "MS코드" },
				],
			},
			{
				url: "로그관리",
				title: "로그관리",
				subItems: [
					{ url: "사용자접속통계", title: "사용자접속통계" },
					{ url: "사용자접속이력", title: "사용자접속이력" },
					{ url: "메뉴접속통계", title: "메뉴접속통계" },
					{ url: "관리자계정로그", title: "관리자계정로그" },
					{ url: "MIS연동로그", title: "MIS연동로그" },
				],
			},
			{ url: "메뉴관리", title: "메뉴관리" },
		],
	},

];

export default menu