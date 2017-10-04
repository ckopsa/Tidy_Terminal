const Gtk = imports.gi.Gtk;
const Me = imports.misc.extensionUtils.getCurrentExtension();

function init() {
    return;
}

function buildPrefsWidget() {
    //let app = new Application();
    let builder = new Gtk.Builder();
    builder.add_from_file(Me.path + "/prefs.gtkbuilder");
    let window = builder.get_object("main-box");
    return window;
}
