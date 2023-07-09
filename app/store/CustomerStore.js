Ext.define('work.store.CustomerStore', {
    extend: 'Ext.data.Store',
    alias:'store.CustomerStore',
    model:'work.model.Customer',
    autoLoad:true,
    fields:[
        {name:'Name'},
           { name:'add'},
           { name:'phone'},
           { name:'email'}
    ],
    proxy:{
        type:'ajax',
        reader:{
            type:'json',
            rootProperty:'items'
        },
        url:'http://localhost:1841/movie'//TODO adjust
    }

   
});
