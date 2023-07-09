Ext.define('work.store.MovieStore', {
    extend: 'Ext.data.Store',
    alias:'store.MovieStore',
    model:'work.model.Movie',
    autoLoad:true,
    fields:[
        {name:'MovieName'},
           { name:'MovieActor'},
           { name:'MovieDirector'},
           { name:'MovieRatings'}
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
