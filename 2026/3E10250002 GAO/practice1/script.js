let btn = document.getElementById("infoButton");

btn.addEventListener("click", showInfo);

function showInfo() {
    document.getElementById("infoTitle").innerText
        = "長野県 - 白馬村";
    document.getElementById("infoDesc").innerText
        = "白馬村は日本アルプスの山間部に位置し、1998年冬季オリンピックの開催地となった長野市の郊外にあります。\n" +
        "四季ごとに異なる絶景、雄大な山々と豊かな自然が広がる、魅力あふれる観光地です。";
    document.getElementById("infoImage").src
        = "hakuba.jpg";
    document.getElementById("infoImage").alt
        = "白馬村の風景";
    document.getElementById("infoContainer").style.display
        = "block";
}
