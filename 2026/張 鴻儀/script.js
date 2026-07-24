// 変数宣言：HTML内のボタン要素を取得し、後で使えるように変数に保存
let btn = document.getElementById("infoButton");

// ボタンがクリックされたときに、showInfo 関数を実行するよう設定
btn.addEventListener("click", showInfo);

// 関数の定義：クリック時に実行され、画面に表示する内容を変更する処理
function showInfo() {
    // id="infoTitle" の要素を取得し、表示される文字を変更する
    document.getElementById("infoTitle").innerText
        = "京都 - 清水寺の坂道";
    // id="infoDesc" の要素を取得し、説明文の内容を変更する
    document.getElementById("infoDesc").innerText
        = "清水坂は、昔から変わらぬ古都の趣と、その趣を壊さずに調和している新しいものとが融合し、何度訪れても飽きない観光名所です。\n" +
        "清水寺へと続く約1kmほどの参道である。五条坂と合流するあたりから、土産物屋や飲食店が軒を連ね、賑わいを見せ始める。";
    // id="infoImage" の画像要素を取得し、表示する画像ファイルを変更する
    document.getElementById("infoImage").src
        = "kyoto.jpg";
     // 画像が表示されない場合に使われる説明文（代替テキスト）を設定する
    document.getElementById("infoImage").alt
        = "清水寺三重塔";
    // id="infoContainer" の要素を取得し、非表示から表示状態に変更する
    document.getElementById("infoContainer").style.display
        = "block";
}

