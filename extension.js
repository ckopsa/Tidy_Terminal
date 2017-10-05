const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;

let text, button, toggle;


function _hideHello() {
    Tweener.addTween(text, {
        x: 0 - text.width,
        y: 0 - text.height,
        time: .5,
        transition: 'easeOutExpo',
        onComplete: () => {
            Main.uiGroup.remove_actor(text);
            text = null;
        }
    });
}

function _showHello() {
    if (!text) {
        text = new St.Label({
            style_class: 'helloworld-label',
            text: "Hello, Colton!"
        });
        Main.uiGroup.add_actor(text);
    }

    text.opacity = 255;

    let monitor = Main.layoutManager.primaryMonitor;

    text.set_position(0 - text.width, 0 - text.height);
    // monitor.y + Math.floor(monitor.height / 2 - text.height / 2));

    Tweener.addTween(text, {
        x: Math.floor(monitor.width / 2 - text.width / 2),
        y: Math.floor(monitor.height / 2 - text.height / 2),
        time: .5,
        transition: 'easeOutExpo'
    });
}

function init() {
    button = new St.Bin({
        style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        x_fill: true,
        y_fill: false,
        track_hover: true
    });
    let icon = new St.Icon({
        icon_name: 'system-run-symbolic',
        style_class: 'system-status-icon'
    });

    toggle = false;
    button.set_child(icon);
    button.connect('button-press-event', () => {
        toggle = !toggle;
        if (toggle == true) {
            _showHello();
        } else {
            _hideHello();
        }
    });
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
