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

import Ability from '@ohos.application.Ability'

const MODULE_TAG = 'ExtWallpaper : ';

export default class MainAbility extends Ability {
    onCreate(want, launchParam) {
        console.info(MODULE_TAG + "onCreate");
    }

    onDestroy() {
        console.info(MODULE_TAG + "onDestroy");
    }

    onWindowStageCreate(windowStage) {
        console.info(MODULE_TAG + "onWindowStageCreate");
        console.info(MODULE_TAG + "startWallpaperExtAbility begin");
        var want = {
            "bundleName": "com.test.testApp",
            "abilityName": "com.test.testApp.WallpaperExtAbility",
        }
        this.context.startAbility(want).then((data) => {
            console.info(MODULE_TAG + "startAbility success:" + JSON.stringify(data));
        }).catch((error) => {
            console.error(MODULE_TAG + "startAbility failed:" + JSON.stringify(error));
        })
        console.info(MODULE_TAG + "startWallpaperExtAbility end");
    }

    onWindowStageDestroy() {
        console.info(MODULE_TAG + "onWindowStageDestroy");
    }

    onForeground() {
        console.info(MODULE_TAG + "onForeground");
    }

    onBackground() {
        console.info(MODULE_TAG + "onBackground");
    }
}
