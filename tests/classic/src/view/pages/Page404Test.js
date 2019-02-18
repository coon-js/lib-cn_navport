/**
 * coon.js
 * app-cn_navport
 * Copyright (C) 2019 Thorsten Suckow-Homberg https://github.com/coon-js/app-cn_navport
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

describe('coon.navport.view.pages.404Test', function(t) {

    var page;

    t.afterEach(function() {
        if (page) {
            page.destroy();
            page = null;
        }
    });

    t.beforeEach(function() {

    })


    t.it("Should create and show Page", function(t) {
        page = Ext.create('coon.navport.view.pages.Page404');

        t.expect(page instanceof coon.comp.window.LockingWindow).toBe(true);
        t.expect(page.cls).toBe('cn_navport-pg404');
        t.expect(page.alias).toContain('widget.cn_navport-pg404');
    });

    t.it("Should test mixin", function(t) {
        page = Ext.create('coon.navport.view.pages.Page404');
        t.expect(page.canNavigationViewportCloseView()).toBe(true);
    });

    t.it("Should test homeToken", function(t) {
        var page = Ext.create('coon.navport.view.pages.Page404', {
            homeToken : 'testhome'
        });


        var pg = Ext.dom.Query.select('label.descr a');

        t.ok(pg);
        t.is(pg.length, 1);

        t.expect(pg[0].href.split('#')[1]).toBe('testhome');
    });

});
