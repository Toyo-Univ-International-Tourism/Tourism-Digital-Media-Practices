# Tourism-Digital-Media-Practices

東洋大学「観光デジタルメディア演習」(2026年度後期) の **演習用リポジトリ**。

学生はこのリポジトリ内の自分のフォルダに、演習で作成した HTML/CSS/JS や画像ファイルをアップロードする。

サンプル/テンプレートコードは別 repo にあります → [`tdmp_sample_page`](https://github.com/Toyo-Univ-International-Tourism/tdmp_sample_page)

## ディレクトリ構成

```
2026/
├── utils/                ← 演習用の素材ファイル（学生が参照・コピーして使う）
│   ├── practice1/        ← 練習①用: 観光地サンプル画像（学生が 1 枚選んで使う）
│   └── practice2/        ← 練習②用: 360° パノラマ画像 (必要素材のみ)
│       └── 360pic/
├── student01/            ← (受講者確定後に作成)
│   ├── practice1/
│   └── practice2/
└── ...
```

## 演習の流れ

### 練習① Web ページ作成入門
1. `2026/utils/practice1/` から好きな画像を 1 枚選ぶ
2. VS Code でローカルに HTML / CSS / JS を作成（観光案内ページ）
3. 完成したら自分のフォルダ `2026/studentXX/practice1/` にブラウザから upload
4. Pages URL `https://toyo-univ-international-tourism.github.io/Tourism-Digital-Media-Practices/2026/studentXX/practice1/` で確認

### 練習② A-Frame による 360° バーチャルツアー
1. `2026/utils/practice2/360pic/` から 360°画像を取得
2. サンプル repo [`tdmp_sample_page/aframe_sample/`](https://github.com/Toyo-Univ-International-Tourism/tdmp_sample_page/tree/main/aframe_sample) を参照しながら、VS Code でローカルに HTML/JS を作成（または `aframe_sample/` をコピーして編集）
3. Live Server でローカル確認
4. 完成したら一式を `2026/studentXX/practice2/` にブラウザから upload
5. Pages URL で確認、スマホからも 360° VR 体験
