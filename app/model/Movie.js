Ext.define('work.model.Movie', {
    extend: 'Ext.data.Model',

    store:'work.Movie.MovieStore',
 fields:[
    {name:'MovieName',type:'string'},
    {name:'MovieActor',type:'string'},
    {name:'MovieDirector',type:'string'},
    {name:'MovieRatings',type:'string'}
 ]
    
}); 