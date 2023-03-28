# QMK シラバス

<!---
  original document: 0.14.22:docs/syllabus.md
  git diff 0.14.22 HEAD -- docs/syllabus.md | cat
-->

このページは最初に基本を紹介し、そして、QMK に習熟するために必要な全ての概念を理解するように導くことで、QMK の知識を構築するのに役立ちます。

# 初級トピック

他に何も読んでいない場合は、このセクションのドキュメントを読んでください。[QMK 初心者ガイド](ja/newbs)を読み終わると、基本的なキーマップを作成し、それをコンパイルし、キーボードに書き込みできるようになっているはずです。残りのドキュメントはこれらの基本的な知識を具体的に肉付けします。

* **QMK Tools の使い方を学ぶ**
   * [QMK 初心者ガイド](ja/newbs)
   * [CLI](ja/cli)
   * [Git](ja/newbs_git_best_practices)
* **キーマップについて学ぶ**
   * [レイヤー](ja/feature_layers)
   * [キーコード](ja/keycodes)
      * 使用できるキーコードの完全なリスト。中級または上級トピックにある知識が必要な場合もあることに注意してください。
* **IDE の設定** - オプション
   * [Eclipse](ja/other_eclipse)
   * [VS Code](ja/other_vscode)

# 中級トピック

これらのトピックでは、QMK がサポートする幾つかの機能について掘り下げます。これらのドキュメントを全て読む必要はありませんが、これらの一部をスキップすると、上級トピックのセクションの一部のドキュメントが意味をなさなくなるかもしれません。

* **機能の設定方法を学ぶ**
   <!-- * Configuration Overview  FIXME(skullydazed/anyone): write this document -->
   * [オーディオ](ja/feature_audio)
   * 電飾
      * [バックライト](ja/feature_backlight)
      * [LED マトリックス](ja/feature_led_matrix)
      * [RGB ライト](ja/feature_rgblight)
      * [RGB マトリックス](ja/feature_rgb_matrix)
   * [タップホールド設定](ja/tap_hold)
* **キーマップについてさらに学ぶ**
   * [キーマップ](ja/keymap)
   * [カスタム関数とキーコード](ja/custom_quantum_functions)
   * マクロ
      * [動的マクロ](ja/feature_dynamic_macros)
      * [コンパイル済みのマクロ](ja/feature_macros)
   * [タップダンス](ja/feature_tap_dance)
   * [コンボ](ja/feature_combo)
   * [ユーザスペース](ja/feature_userspace)
   * [キーオーバーライド](ja/feature_key_overrides)

# 上級トピック

以下の全ては多くの基礎知識を必要とします。高度な機能を使ってキーマップを作成できることに加えて、`config.h` と `rules.mk` の両方を使ってキーボードのオプションを設定することに慣れている必要があります。

* **QMK 内のキーボードの保守**
   * [キーボードの手配線](ja/hand_wire)
   * [キーボードガイドライン](ja/hardware_keyboard_guidelines)
   * [info.json リファレンス](ja/reference_info_json)
   * [デバウンス API](ja/feature_debounce_type)
* **高度な機能**
   * [ユニコード](ja/feature_unicode)
   * [API](ja/api_overview)
   * [ブートマジックライト](ja/feature_bootmagic)
* **ハードウェア**
   * [キーボードがどのように動作するか](ja/how_keyboards_work)
   * [キーボードマトリックスの仕組み](ja/how_a_matrix_works)
   * [分割キーボード](ja/feature_split_keyboard)
   * [速記](ja/feature_stenography)
   * [ポインティングデバイス](ja/feature_pointing_device)
* **コア開発**
   * [コーディング規約](ja/coding_conventions_c)
   * [互換性のあるマイクロコントローラ](ja/compatible_microcontrollers)
   * [カスタムマトリックス](ja/custom_matrix)
   * [QMK を理解する](ja/understanding_qmk)
* **CLI 開発**
   * [コーディング規約](ja/coding_conventions_python)
   * [CLI 開発の概要](ja/cli_development)
