// 変数宣言：HTML内のボタン要素を取得し、後で使えるように変数に保存
let btn = document.getElementById("infoButton");

// ボタンがクリックされたときに、showInfo 関数を実行するよう設定
btn.addEventListener("click", showInfo);

// 関数の定義：クリック時に実行され、画面に表示する内容を変更する処理
function showInfo() {
    // id="infoTitle" の要素を取得し、表示される文字を変更する
    document.getElementById("infoTitle").innerText
        = "沖縄県 - 沖縄美ら海水族館";
    // id="infoDesc" の要素を取得し、説明文の内容を変更する
    document.getElementById("infoDesc").innerText
        = "沖縄県国頭郡本部町の海洋博公園内にある、世界最大級の大水槽とジンベエザメの飼育で有名な人気スポットです。\n" +
        "場所: 沖縄県国頭郡本部町字石川424(海洋博公園内)";
    // id="infoImage" の画像要素を取得し、表示する画像ファイルを変更する
    document.getElementById("infoImage").src
        = "tyuraumi.jpg";
     // 画像が表示されない場合に使われる説明文（代替テキスト）を設定する
    document.getElementById("infoImage").alt
        = "沖縄美ら海水族館";
    // id="infoContainer" の要素を取得し、非表示から表示状態に変更する
    document.getElementById("infoContainer").style.display
        = "block";
}

