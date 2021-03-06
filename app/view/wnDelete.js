/*
 * File: app/view/wnDelete.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.wnDelete', {
    extend: 'Ext.window.Window',
    alias: 'widget.wnDelete',

    height: 173,
    id: 'wnDelet',
    width: 381,
    bodyBorder: false,
    title: 'Delete info',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    id: 'btnYes',
                    margin: '50 0 0 50',
                    width: 100,
                    text: 'yes'
                },
                {
                    xtype: 'button',
                    id: 'btnNo',
                    margin: '50 0 0 50',
                    width: 100,
                    text: 'no'
                }
            ]
        });

        me.callParent(arguments);
    }

});