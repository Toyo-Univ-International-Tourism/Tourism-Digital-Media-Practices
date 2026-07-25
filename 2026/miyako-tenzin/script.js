const sky = document.getElementById("sky");
const overlay = document.getElementById("overlay");
const body = document.body;
const cameraRig = document.getElementById("cameraRig");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");

const scenes = [
  {
    src: "#scene1",
    title: "静かなビーチの入口",
    text: "やわらかな海の色と落ち着いた空気が広がる、宮古島らしい最初の風景です。"
  },
  {
    src: "#scene2",
    title: "海と空がつながる景色",
    text: "見渡すほどに広がる青のグラデーションが、島の開放感を感じさせてくれます。"
  },
  {
    src: "#scene3",
    title: "海辺へ続く場所",
    text: "視線の先に海が現れ、これから先へ進みたくなるような期待感を味わえるシーンです。"
  },
  {
    src: "#scene4",
    title: "岩場と透明な海",
    text: "自然の地形と透き通る水の組み合わせが印象的で、宮古島の力強い表情を感じられます。"
  }
];

let isPreview = false;
let index = 0;
let angle = 0;

function updateScene() {
  sky.setAttribute("src", scenes[index].src);
  sceneTitle.textContent = scenes[index].title;
  sceneText.textContent = scenes[index].text;
}

function enterPreview() {
  isPreview = true;
  index = 0;
  updateScene();
  overlay.classList.add("hidden");
  body.classList.add("preview-mode");
}

function exitPreview() {
  isPreview = false;
  index = 0;
  sky.setAttribute("src", scenes[0].src);
  sceneTitle.textContent = "ようこそ、宮古島へ";
  sceneText.textContent = "まずは南の島の空気を感じながら、360°の景色をゆっくり見渡してみましょう。";
  overlay.classList.remove("hidden");
  body.classList.remove("preview-mode");
}

function next() {
  if (!isPreview) return;
  index = (index + 1) % scenes.length;
  updateScene();
}

function prev() {
  if (!isPreview) return;
  index = (index - 1 + scenes.length) % scenes.length;
  updateScene();
}

function rotate() {
  if (!isPreview) {
    angle += 0.02;
    cameraRig.setAttribute("rotation", `0 ${angle} 0`);
  }
  requestAnimationFrame(rotate);
}
rotate();

function openMap() {
  window.open("https://www.google.com/maps/place/%E5%AE%AE%E5%8F%A4%E5%B3%B6", "_blank");
}

window.addEventListener("keydown", (event) => {
  if (!isPreview) return;
  if (event.key === "ArrowRight") next();
  if (event.key === "ArrowLeft") prev();
  if (event.key === "Escape") exitPreview();
});

exitPreview();
