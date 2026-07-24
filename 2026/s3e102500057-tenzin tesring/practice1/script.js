let btn = document.getElementById("infoButton");

btn.addEventListener("click", showInfo);

function showInfo() {
    document.getElementById("infoTitle").innerText
        = "京都 - 三重塔";
    document.getElementById("infoDesc").innerText
        = "三重塔は京都の清水寺に隣接する仏教建築で、\n美しい造形と位置が特徴です。\n" +
        "特に春には桜が咲き、\n観光客に人気があります。";
    document.getElementById("infoImage").src
        = "kyoto.jpg";
    document.getElementById("infoImage").alt
        = "三重塔";
    document.getElementById("infoContainer").style.display
        = "block";
}
