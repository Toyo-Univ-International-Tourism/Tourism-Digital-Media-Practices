// 変数宣言：HTML内のボタン要素を取得し、後で使えるように変数に保存
let btn = document.getElementById("infoButton");

// ボタンがクリックされたときに、showInfo 関数を実行するよう設定
btn.addEventListener("click", showInfo);

// 関数の定義：クリック時に実行され、画面に表示する内容を変更する処理
function showInfo() {
    // id="infoTitle" の要素を取得し、表示される文字を変更する
    document.getElementById("infoTitle").innerText
        = "静岡県 - 富士山";
    // id="infoDesc" の要素を取得し、説明文の内容を変更する
    document.getElementById("infoDesc").innerText
        = "富士山は静岡県の富士宮市に位置し、日本の代表的な風景で有名です。\n" +
        "雪で被された山で有名な日本の最高峰。";
    // id="infoImage" の画像要素を取得し、表示する画像ファイルを変更する
    document.getElementById("infoImage").src
        = "mtfuji.jpg";
     // 画像が表示されない場合に使われる説明文（代替テキスト）を設定する
    document.getElementById("infoImage").alt
        = "厳島神社の鳥居";
    // id="infoContainer" の要素を取得し、非表示から表示状態に変更する
    document.getElementById("infoContainer").style.display
        = "block";
}

