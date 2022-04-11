/**
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Extension from '@ohos.application.WallpaperExtension'
import wallPaper from '@ohos.app.wallpaperability'

const MODULE_TAG = 'ExtWallpaper : ';

export default class WallpaperExtAbility extends Extension {
    onCreated(want) {
        console.info(MODULE_TAG + 'ability on created start');
        super.setUiContent("pages/index");
        this.initWallpaperImage();
        console.info(MODULE_TAG + 'ability on created end');
    }

    onWallpaperChanged(wallpaperType) {
        console.info(MODULE_TAG + 'ability on wallpaper changed start, type is : ' + wallpaperType);
        if (wallPaper) {
            this.sendPixelMapData();
        }
        console.info(MODULE_TAG + 'ability on wallpaper changed end');
    }

    onDestroy() {
        console.info(MODULE_TAG + 'ability on destroy');
    }

    initWallpaperImage() {
        console.info(MODULE_TAG + 'ability init wallpaper image start');
        if (!wallPaper) {
            console.info(MODULE_TAG + 'ability init wallpaper image failed as wallpaper is null');
            return;
        }
        this.sendPixelMapData();
        console.info(MODULE_TAG + 'ability init wallpaper image end');
    }

    sendPixelMapData() {
        wallPaper.getPixelMap(0, (err, data) => {
           console.info(MODULE_TAG + 'ability get pixel map data start');
            if (err) {
                console.info(MODULE_TAG + 'ability get pixel map failed, error : ' + JSON.stringify(err));
            } else {
                console.info(MODULE_TAG + 'ability get pixel map, data : ' + JSON.stringify(data));
                AppStorage.SetOrCreate('slPixelData', data);
            }
            console.info(MODULE_TAG + 'ability get pixel map data end');
        });
    }
};
