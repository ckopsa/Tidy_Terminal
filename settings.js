#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;

const Application = new Lang.Class({
    //A Class requires an explicit Name parameter. This is the Class Name.
    Name: 'Application',

    //create the application
    _init: function() {
        this.application = new Gtk.Application();

       //connect to 'activate' and 'startup' signals to handlers.
       this.application.connect('activate', Lang.bind(this, this._onActivate));
       this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    //create the UI
    _buildUI: function() {
        let builder = new Gtk.Builder();
        builder.add_from_file("settings.gtkbuilder");
        this._window = builder.get_object("main-window");
        this._window.set_default_size(500, 300);
        this.application.add_window(this._window);
    },

    //handler for 'activate' signal
    _onActivate: function() {
        //show the window and all child widgets
        this._window.show_all();
    },

    //handler for 'startup' signal
    _onStartup: function() {
        this._buildUI();
    }
});

//run the application
let app = new Application();
app.application.run(ARGV);
