/**
 * This view is an example list of people.
 */
Ext.define('work.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'work.store.Personnel'
    ],

    title: 'Movie Details',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Movie Id',  dataIndex: 'name' },
        { text: 'Movie Name', dataIndex: 'email', flex: 1 },
        { text: 'Released Year', dataIndex: 'phone', flex: 1 },
        { text: 'Director Name',  dataIndex: 'name' },
        { text: 'Actor Name', dataIndex: 'email', flex: 1 },
        { text: 'Rent Per Month', dataIndex: 'phone', flex: 1 },
        { text: 'Ratings', dataIndex: 'phone', flex: 1 }


    ],

    listeners: {
        select: 'onItemSelected'
    }
});
