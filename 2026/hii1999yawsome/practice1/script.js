let btn = document.getElementById("infoButton");

btn.addEventListener("click", showInfo);

function showInfo() {
  document.getElementById("infoTitle").innerText
    = "長野県 - 白馬村";
  document.getElementById("infoDesc").innerText
    = "白馬村は長野県北西部に位置し、雄大な北アルプスの景観で知られています。\n"
    + "冬はスキー、夏はトレッキングや高原観光が楽しめる人気のリゾート地です。";
  document.getElementById("infoImage").src
    = "hakuba.jpg";
  document.getElementById("infoImage").alt
    = "白馬村の風景";
  document.getElementById("infoContainer").style.display
    = "block";
}