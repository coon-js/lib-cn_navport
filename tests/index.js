/**
 * coon.js
 * lib-cn_navport
 * Copyright (C) 2020 Thorsten Suckow-Homberg https://github.com/coon-js/lib-cn_navport
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const harness = new Siesta.Harness.Browser.ExtJS();

let isModern = window.location.href.indexOf("toolkit=modern") !== -1;

harness.configure({
    title          : 'lib-cn_navport - ' + (isModern ? "modern" : "classic"),
    disableCaching : true,
    loaderPath     : {

        'coon.test.view.mock' : './classic/src/view/mock',

        /**
         * Universal
         */
        'coon.navport' : '../src',
        'coon.navport.view.controller.NavigationToolbarViewController' : '../src/view/controller/NavigationToolbarViewController.js',
        'coon.navport.view.controller.NavigationViewportController' : '../src/view/controller/NavigationViewportController.js',
        'coon.comp.window.LockingWindow'    : '../../lib-cn_comp/src/window/LockingWindow.js',
        'coon.comp.container.Viewport' : '../../lib-cn_comp/src/container/Viewport.js',
        'coon.comp.list.Tree'      : '../../lib-cn_comp/src/list/Tree.js',
        'coon.navport.view' : '../src/view',

        'Ext.Package' : '../../../remote/package-loader/src/Package.js',
        'Ext.package' : '../../../remote/package-loader/src/package',

        /**
         * Requirements
         */
        'coon.core.app'       : '../../lib-cn_core/src/app',
        'coon.core.data'      : '../../lib-cn_core/src/data',
        'coon.comp.app'       : '../../lib-cn_comp/src/app',
        'coon.comp.window'    : '../../lib-cn_comp/classic/src/window'
    },
    preload        : [
        coon.tests.config.paths.extjs[isModern ? "modern" : "classic" ].css.url,
        coon.tests.config.paths.extjs[isModern ? "modern" : "classic" ].js.url
    ]
});

harness.start({
    group : 'universal',
    items : [{
        group : 'app',
        items : [
            'src/app/PackageControllerTest.js'
        ]
    },{
        group : 'data',
        items : [{
            group : 'schema',
            items : [
                'src/data/schema/BaseSchemaTest.js'
            ]
        }]
    }, {
        group : 'mixin',
        items : [
            'src/mixin/ViewportManageableTest.js'
        ]
    }, {
        group : 'model',
        items : [
            'src/model/NavigationModelTest.js'
        ]
    }, {
        group : 'store',
        items : [
            'src/store/NavigationTreeStoreTest.js'
        ]
    }, {
        group : 'view',
        items : [
            'src/view/NavigationTreeTest.js',
            'src/view/ContentContainerTest.js',
            'src/view/ContentWrapTest.js',
            'src/view/NavigationToolbarTest.js',
            'src/view/NavigationViewportTest.js', {
            group : 'controller',
            items : [
                'src/view/controller/NavigationToolbarViewControllerTest.js',
                'src/view/controller/NavigationViewportControllerTest.js'
            ]
        }, {
            group: 'pages',
            items: ['src/view/pages/Page404Test.js']
        }, {
            group : '(isolated tests)',
            items : [
                'src/view/NavigationViewportIsolatedTest_1.js',
                'src/view/NavigationViewportIsolatedTest_2.js',
                'src/view/NavigationViewportIsolatedTest_3.js',
                'src/view/NavigationViewportIsolatedTest_4.js'
            ]
        }]
    }]
});
