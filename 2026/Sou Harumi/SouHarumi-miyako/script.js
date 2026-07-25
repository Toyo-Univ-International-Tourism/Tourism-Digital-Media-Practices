// ================================================
// MIYAKO BLUE WALK - script.js
// 動き①：ボタンで360°ツアーを開く
// 動き②：カードをクリックで解説を表示（1日目のshowInfoと同じ原理）
// 動き③：スクロールでカードがふわっと登場
// 動き④：スクロール量に合わせて「水深計」の数値が変わる
// ================================================

// ▼ 制作ソフトで公開したツアーのURLをここに貼る（"" の中を書き換える）
const TOUR_URL = "https://viewtoly-mvp-462744124914.asia-northeast1.run.app/v/z0wP_uqm1jbU";

// ---- 動き①：ツアーを開く ----
function openTour() {
    if (TOUR_URL === "PASTE_YOUR_TOUR_URL_HERE") {
        alert("ツアーURLがまだ設定されていません（script.js の TOUR_URL を書き換えてください）");
        return;
    }
    window.open(TOUR_URL, "_blank");   // 別タブでツアーを開く
}
document.getElementById("tourButton").addEventListener("click", openTour);
document.getElementById("tourButton2").addEventListener("click", openTour);

// ---- 動き②：カードをクリックで解説を表示／非表示 ----
// display を "none" ⇔ "block" で切り替える（1日目の授業と同じ）
for (let i = 1; i <= 3; i++) {
    let card = document.getElementById("card" + i);
    let detail = document.getElementById("detail" + i);
    card.addEventListener("click", function () {
        detail.style.display =
            (detail.style.display === "block") ? "none" : "block";
    });
}

// ---- 動き③：スクロールでカードがふわっと登場 ----
// IntersectionObserver = 要素が画面に入ったことを検知する仕組み
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");  // CSS側でアニメが動く
        }
    });
}, { threshold: 0.18 });
document.querySelectorAll(".card").forEach(function (card) {
    observer.observe(card);
});

// ---- 動き④：水深計 ----
// ページをどこまでスクロールしたかを 0〜1 で計算し、
// 水深 0.0m 〜 18.0m に換算して表示する
let depthEl = document.getElementById("depthValue");
window.addEventListener("scroll", function () {
    // スクロールできる全長 = ページの高さ − 画面の高さ
    let max = document.documentElement.scrollHeight - window.innerHeight;
    let ratio = window.scrollY / max;            // いまの割合（0〜1）
    let depth = (ratio * 18).toFixed(1);         // 最大18mに換算
    depthEl.innerText = depth;
});
