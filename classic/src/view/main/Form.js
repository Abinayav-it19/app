Ext.define('work.view.main.Form', {
    extend: 'Ext.form.Panel',
   
    xtype: 'Form',
    title:'Add Movie',
    width:800,
    bodyPadding:5,
    url:'http://localhost:1841/movie', //TODO adjust
    method:'POST',
    layout:'anchor',
    defaults:{
        anchor:'100%'
    },
    defaultType:'textfield',
    items:[
        {
            fieldLabel:'MovieName',
            name:'nameInp',
            allowBlank:false
        }
    ],
    jsonSubmit:true,
    buttons:[
        {
            text:'submit',
            formBind:true,
            disabled:true,
            handler:function(){
                var form=this.up('form');
                if(form.isValid()){
                    form.submit({
                        success:function(form,action){
                            Ext.Msg.alert(
                                'success',
                                'movie added'
                            )
                        },
                        failure:function(){
                            Ext.Msg.alert("failure","oops,something went wrong!")
                        }
                    
                    })
                }
            }
        }
    ]






})