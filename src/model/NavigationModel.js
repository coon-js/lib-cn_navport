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

/**
 * Model class for model entities representing Nagivations.
 * The route can be used as the href for a button/item, triggering the routing
 * process of a controller.
 *
 *      @example
 *      var navigationNode = Ext.create('coon.core.model.NavigationModel', {
 *          text  : 'Users',
 *          route : '/users/getAll',
 *          view  : 'MyView.Panel'
 *      ));
 *
 * Each navigation node is represented by a view which can be specified by the
 * "view" property.
 *
 *
 * This model's {@link #toUrl} method is overridden so instances of this class
 * can directly be passed to {@link coon.navport.view.controller.NavigationViewPortController#redirectTo}.
 *
 *
 */
Ext.define('coon.navport.model.NavigationModel', {

    extend :  'Ext.data.TreeModel',

    requires : [
        'coon.navport.data.schema.BaseSchema'
    ],

    schema : 'cn_navport-baseschema',

    fields : [{
        name : 'route',
        type : 'string',
        validators : [{
            type : 'presence'
        }]
    }, {
        name : 'text',
        type : 'string',
        validators : [{
            type : 'presence'
        }]
    }, {
        name : 'view',
        type : 'auto'
    }],

    toUrl : function() {
        return this.get('route');
    }

});
