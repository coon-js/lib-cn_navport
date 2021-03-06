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

StartTest((t) => {

    var toolbar,
        toolbarConfig;

    t.afterEach(() => {
        if (toolbar) {
            toolbar.destroy();
            toolbar = null;
        }
    });

    t.beforeEach(() => {
        toolbarConfig = {
            renderTo: document.body
        };
    });


    t.it("Should create and show the toolbar", (t) => {

        toolbar = Ext.create(
            "coon.navport.view.NavigationToolbar", toolbarConfig);

        if (Ext.isModern) {
            t.expect(coon.navport.view.NavigationToolbar.prototype.requires[0].$className).toBe("Ext.layout.HBox");
        }

        t.expect(toolbar instanceof Ext.Toolbar).toBeTruthy();
        t.expect(toolbar.alias).toContain("widget.cn_navport-tbar");
        t.expect(Ext.isModern ? toolbar.getCls() : toolbar.cls)[Ext.isModern ? "toContain" : "toBe"]("cn_navport-tbar");
        t.isInstanceOf(toolbar.getController(), "coon.navport.view.controller.NavigationToolbarViewController");
        t.expect(toolbar.lookup("cn_navport_ref_hidenavbtn")).toBeTruthy();
        t.expect(toolbar.lookup("cn_navport_ref_hidenavbtn") instanceof Ext.Button).toBe(true);
        t.expect(toolbar.lookup("cn_navport_ref_applogo") instanceof Ext.Component).toBe(true);

    });


    t.it("Test addNodeNavigation()", (t) => {
        toolbar = Ext.create(
            "coon.navport.view.NavigationToolbar", toolbarConfig);

        var res = toolbar.addNodeNavigation(
            [{xtype: "button", itemId: "foo"}], "id");

        t.isArray(res);
        t.isStrict(res[0], "foo");
    });


    t.it("Test addPermanentNavigation()", (t) => {
        toolbar = Ext.create(
            "coon.navport.view.NavigationToolbar", toolbarConfig);

        var res = toolbar.addPermanentNavigation(
            [{xtype: "button", itemId: "foo"}]);

        t.isArray(res);
        t.isStrict(res[0], "foo");
    });


    t.it("Test showNavigationForNode()", (t) => {
        toolbar = Ext.create(
            "coon.navport.view.NavigationToolbar", toolbarConfig);

        toolbar.addNodeNavigation(
            [{xtype: "button", itemId: "foo"}], "id");

        t.ok(toolbar.down("#foo").isHidden());
        toolbar.showNavigationForNode("id");
        t.notOk(toolbar.down("#foo").isHidden());
    });


    t.it("Test hasNodeNavigation()", (t) => {
        toolbar = Ext.create(
            "coon.navport.view.NavigationToolbar", toolbarConfig);

        t.isCalled("hasNodeNavigation", toolbar.getController());

        toolbar.addNodeNavigation(
            [{xtype: "button", itemId: "foo"}], "id");

        t.expect(toolbar.hasNodeNavigation("id")).toBe(true);
    });
});
