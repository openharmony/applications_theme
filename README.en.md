# Settings<a name="EN-US_TOPIC_0000001103554544"></a>

-   [Introduction](#section11660541593)
    -   [Architecture](#section48896451454)

-   [Directory Structure](#section161941989596)
-   [Repositories Involved](#section1371113476307)

## Introduction<a name="section11660541593"></a>
The Wallpaper is a system application prebuilt in OpenHarmony. It provides a basic ability for users to set system wallpaper, and support change wallpaer by other applications.

### Architecture<a name="section48896451454"></a>

![](figures/en-us_image_0000001153225717.png)

## Directory Structure<a name="section161941989596"></a>

```
/applications/standard/settings
├── entry             # main entry module
│   └── src
│       ├── main
│           ├── ets               # ets module
│           └────── ├── pages     # pages folder
│                   ├── resources # other common resources
│           ├── resources         # default resources
│           |   └── base          # basic language picutre and etc resources
|           |       ├── element
|           |       ├── media
|           |       └── profile
│           └── module.json5      # global config
└── LICENSE                       # copyright license file
```

## Repositories Involved<a name="section1371113476307"></a>

System apps

**applications\_settings**
