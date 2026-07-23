let btn = document.getElementById("infoButton");

btn.addEventListener("click", showInfo);

function showInfo() {
    document.getElementById("infoTitle").innerText
        = "広島県 - 厳島神社";
    document.getElementById("infoDesc").innerText
        = "厳島神社は広島県の宮島に位置し、海上に立つ大鳥居で有名です。\n" +
        "満潮時には鳥居が海に浮かぶように見え、幻想的な景色が広がります。";
    document.getElementById("infoImage").src
        = "itsukushima.jpg";
    document.getElementById("infoImage").alt
        = "厳島神社の鳥居";
    document.getElementById("infoContainer").style.display
        = "block";
}
