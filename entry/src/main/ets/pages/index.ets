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
 
import wallPaper from '@ohos.app.wallpaperability'
import wallpaperProxyInstance from '../WallpaperExtAbility/WallpaperProxy'

const MODULE_TAG = 'ExtWallpaper : ';
let changeCount = 0;

@Entry
@Component
struct Index {
  @StorageLink('slPixelData') pixelDataByStorage: any = [];
  @State pixelDataByCode: PixelMap = undefined;

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Image(this.pixelDataByCode !== undefined ? this.pixelDataByCode : this.pixelDataByStorage)
    }
    .width('100%')
    .height('100%')
  }

  aboutToAppear() {
    console.info(MODULE_TAG + "index page about to appear");
    this.registerWallpaperChangeCallback();
    console.info(MODULE_TAG + "index page about to appear end");
  }

  onPageShow() {
    console.info(MODULE_TAG + "index page show");
  }

  registerWallpaperChangeCallback() {
    console.info(MODULE_TAG + 'index start to register callback');
    wallpaperProxyInstance.registerCallback((data) => {
      if (data === null || typeof data === 'undefined') {
        console.info(MODULE_TAG + 'index page get pixel map data in register callback is null');
        return;
      }
      console.info(MODULE_TAG + 'index page send pixel map data in register callback : ' + data);
      this.pixelDataByCode = data;
      console.info(MODULE_TAG + 'index page get pixel map data in register callback end');
    });
    AppStorage.SetOrCreate('slWallpaperProxy', wallpaperProxyInstance);
    console.info(MODULE_TAG + 'end to register callback');
  }
}