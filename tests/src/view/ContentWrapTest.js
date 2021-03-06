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

    var cwrap,
        cwrapConfig;

    t.afterEach(() => {
        if (cwrap) {
            cwrap.destroy();
            cwrap = null;
        }
    });

    t.beforeEach(() => {
        cwrapConfig = {renderTo: document.body};
    });


    // +-------------------------------
    // | Tests
    // +-------------------------------

    t.it("Should create and show the ContentWrap", (t) => {
        cwrap = Ext.create(
            "coon.navport.view.ContentWrap", cwrapConfig);

        t.expect(cwrap instanceof Ext.Container).toBe(true);

        t.expect(cwrap.alias).toContain("widget.cn_navport-conwrap");
        t.expect(Ext.isModern ? cwrap.getCls() : cwrap.cls)[Ext.isModern ? "toContain" : "toBe"]("cn_navport-conwrap");
        t.expect(cwrap.referenceHolder).toBe(true);

        t.expect(cwrap.lookup("cn_navport_ref_navtree")).toBeTruthy();
        t.expect(cwrap.lookup("cn_navport_ref_navtree") instanceof coon.navport.view.NavigationTree).toBeTruthy();

        t.expect(cwrap.lookup("cn_navport_ref_navtree").getWidth()).toBe(250);

        t.expect(cwrap.lookup("cn_navport_ref_conctr")).toBeTruthy();
        t.expect(cwrap.lookup("cn_navport_ref_conctr") instanceof coon.navport.view.ContentContainer).toBeTruthy();
    });

    t.it("Should use the proper layout", (t) => {
        cwrap = Ext.create(
            "coon.navport.view.ContentWrap", cwrapConfig);

        t.isInstanceOf(cwrap.getLayout(), Ext.isModern ? "Ext.layout.HBox" : "Ext.layout.container.HBox");
        t.expect(cwrap.getLayout().getAlign()).toBe("stretch");

    });


    t.it("Check animation configuration for the layout", (t) => {
        cwrap = Ext.create(
            "coon.navport.view.ContentWrap", cwrapConfig);

        if (Ext.isModern) {
            t.expect(cwrap.getLayout().animate).toBeUndefined;
            t.expect(cwrap.getLayout().animatePolicy).toBeUndefined();
        } else {
            t.expect(cwrap.getLayout().animate).toBe(true);
            t.expect(cwrap.getLayout().animatePolicy).toEqual({x: true, width: true});
        }


    });


});
