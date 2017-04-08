/**
 * conjoon
 * (c) 2007-2016 conjoon.org
 * licensing@conjoon.org
 *
 * app-cn_treenavviewport
 * Copyright (C) 2016 Thorsten Suckow-Homberg/conjoon.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

describe('conjoon.cn_treenavviewport.view.NavigationToolbarTest', function(t) {

    var toolbar,
        toolbarConfig;

    t.afterEach(function() {
        if (toolbar) {
            toolbar.destroy();
            toolbar = null;
        }
    });

    t.beforeEach(function() {
        toolbarConfig = {
            renderTo : document.body
        }
    });


    t.it("Should create and show the toolbar", function(t) {
        toolbar = Ext.create(
            'conjoon.cn_treenavviewport.view.NavigationToolbar', toolbarConfig);

        t.expect(toolbar instanceof Ext.Toolbar).toBeTruthy();

        t.expect(toolbar.alias).toContain('widget.cn_treenavviewport-tbar');

        t.expect(toolbar.cls).toBe('cn_treenavviewport-tbar');

        t.expect(toolbar.referenceHolder).toBe(true);

        t.expect(toolbar.lookup('cn_treenavviewport_ref_hidenavbtn')).toBeTruthy();

        t.expect(toolbar.lookup('cn_treenavviewport_ref_hidenavbtn') instanceof Ext.Button).toBe(true);

    });

});
