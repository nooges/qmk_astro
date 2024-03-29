# QMK API

<!---
  original document: 0.13.15:docs/api_overview.md
  git diff 0.13.15 HEAD -- docs/api_overview.md | cat
-->

QMK API は、Web と GUI ツールが [QMK](https://qmk.fm/) によってサポートされるキーボード用の任意のキーマップをコンパイルするために使うことができる、非同期 API を提供します。標準のキーマップテンプレートは、C コードのサポートを必要としない全ての QMK キーコードをサポートします。キーボードのメンテナは独自のカスタムテンプレートを提供して、より多くの機能を実現することができます。

## アプリケーション開発者

もしあなたがアプリケーションでこの API を使うことに興味があるアプリケーション開発者であれば、[API の使用](api_docs) に行くべきです。

## キーボードのメンテナ

もし QMK Compiler API でのあなたのキーボードのサポートを強化したい場合は、[キーボードサポート](reference_configurator_support) の節に行くべきです。

## バックエンド開発者

もし API 自体に取り組むことに興味がある場合は、[開発環境](api_development_environment)のセットアップから始め、それから [API のハッキング](api_development_overview) を調べるべきです。
