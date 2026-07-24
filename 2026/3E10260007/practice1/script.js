// 変数宣言：HTML内のボタン要素を取得し、後で使えるように変数に保存
let btn = document.getElementById("infoButton");

// ボタンがクリックされたときに、showInfo 関数を実行するよう設定
btn.addEventListener("click", showInfo);

// 関数の定義：クリック時に実行され、画面に表示する内容を変更する処理
function showInfo() {
    // id="infoTitle" の要素を取得し、表示される文字を変更する
    document.getElementById("infoTitle").innerText
        = "沖縄県 - 石垣島";
    // id="infoDesc" の要素を取得し、説明文の内容を変更する
    document.getElementById("infoDesc").innerText
        = "石垣島は沖縄県の南西部の石垣市に位置し、美しいビーチや自然景観で有名です。\n" +
        "南国のリゾート地として、多くのリゾートホテルがあります。";
    // id="infoImage" の画像要素を取得し、表示する画像ファイルを変更する
    document.getElementById("infoImage").src
        = "ishigaki.jpg";
     // 画像が表示されない場合に使われる説明文（代替テキスト）を設定する
    document.getElementById("infoImage").alt
        = "石垣島の美しい風景";
    // id="infoContainer" の要素を取得し、非表示から表示状態に変更する
    document.getElementById("infoContainer").style.display
        = "block";
}

