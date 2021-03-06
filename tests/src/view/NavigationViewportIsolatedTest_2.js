/**
 * coon.js
 * extjs-comp-navport
 * Copyright (C) 2017-2021 Thorsten Suckow-Homberg https://github.com/coon-js/extjs-comp-navport
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

import initAppTest, {appConfig} from "../../lib/AppTestHelper.js";

StartTest((t) => {


    initAppTest(t, {
        navigation: [{
            route: "myRoute",
            text: "my route",
            children: [{
                route: "route_1_2",
                text: "sub_route",
                children: [{
                    route: "route_1_2_",
                    text: "sub_route_2"
                }]
            }]
        }, {
            route: "myRoute1",
            text: "my route 1"
        }]
    }).then(t => {

        t.chain({
            action: function (next) {

                t.it("Should be possible to click a Tree's Menu Item and trigger routing", (t) => {
                    console.warn("Adding custom hash so test processes properly");
                    // browser not firing hashchange if this is not set by hand
                    // might be n issue with the iframe the test runs in
                    Ext.util.History.add("");

                    var app = Ext.create("coon.comp.app.Application", {
                        name: "check",
                        mainView: "coon.navport.view.NavigationViewport",
                        controllers: [
                            "coon.navport.app.PackageController"
                        ]
                    });

                    var viewport = app.getMainView(),
                        navTree  = viewport.down("cn_navport-navtree"),
                        store    = navTree.getStore();

                    viewport.addPostLaunchInfo(appConfig.postLaunchInfo);

                    let historyRoute = "route_1_2_";
                    t.click(navTree.getItem(store.getAt(0)), () => {
                        Ext.util.History.add(historyRoute);
                        t.waitForMs(t.parent.TIMEOUT, () =>  {
                            t.expect(navTree.getSelection()).toBe(store.getRoot().findChildBy(function (node) {
                                if (node.get("route") === historyRoute) {
                                    return true;
                                }
                            }, null, true));

                        });
                    });


                });

            }});


    });


});
