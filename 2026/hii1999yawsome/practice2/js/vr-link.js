// シーン間リンク
AFRAME.registerComponent('scene-link', {
    schema: {
        link: { type: 'string', default: '' }
    },
    init: function () {
        let data = this.data;
        this.el.addEventListener('click', function () {
            window.location.href = data.link;
        });
    }
});

// URLパラメータを取得する関数
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ページ読み込み時に実行
window.addEventListener('load', function() {
    // 'from'パラメータがscene2の場合、カメラの初期向きを調整
    if (getQueryParam('from') === 'scene2') {
        // カメラの初期回転角度を設定（180度反対方向を向く）
        const camera = document.querySelector('[camera]');
        camera.setAttribute('rotation', '0 180 0');
    }
});

