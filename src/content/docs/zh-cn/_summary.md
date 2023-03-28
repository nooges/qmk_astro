<!--for translators, see first: zh-cn/reference_glossary.md#terms-of-zh-cn-translate -->
* 新手教程
  * [介绍](zh-cn/newbs)
  * [入门](zh-cn/newbs_getting_started)
  * [构建第一个固件](zh-cn/newbs_building_firmware)
  * [刷写固件](zh-cn/newbs_flashing)
  * [寻求帮助](zh-cn/support)
  * [其它资源](zh-cn/newbs_learn_more_resources)
  * [QMK大纲](zh-cn/syllabus)

* FAQ
  * [常规FAQ](zh-cn/faq_general)
  * [构建/编译QMK](zh-cn/faq_build)
  * [QMK问题排查](zh-cn/faq_misc)
  * [调试QMK](zh-cn/faq_debug)
  * [键映射FAQ](zh-cn/faq_keymap)
  * [充分利用AVR的存储空间](zh-cn/squeezing_avr)
  * [术语表](zh-cn/reference_glossary)

* 配置器(Configurator)
  * [总览](zh-cn/newbs_building_firmware_configurator)
  * [入门](zh-cn/configurator_step_by_step)
  * [问题排查](zh-cn/configurator_troubleshooting)
  * [框架](zh-cn/configurator_architecture)
  * QMK API
    * [总览](zh-cn/api_overview)
    * [API文档](zh-cn/api_docs)
    * [键盘支持](zh-cn/reference_configurator_support)
    * [添加默认键映射](zh-cn/configurator_default_keymaps)

* CLI
    * [总览](zh-cn/cli)
    * [配置](zh-cn/cli_configuration)
    * [命令](zh-cn/cli_commands)
    * [Tab补全](zh-cn/cli_tab_complete)

* 使用QMK
  * 导览
    * [功能定制](zh-cn/custom_quantum_functions)
    * [利用Zadig安装驱动](zh-cn/driver_installation_zadig)
    * [极简式制作](zh-cn/easy_maker)
    * [键映射总览](zh-cn/keymap)
    * 开发环境
      * [Docker指南](zh-cn/getting_started_docker)
      * [Vagrant指南](zh-cn/getting_started_vagrant)
    * 刷写(Flashing)
      * [刷写](zh-cn/flashing)
      * [刷写ATmega32A (ps2avrgb)](zh-cn/flashing_bootloadhid)
    * IDE
      * [在Eclipse中使用QMK](zh-cn/other_eclipse)
      * [在VSCode中使用QMK](zh-cn/other_vscode)
    * Git最佳实践
      * [介绍](zh-cn/newbs_git_best_practices)
      * [你自己的副本](zh-cn/newbs_git_using_your_master_branch)
      * [冲突合并](zh-cn/newbs_git_resolving_merge_conflicts)
      * [基于你的分支修复](zh-cn/newbs_git_resynchronize_a_branch)
    * 键盘组装
      * [飞线指南](zh-cn/hand_wire)
      * [ISP刷写指南](zh-cn/isp_flashing_guide)

  * 键码入门
    * [键码汇总](zh-cn/keycodes)
    * [基础键码](zh-cn/keycodes_basic)
    * [语言特定的键码](zh-cn/reference_keymap_extras)
    * [修饰键](zh-cn/feature_advanced_keycodes)
    * [原子键码](zh-cn/quantum_keycodes)
    * [Magic键码](zh-cn/keycodes_magic)

  * 键码进阶
    * [指令](zh-cn/feature_command)
    * [动态宏](zh-cn/feature_dynamic_macros)
    * [Grave Escape](zh-cn/feature_grave_esc)
    * [前导键](zh-cn/feature_leader_key)
    * [Mod-Tap](zh-cn/mod_tap)
    * [宏](zh-cn/feature_macros)
    * [鼠标键](zh-cn/feature_mouse_keys)
    * [Space Cadet Shift](zh-cn/feature_space_cadet)
    * [US ANSI上档键值](zh-cn/keycodes_us_ansi_shifted)

  * 软件特性
    * [自动Shift](zh-cn/feature_auto_shift)
    * [组合键](zh-cn/feature_combo)
    * [防抖API](zh-cn/feature_debounce_type)
    * [按键锁定](zh-cn/feature_key_lock)
    * [按键重定义](zh-cn/feature_key_overrides)
    * [层](zh-cn/feature_layers)
    * [粘滞键](zh-cn/one_shot_keys)
    * [光标设备](zh-cn/feature_pointing_device)
    * [原生HID](zh-cn/feature_rawhid)
    * [Sequencer](zh-cn/feature_sequencer)
    * [换手](zh-cn/feature_swap_hands)
    * [一键多用](zh-cn/feature_tap_dance)
    * [点按配置](zh-cn/tap_hold)
    * [Unicode](zh-cn/feature_unicode)
    * [用户空间](zh-cn/feature_userspace)
    * [WPM计算](zh-cn/feature_wpm)

  * 硬件特性
    * 显示
      * [HD44780 LCD控制器](zh-cn/feature_hd44780)
      * [ST7565 LCD驱动](zh-cn/feature_st7565)
      * [OLED驱动](zh-cn/feature_oled_driver)
    * 灯效
      * [背光](zh-cn/feature_backlight)
      * [LED矩阵](zh-cn/feature_led_matrix)
      * [RGB灯光](zh-cn/feature_rgblight)
      * [RGB矩阵](zh-cn/feature_rgb_matrix)
    * [音频](zh-cn/feature_audio)
    * [蓝牙](zh-cn/feature_bluetooth)
    * [Bootmagic Lite](zh-cn/feature_bootmagic)
    * [自定义矩阵](zh-cn/custom_matrix)
    * [Digitizer](zh-cn/feature_digitizer)
    * [拨动开关（DIP Switch）](zh-cn/feature_dip_switch)
    * [编码器（旋钮）](zh-cn/feature_encoders)
    * [触摸反馈](zh-cn/feature_haptic_feedback)
    * [摇杆](zh-cn/feature_joystick)
    * [LED指示](zh-cn/feature_led_indicators)
    * [MIDI](zh-cn/feature_midi)
    * [Proton C转换](zh-cn/proton_c_conversion)
    * [PS/2鼠标](zh-cn/feature_ps2_mouse)
    * [分体式键盘](zh-cn/feature_split_keyboard)
    * [速记](zh-cn/feature_stenography)
    * [热敏打印机](zh-cn/feature_thermal_printer)
    * [Velocikey](zh-cn/feature_velocikey)

