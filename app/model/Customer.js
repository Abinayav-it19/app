Ext.define('work.model.Customer', {
    extend: 'Ext.data.Model',

    store:'work.Movie.CustomerStore',
 fields:[
    {name:'Name',type:'string'},
    {name:'add',type:'string'},
    {name:'phone',type:'string'},
    {name:'email',type:'string'}
 ]
    
}); 