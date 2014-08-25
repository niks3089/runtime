// Copyright 2014 Runtime.JS project authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

define('interface', ['vfs', 'resources'],
function(vfs, resources) {
    "use strict";

    /**
     * Export interface methods into system namespace
     */
    function registerInterface(name, methods) {
        vfs.setSystem(name, methods);
    }

    /**
     * Create new handle pool
     */
    function createHandlePool() {
        return resources.natives.createHandlePool();
    }

    return {
        registerInterface: registerInterface,
        createHandlePool: createHandlePool,
    };
});