* QMK开发
  * [PR Checklist](zh-cn/pr_checklist)
  * 打破兼容的改动
    * [总览](zh-cn/breaking_changes)
    * [我的PR已打上标记](zh-cn/breaking_changes_instructions)
    * [近期的变更日志(Changelog)](zh-cn/ChangeLog/20210529.md "QMK v0.13.0 - 2021 May 29")
    * [更早期的不兼容改动](zh-cn/breaking_changes_history)

  * C语言开发
    * [ARM调试指引](zh-cn/arm_debugging)
    * [AVR处理器](zh-cn/hardware_avr)
    * [C编码规范](zh-cn/coding_conventions_c)
    * [兼容的微处理器](zh-cn/compatible_microcontrollers)
    * [驱动](zh-cn/hardware_drivers)
      * [ADC驱动](zh-cn/adc_driver)
      * [Audio驱动](zh-cn/audio_driver)
      * [I2C驱动](zh-cn/i2c_driver)
      * [SPI驱动](zh-cn/spi_driver)
      * [WS2812驱动](zh-cn/ws2812_driver)
      * [EEPROM驱动](zh-cn/eeprom_driver)
      * [串口驱动](zh-cn/serial_driver)
      * [UART驱动](zh-cn/uart_driver)
    * [操控GPIO](zh-cn/gpio_control)
    * [键盘开发指引](zh-cn/hardware_keyboard_guidelines)

  * Python开发
    * [编码规范](zh-cn/coding_conventions_python)
    * [QMK CLI开发](zh-cn/cli_development)

  * 配置器开发
    * QMK API
      * [开发环境](zh-cn/api_development_environment)
      * [架构总览](zh-cn/api_development_overview)

  * 硬件平台开发
    * Arm/ChibiOS
      * [选择MCU](zh-cn/platformdev_selecting_arm_mcu)
      * [启动引导](zh-cn/platformdev_chibios_earlyinit)

  * QMK参考信息
    * [参与到QMK](zh-cn/contributing)
    * [翻译QMK文档](zh-cn/translating)<!--but should we translate this? currently keep it fallback-->
    * [配置](zh-cn/config_options)
    * [数据驱动配置](zh-cn/data_driven_config)
    * [Make指引](zh-cn/getting_started_make_guide)
    * [编写文档的最佳实践](zh-cn/documentation_best_practices)
    * [文档模板](zh-cn/documentation_templates)
    * [贡献配列到社区](zh-cn/feature_layouts)
    * [单元测试](zh-cn/unit_testing)
    * [常用函数](zh-cn/ref_functions)
    * [info.json参考资料](zh-cn/reference_info_json)

  * 深入了解
    * [键盘工作原理](zh-cn/how_keyboards_work)
    * [键盘矩阵原理](zh-cn/how_a_matrix_works)
    * [了解QMK](zh-cn/understanding_qmk)

  * QMK内部细节 (编辑中)
    * [定义](zh-cn/internals/defines)
    * [输入回调的注册](zh-cn/internals/input_callback_reg)
    * [Midi设备](zh-cn/internals/midi_device)
    * [Midi设备驱动流程](zh-cn/internals/midi_device_setup_process)
    * [Midi辅助功能](zh-cn/internals/midi_util)
    * [发送函数](zh-cn/internals/send_functions)
    * [Sysex工具](zh-cn/internals/sysex_tools)
    
<!--fromen:20211014-12:00(GMT+8) commit 04cf161aa01fd433b5dae69d9fd31569ed5dca59-->
