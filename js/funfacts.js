const funFacts = [
    '방콕은 세상에서 사람들이 제일 많이 찾은 도시래요.',
    '원래 키보드 자판은 알파벳 순서였대요.',
    '사람을 태어날 때 2가지의 두려움만 가지고 있대요, 떨어지는 것과 큰 소리죠.',
    "'Baked Bean'은 사실 '구운 콩'이 아니랍니다.",
    '남극은 지구상에서 유일하게 도마뱁과 뱀이 없는 대륙이에요. 그럼 북극은?',
    '비디오 게임은 사실 외과의사들의 수행능력을 높여준대요',
    '토마토 케챱은 약으로 쓰였대요, 16동안이나요!',
    '우리 몸의 장기 중 가장 뚱뚱한 곳이 바로 뇌래요.',
    '지구상에서 독을 가진 뱀이 가장 많은 곳은 호주랍니다.',
    '죽은 사람들도 몸에 소름이 돋을 수가 있대요!',
    '달팽이는 최대 3년 동안이나 한번에 잘 수가 있대요.',
    "프링글스 칩 모양의 정식이름은 '하이퍼볼릭 파라볼로이드'입니다!",
    '지구상의 모든 대륙에는 맥도날드가 있는데 딱 한 곳만 없대요, 그곳은 남극이랍니다.',
    '지금 이 순간에도 세계 인구중 0.7%는 만취 상태래요.',
    '프랑스의 화장실 휴지는 거의 대부분 핑크색이래요.',
    '미국에서 일어나는 은행 절도 사건의 절반은 꼭 금요일에 일어난대요.',
];

const funfact = document.querySelector('.main__middle__funfact');

const todaysFunfact = funFacts[Math.floor(Math.random() * funFacts.length)];

funfact.innerText = `혹시 그거 아시나요? ${todaysFunfact} `;
