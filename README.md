# Settings<a name="ZH-CN_TOPIC_0000001103421572"></a>

-   [简介](#section11660541593)
    -   [架构图](#section48896451454)

-   [目录](#section161941989596)
-   [相关仓](#section1371113476307)

## 简介<a name="section11660541593"></a>

壁纸应用是 OpenHarmony 系统中预置的系统应用，为用户提供设置系统壁纸的基础能力，支持通过其他第三方应用设置用户自定义壁纸。

### 架构图<a name="section48896451454"></a>

![](figures/zh-cn_image_0000001153225717.png)

## 目录<a name="section161941989596"></a>

```
/applications/standard/settings
├── entry             # 主entry模块目录
│   └── src
│       ├── main
│           ├── ets               # ets模块目录
│           └────── ├── pages     # 组件页面存放目录
│                   ├── resources # 其它共用资源
│           ├── resources         # 资源配置文件存放目录
│           |   └── base          # 默认语言场景，图片资源，字体大小，颜色资源内
|           |       ├── element
|           |       ├── media
|           |       └── profile
│           └── module.json5      # 全局配置文件
└── LICENSE                # 许可文件
```

## 相关仓<a name="section1371113476307"></a>

系统应用

**applications\_themes**
