// src/App.js
import React, { useState } from 'react';
import './App.css';
import CharacterList from './CharacterList';

const vocaloids = [
  {
    id: 1,
    name: 'IA Aria On The Planetes',
    description: 'IA Aria On The Planetes는 2012년 1월 27일 1st Place 사에서 개발된 3세대 보컬로이드로 신비롭고 몽환적이고 조용하면서 깊은 슬픔에 잠기면서 강인해보이는 소녀의 모습과 고성능과 높고 청아하고 얇은 소녀의 목소리 때문에 3세대 보컬로이드들 중 폭발적인 인기를 끌고 있으며 현재도 미쿠와 린과 렌과 구미와 유카리와 우나와 더불어 보컬로이드 내에서 높은 인기를 보유하고 있습니다. 지금 체비오 엔진까지 개발된 상태이지만 아직까지 기존의 IA의 보컬로이드 엔진들을 사용하는 프로듀서들이 많습니다.',
    imageUrl: 'http://127.0.0.1:5500/ia.html',
  },
  {
    id: 2,
    name: 'SeeU',
    description: 'SeeU는 2011년 8월 30일 한국의 SBS 아트텍이 야마하의 보컬로이드 기술을 이용해 개발한 한국의 3세대 보컬로이드입니다. 일본 보컬로이드들에 비해 허스키하면서도 힘 있고 목넘김이 풍부한 목소리와 친근하고 친숙하면서 귀여운 모습 때문에 기존 보컬로이드들과 동등한 인기를 누리지는 못해도 어느 정도 한국과 해외에서 사랑을 많이 받았으며 지금도 꾸준히 사랑을 받고 있습니다. 특히 K-POP을 사랑하는 일본인들과 그 외의 해외 사람들에게 사랑을 많이 받고 있습니다.',
    imageUrl: 'http://127.0.0.1:5500/seeu.html',
  },
  {
    id: 3,
    name: 'GUMI',
    description: 'GUMI는 2009년 6월 27일 인터넷사에서 개발된 2세대 보컬로이드로 미쿠, 린, 렌 등 기존의 보컬로이드들에 비해 평범한 음성을 지녔으나 그런 만큼 매우 자연스럽고 인간적인 목소리로 인해 기존의 보컬로이드들의 기계음에 거부감을 느끼는 사람들에게 높은 인기를 끌고 많은 사랑을 받고 있습니다. 현재는 미쿠와 린과 렌과 이아와 유카리와 함께 보컬로이드계에서 높은 인기를 누리는 보컬로이드입니다.',
    imageUrl: 'http://127.0.0:5500/gumi.html',
  },
  {
    id: 4,
    name: 'Hatsune Miku',
    description: '하츠네 미쿠는 2007년 8월 31일 크립톤 퓨처 미디어에서 개발된 2세대 보컬로이드로 보컬로이드를 유명하게 만들고 대중화시킬 정도로 대중성과 인지도가 높은 보컬로이드입니다. 보컬로이드를 모르는 사람들도 하츠네 미쿠에 대해 알 정도로 일반인들에게도 유명한 편입니다. 현재는 린과 렌과 구미와 이아와 유카리와 함께 높은 인기를 누리고 있지만 그래도 보컬로이드계에서는 여전히 최상위권의 인기를 누리고 있습니다.',
    imageUrl: 'http://127.0.0:5500/miku.html',
  },
  {
    id: 5,
    name: 'Kagamine Rin',
    description: '카가미네 린은 2007년 12월 27일 크립톤 퓨처 미디어에서 개발된 2세대 보컬로이드로 미쿠 다음으로 높은 대중성과 인지도를 지니고 있기 때문에 보컬로이드를 모르는 사람들도 미쿠와 더불어 린에 대해 알고 있습니다. 날카롭고 높고 강렬하고 청아한 목소리와 귀엽고 어린 소녀의 모습 때문에 마찬가지로 높은 인기를 끌고 사랑을 받고 있으며 현재는 미쿠와 렌과 구미와 이아와 유카리와 함께 높은 인기를 누리는 보컬로이드입니다.',
    imageUrl: 'http://127.0.0:5500/rin.html',
  },
  {
    id: 6,
    name: 'Kagamine Len',
    description: '카가미네 렌은 2007년 12월 27일 크립톤 퓨처 미디어에서 개발된 2세대 보컬로이드로 미쿠 다음으로 높은 대중성과 인지도를 지니고 있기 때문에 보컬로이드를 모르는 사람들도 미쿠와 린과 더불어 렌에 대해 알고 있습니다. 당차고 씩씩하고 카랑카랑하고 쿨한 목소리와 귀엽고 어린 소년의 모습 때문에 마찬가지로 높은 인기를 끌고 사랑을 받고 있으며 린과 판박이로 닮은 외모 때문에 쌍둥이 아니냐는 썰까지 돌았습니다. 현재는 미쿠와 린과 구미와 이아와 유카리와 함께 높은 인기를 누리는 보컬로이드입니다.',
    imageUrl: 'http://127.0.0:5500/len.html',
  }
  // Add more vocaloid characters as needed
];

