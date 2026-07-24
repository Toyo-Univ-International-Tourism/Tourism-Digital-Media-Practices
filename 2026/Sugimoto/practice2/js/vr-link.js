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
        const scene = document.querySelector('a-scene');
        const setCameraRotation = function() {
            const camera = document.querySelector('[camera]');
            // look-controlsが内部で回転を管理しているため、
            // setAttribute('rotation')ではなくlook-controlsのyawObjectを直接更新する
            const lookControls = camera.components['look-controls'];
            if (lookControls) {
                // カメラの初期回転角度を設定（180度反対方向を向く）
                lookControls.yawObject.rotation.y = THREE.MathUtils.degToRad(180);
            } else {
                camera.setAttribute('rotation', '0 180 0');
            }
        };
        // シーンの読み込み完了後に実行（コンポーネント初期化を待つ）
        if (scene.hasLoaded) {
            setCameraRotation();
        } else {
            scene.addEventListener('loaded', setCameraRotation);
        }
    }
});

