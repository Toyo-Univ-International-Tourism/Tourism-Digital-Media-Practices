const sceneDetails = {
  path: {
    title: 'シーン1｜道路と海辺',
    description: '石畳の道を進みながら、岩場の向こうに広がる宮古ブルーの海を眺める入口のシーンです。'
  },
  coast: {
    title: 'シーン2｜磯石と海',
    description: '隆起サンゴ礁がつくった独特の岩場と、透明度の高い海を間近に観察できます。'
  },
  beach: {
    title: 'シーン3｜海とビーチ',
    description: '白い砂浜と穏やかな海が広がる、宮古島らしい開放感と癒しを感じられるシーンです。'
  }
};

function makeHotspot(element, args) {
  element.classList.add('custom-hotspot');
  if (args.kind === 'info') element.classList.add('info-hotspot');

  const wrap = document.createElement('div');
  wrap.className = 'hotspot-wrap';

  const icon = document.createElement('div');
  icon.className = 'hotspot-icon';
  icon.textContent = args.kind === 'info' ? 'i' : args.icon || '➜';

  const label = document.createElement('div');
  label.className = 'hotspot-label';
  label.textContent = args.label;

  wrap.append(icon, label);
  element.appendChild(wrap);

  if (args.kind === 'info') {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      openInfo(args.title, args.text);
    });
  }
}

const viewer = pannellum.viewer('panorama', {
  default: {
    firstScene: 'path',
    sceneFadeDuration: 900,
    autoLoad: true,
    showControls: true,
    compass: false,
    hfov: 105,
    minHfov: 45,
    maxHfov: 120
  },
  scenes: {
    path: {
      type: 'equirectangular',
      panorama: 'assets/miyako_242.jpg',
      title: '道路と海辺',
      pitch: -8,
      yaw: 0,
      hotSpots: [
        {
          pitch: -11,
          yaw: 4,
          type: 'scene',
          sceneId: 'coast',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: { label: '磯石と海へ進む', icon: '↑' }
        },
        {
          pitch: 0,
          yaw: 78,
          type: 'info',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: {
            kind: 'info',
            label: '道路と海辺の紹介',
            title: '海へ続く石畳の道',
            text: '白い石畳の道と宮古ブルーの海が鮮やかな対比をつくっています。道を進むにつれて海が近づき、旅の始まりらしい期待感を味わえます。'
          }
        }
      ]
    },
    coast: {
      type: 'equirectangular',
      panorama: 'assets/miyako_246.jpg',
      title: '磯石と海',
      pitch: -7,
      yaw: 20,
      hotSpots: [
        {
          pitch: -10,
          yaw: -148,
          type: 'scene',
          sceneId: 'path',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: { label: '道路と海辺に戻る', icon: '←' }
        },
        {
          pitch: -9,
          yaw: 8,
          type: 'scene',
          sceneId: 'beach',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: { label: '海とビーチへ進む', icon: '↗' }
        },
        {
          pitch: -5,
          yaw: 86,
          type: 'info',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: {
            kind: 'info',
            label: '磯石と海の紹介',
            title: '隆起サンゴ礁がつくる景観',
            text: '宮古島の海岸には、多孔質の岩場やサンゴ礁に由来する独特の地形が見られます。透明な浅瀬と岩礁の組み合わせから、島の自然の歴史を感じられます。'
          }
        }
      ]
    },
    beach: {
      type: 'equirectangular',
      panorama: 'assets/miyako_221.jpg',
      title: '海とビーチ',
      pitch: -5,
      yaw: 0,
      hotSpots: [
        {
          pitch: -10,
          yaw: 3,
          type: 'scene',
          sceneId: 'coast',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: { label: '磯石と海に戻る', icon: '←' }
        },
        {
          pitch: -3,
          yaw: 70,
          type: 'info',
          cssClass: 'custom-hotspot',
          createTooltipFunc: makeHotspot,
          createTooltipArgs: {
            kind: 'info',
            label: '海とビーチの紹介',
            title: '白い砂浜と宮古ブルー',
            text: 'きめ細かな砂浜と透明な浅瀬、周囲の緑が調和した穏やかな景色です。波打ち際を見渡しながら、宮古島ならではの癒しと開放感を楽しめます。'
          }
        }
      ]
    }
  }
});

const sceneCard = document.getElementById('sceneCard');
const navButtons = [...document.querySelectorAll('[data-scene]')];

function updateSceneUI(sceneId) {
  const info = sceneDetails[sceneId];
  sceneCard.innerHTML = `<h1>${info.title}</h1><p>${info.description}</p>`;
  navButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.scene === sceneId));
}

navButtons.forEach((btn) => btn.addEventListener('click', () => viewer.loadScene(btn.dataset.scene)));
viewer.on('scenechange', updateSceneUI);
updateSceneUI('path');

const infoModal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

function openInfo(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  infoModal.classList.add('open');
  infoModal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.getElementById('closeModal').addEventListener('click', () => closeModal(infoModal));
infoModal.addEventListener('click', (event) => {
  if (event.target === infoModal) closeModal(infoModal);
});

const helpModal = document.getElementById('helpModal');
document.getElementById('helpBtn').addEventListener('click', () => {
  helpModal.classList.add('open');
  helpModal.setAttribute('aria-hidden', 'false');
});
document.getElementById('closeHelp').addEventListener('click', () => closeModal(helpModal));
helpModal.addEventListener('click', (event) => {
  if (event.target === helpModal) closeModal(helpModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal(infoModal);
    closeModal(helpModal);
  }
});
