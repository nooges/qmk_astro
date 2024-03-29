# QMK大纲

<!---
  original document: 0.15.12:docs/syllabus.md
  git diff 0.15.12 HEAD -- docs/syllabus.md | cat
-->

这一页旨在帮你建立关于QMK的相关基础知识，并提供能引导你成为QMK大师所需的所有概念。

# 基本概念

如果你还没有看其它部分，先阅读这一节吧。在阅读了[介绍](zh-cn/newbs)之后，你可以制作、编译、刷写一个简单的键映射了，以下文档可以助你充实各系列的知识。

* **了解如何使用QMK**
    * [介绍](zh-cn/newbs)
    * [CLI](zh-cn/cli)
    * [GIT](zh-cn/newbs_git_best_practices)
* **了解键映射**
    * [层](zh-cn/feature_layers)
    * [键码](zh-cn/keycodes)
        * 含所有可用键码，一些会涉及进阶或高级的话题。
* **配置IDE** - 可选的
    * [Eclipse](zh-cn/other_eclipse)
    * [VS Code](zh-cn/other_vscode)

# 进阶话题

包含窥探QMK主要功能内部原理的话题。你可以不用阅读这些，然而，跳过这些话题的话，去看高级话题的时候会让你很迷惑。

* **各功能的配置**
    <!-- * Configuration Overview  FIXME(skullydazed/anyone): write this document -->
    * [音频](zh-cn/feature_audio)
    * 灯光
        * [背光](zh-cn/feature_backlight)
        * [LED矩阵](zh-cn/feature_led_matrix)
        * [RGB灯光](zh-cn/feature_rgblight)
        * [RGB矩阵](zh-cn/feature_rgb_matrix)
    * [点按配置](zh-cn/tap_hold)
    * [充分利用AVR的存储空间](zh-cn/squeezing_avr)
* **深入键映射**
    * [键映射](zh-cn/keymap)
    * [键码与自定义函数](zh-cn/custom_quantum_functions)
    * 宏
        * [动态宏](zh-cn/feature_dynamic_macros)
        * [宏](zh-cn/feature_macros)
    * [Tap Dance](zh-cn/feature_tap_dance)
    * [组合键](zh-cn/feature_combo)
    * [用户空间](zh-cn/feature_userspace)
    * [按键重定义](zh-cn/feature_key_overrides)

# 高级话题

这些话题需要较多基础知识，使用这些高级功能前，你应该对如何通过 `config.h` 和 `rules.mk` 来配置键盘选项非常熟悉。

* **维护QMK键盘**
    * [飞线指南](zh-cn/hand_wire)
    * [键盘开发指引](zh-cn/hardware_keyboard_guidelines)
    * [info.json参考资料](zh-cn/reference_info_json)
    * [防抖API](zh-cn/feature_debounce_type)
* **高级功能**
    * [Unicode](zh-cn/feature_unicode)
    * [API](zh-cn/api_overview)
    * [Bootmagic Lite](zh-cn/feature_bootmagic)
* **硬件相关**
    * [键盘工作原理](zh-cn/how_keyboards_work)
    * [键盘矩阵原理](zh-cn/how_a_matrix_works)
    * [分体键盘](zh-cn/feature_split_keyboard)
    * [速记](zh-cn/feature_stenography)
    * [光标设备](zh-cn/feature_pointing_device)
* **开发核心知识**
    * [C编码规范](zh-cn/coding_conventions_c)
    * [兼容的微处理器](zh-cn/compatible_microcontrollers)
    * [自定义矩阵](zh-cn/custom_matrix)
    * [理解QMK](zh-cn/understanding_qmk)
* **CLI开发**
    * [编码规范](zh-cn/coding_conventions_python)
    * [CLI开发总览](zh-cn/cli_development)
