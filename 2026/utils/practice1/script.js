// 変数宣言：HTML内のボタン要素を取得し、後で使えるように変数に保存
let btn = document.getElementById("infoButton");

// ボタンがクリックされたときに、showInfo 関数を実行するよう設定
btn.addEventListener("click", showInfo);

// 関数の定義：クリック時に実行され、画面に表示する内容を変更する処理
function showInfo() {
    // id="infoTitle" の要素を取得し、表示される文字を変更する
    document.getElementById("infoTitle").innerText
        = "広島県 - 厳島神社";
    // id="infoDesc" の要素を取得し、説明文の内容を変更する
    document.getElementById("infoDesc").innerText
        = "厳島神社は広島県の宮島に位置し、海上に立つ大鳥居で有名です。\n" +
        "満潮時には鳥居が海に浮かぶように見え、幻想的な景色が広がります。";
    // id="infoImage" の画像要素を取得し、表示する画像ファイルを変更する
    document.getElementById("infoImage").src
        = "itsukushima.jpg";
     // 画像が表示されない場合に使われる説明文（代替テキスト）を設定する
    document.getElementById("infoImage").alt
        = "厳島神社の鳥居";
    // id="infoContainer" の要素を取得し、非表示から表示状態に変更する
    document.getElementById("infoContainer").style.display
        = "block";
}

