Ext.define('work.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    store:{type:'MovieStore'},
    xtype: 'mainGrid',
    title:'Movie',
    columns:[
        {text:'MovieName',dataIndex:'MovieName',flex:1 },
        {text:'MovieActor',dataIndex:'MovieActor',flex:1 },
        {text:'MovieDirector',dataIndex:'MovieDirector',flex:1 },
        {
             text:'MovieRatings',
        dataIndex:'MovieRatings',
        xtype:'widgetcolumn',
        widget:
        {
            xtype:'progressbarwidget',
            textTpl:'{value:percent}'
        },
        
        flex:1 },

    ] ,
    renderTo:Ext.getBody()




})