const animeCharacters = [
  {
    id: 101,
    name: 'Osamue Dazai',
    description: '다자이 오사무는 문호스트레이독스의 서브 주인공으로 주인공인 나카지마 아츠시의 조력자이자 구원자이며 무장 탐정사의 이능력 조사원입니다. 미인과의 동반 자살을 원하고 자살을 좋아하는 자살 매니아지만 특이하게 아픈 것과 피 튀기는 것을 싫어하며 능글맞고 여유롭고 속내를 알 수 없고 종잡을 수 없는 성격의 소유자이고 온갖 기행들을 벌이고 다니지만 사실은 탈인간급의 두뇌와 지능을 지닌 천재이고 접촉되는 모든 이능력들을 무효화시키는 인간 실격이라는 이능력을 보유하고 있습니다.',
    imageUrl: 'http://127.0.0:5500/dazaiosamue.html',
  },
  {
    id: 102,
    name: 'Sailor Moon',
    description: '세일러문은 미소녀 전사 세일러문 시리즈와 세일러문 크리스털 시리즈의 주인공으로 본명은 츠키노 우사기이며 달의 공주인 세레니티의 환생이자 세일러 전사들의 리더이고 은수정의 힘을 지닌 소유자입니다. 덜렁대고 겁이 많고 울보지만 밝고 명랑하고 천진난만하고 쾌활하고 친화력과 사교성이 뛰어나고 자신보다 다른 사람들을 소중하게 생각하고 아끼는 소녀입니다. 각자만의 이유로 겉돌거나 외롭고 고독했던 내행성 전사들의 정신적 지주와 구원과 희망이 되어주며 그녀 자신도 동료들에 의해 조금씩 변화하고 성장하고 있습니다.',
    imageUrl: 'http://127.0.0:5500/sailormoon.html',
  },
  {
    id: 103,
    name: 'Hinamori Amu',
    description: '히나모리 아무는 캐릭캐릭체인지의 주인공으로 사립 초등학교인 세이요 초등학교의 터프하고 멋있고 쿨한 소녀지만 실상은 대외용 캐릭터와 진정한 자신 사이에서 고민하고 갈등하는 소심하고 평범한 소녀입니다. 3개의 수호알들과 3명의 수호캐릭터들을 보유하고 있기 때문에 세인트 가디언의 조커로 활동하고 있습니다.',
    imageUrl: 'http://127.0.0:5500/hinamoriamu.html',
  },
  {
    id: 104,
    name: 'Monkey D. Luffy',
    description: '몽키 D 루피는 원피스의 주인공으로 밀짚모자 해적단의 창립자 겸 리더 겸 선장이며 해적왕을 꿈꾸는 남자입니다. 현재 9명의 동료들과 함께 세계 어딘가에 골드 로저가 숨겨놓았다는 보물인 원피스를 찾아 모험을 하고 있으며 해군 중장인 몽키 D 거프와 혁명가인 몽키 D 드래곤을 각각 할아버지와 아버지로 두고 있고 악마의 열매인 고무고무 열매를 먹어서 전신이 고무처럼 늘어나는 희한한 능력을 보유하고 있습니다.',
    imageUrl: 'http://127.0.0:5500/monkeydluffy.html',
  },
  {
    id: 105,
    name: 'Shoto Todoroki',
    description: '토도로키 쇼토는 나의 히어로아카데미아의 등장인물로 유에이 고등학교 히어로과 1학년 A반 15번이며 No.2 히어로인 엔데버의 아들입니다. 개성은 반냉반열로 아버지인 엔데버의 화염과 어머니 토도로키 레아의 빙결을 물려받아 반반씩 개성을 사용할 수 있습니다. 기본적으로 쿨하고 차분한 성격의 소유자이며 태도가 싸늘하고 생각한 그대로를 말로 내뱉고 타인과 거리를 두는 모습을 보였으나 주인공인 미도리야로 인해 조금씩 변화하고 성장하게 됩니다.',
    imageUrl: 'http://127.0.0:5500/todorokishoto.html',
  },
  {
    id: 106,
    name: 'Ai Hoshino',
    description: '호시노 아이는 최애의 아이의 등장인물로 키 퍼슨이기도 합니다. 두 주인공들인 아쿠아마린과 루비의 친엄마이며 이치고 프로덕션의 아이돌 그룹 B코마치의 부동의 센터이고 전설의 아이돌이라 칭해질 정도로 인기를 끌었습니다. 여러 모로 눈에 띄게 아이돌의 재능을 보였던 인물로 무대에 나타나서든 스크린에 나타나서든 사람의 시선을 본능적으로 끌어들이는 매력을 지녔습니다.',
    imageUrl: 'http://127.0.0:5500/hoshinoai.html',
  },
  // Add more anime characters as needed
];

function App()
{
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) =>
  {
    setSelectedCharacter(character);
  };

  return (
    <div className="app">
      <h1>Vocaloids & Anime Characters</h1>
      <div className="character-section">
        <h2>Vocaloids</h2>
        <CharacterList characters={vocaloids} onCharacterClick={handleCharacterClick} />
      </div>
      <div className="character-section">
        <h2>Anime Characters</h2>
        <CharacterList characters={animeCharacters} onCharacterClick={handleCharacterClick} />
      </div>
      {selectedCharacter && (
        <div className="character-info">
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.imageUrl} alt={selectedCharacter.name} />
          <p>{selectedCharacter.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;