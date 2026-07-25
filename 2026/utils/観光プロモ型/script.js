/* =========================================================
   観光プロモ型 見本 ― script.js（動き）
   ============================================================
   ▼ 設定はここだけ ▼
   ・TOUR_SLUG … 使うバーチャルツアーのスラッグ（右の360°）
   ・地図は index.html のマップガイド埋め込み（/c/…）を使用。
========================================================= */
const VIEWTOLY = {
  BASE_URL: "https://viewtoly-mvp-462744124914.asia-northeast1.run.app",
  TOUR_SLUG: "qnE9g2lpSD1H",
  HERO_SCENE: "",   // ← ヒーローに出すシーンID（空ならツアー既定のシーン）
};

(function(){
  const { BASE_URL, TOUR_SLUG, HERO_SCENE } = VIEWTOLY;
  const base = BASE_URL.replace(/\/$/,"");

  function src(scene, params){
    const q = new URLSearchParams({ embed:"true", hotspots:"0", ...(scene?{scene}:{}), ...params });
    return `${base}/v/${TOUR_SLUG}?${q.toString()}`;
  }

  // HERO : ゆっくり自動回転・操作不可・UIなし
  document.getElementById("heroFrame").innerHTML =
    `<iframe src="${src(HERO_SCENE,{motion:"spin",speed:"2",nodrag:"1"})}" allow="fullscreen; accelerometer; gyroscope" allowfullscreen></iframe>`;

  // masthead（スクロールで背景を出す）＋ スクロール演出
  const mast=document.getElementById("mast");
  const onScroll=()=>mast.classList.toggle("solid", window.scrollY>window.innerHeight*0.7);
  onScroll(); addEventListener("scroll",onScroll,{passive:true});
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll("[data-reveal]").forEach(el=>io.observe(el));
})();
