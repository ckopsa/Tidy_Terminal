const Gtk = imports.gi.Gtk;

function init() {
    return;
}

function buildPrefsWidget() {
    //let app = new Application();
    let builder = new Gtk.Builder();
    builder.add_from_file("/home/ckopsa/.local/share/gnome-shell/extensions/Tidy_Terminal@coljamkop.gmail.com/prefs.gtkbuilder");
    let window = builder.get_object("main-box");
    return window;
}
