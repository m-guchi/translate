# 翻訳くん
改行などを処理することで、DeepLで正しく翻訳できるようにする。

## 機能
英文(英語論文などを想定)をコピペすると、英文に含まれる改行等を消去し、DeepLで翻訳結果が出力される。

ペーストすると同時にDeepLが立ち上がるため、連続して英文をコピペしたい場合は、「入力時に自動で翻訳」のチェックを外す。
「翻訳する」を押下すると、DeepLが立ち上がる。

## 変換
- 改行(\\r,\\rn) -> " "
- "\#" -> "＃" (全角)
- "/" -> "／" (全角)
