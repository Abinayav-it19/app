/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'work.Application',

    name: 'work',

    requires: [
        // This will automatically load all classes in the work namespace
        // so that application classes do not need to require each other.
        'work.*'
    ],

    // The name of the initial view to create.
    mainView: 'work.view.main.Main'
});
