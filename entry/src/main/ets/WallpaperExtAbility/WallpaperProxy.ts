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

const MODULE_TAG = 'ExtWallpaper : ';

export class WallpaperProxy {
  private static instance: WallpaperProxy;
  pixelMapCallBack = null;

  private constructor() {
    console.info(MODULE_TAG + "proxy initialized");
  };

  public static getInstance() {
    if (!this.instance) {
      console.info(MODULE_TAG + "proxy get fresh new");
      this.instance = new WallpaperProxy();
    }
    console.info(MODULE_TAG + "proxy get old one");
    return this.instance;
  }

  public registerCallback(callback) {
    console.info(MODULE_TAG + "proxy register callback type is : " + typeof callback);
    this.pixelMapCallBack = callback;
  }

  public executeCallback(data) {
    console.info(MODULE_TAG + "proxy execute callback start, data is : " + JSON.stringify(data));
    console.info(MODULE_TAG + "proxy execute callback type is : " + typeof this.pixelMapCallBack);
    this.pixelMapCallBack(data);
    console.info(MODULE_TAG + "proxy execute callback end");
  }
}

let wallpaperProxyInstance = WallpaperProxy.getInstance();
export default wallpaperProxyInstance;
