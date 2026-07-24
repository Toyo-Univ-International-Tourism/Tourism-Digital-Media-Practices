let btn = document.getElementById("infoButton");

btn.addEventListener("click", showInfo);

function showInfo() {
    document.getElementById("infoTitle").innerText
        = "山梨県 - 富士山";
    document.getElementById("infoDesc").innerText
       document.getElementById("infoDesc").innerText =
    "富士山は日本で一番高い山で、高さは3,776メートルです。"
    + "山梨県と静岡県にまたがっています。"
    + "美しい自然や四季折々の景色を楽しむことができます。";
    document.getElementById("infoImage").src
        = "mtfuji.jpg";
    document.getElementById("infoImage").alt
        = "富士山";
    document.getElementById("infoContainer").style.display
        = "block";
}
