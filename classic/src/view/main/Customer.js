Ext.define('work.view.main.Customer', {
    extend: 'Ext.grid.Panel',
    store:{type:'CustomerStore'},
    xtype: 'grid',
    title:'Customer',
    columns:[
        {text:'Name',dataIndex:'Name',flex:1 },
        {text:'add',dataIndex:'add',flex:1 },
        {text:'phone',dataIndex:'phone',flex:1 },
        {
             text:'email',
        dataIndex:'email',
        xtype:'widgetcolumn',
        widget:
        {
            xtype:'progressbarwidget',
            textTpl:'{value:percent}'
        },
        
        flex:1 },

    ] 
    //, renderTo:Ext.getBody()




})