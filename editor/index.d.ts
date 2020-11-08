declare module Editor {
    export var Panel: Panel;
    export var Project: Project;
    export var App: App;
    export var Dialog: Dialog;
    export var Message: Message;
    export var Profile: Profile;
    export var Utils: Utils;
    export var Selection: Selection;
}

declare interface Selection {
    clear();

    hover();

    select();

    unselect();

    getSelected()
}

declare module Utils {
    interface File {
        getName()
    }

    interface Math {
        add();

        sub();

        clamp()
    }

    interface Path {
        baseName(path: string, ext: string)

        baseNameNoExt();

        dirname();

        extname();

        join();

        normalize();

    }
}

declare interface Profile {
    getConfig();

    setConfig();

    removeConfig();

    getProject();

    setProject();

    removeProject();

}

declare interface Message {
    broadcast();

    send();

    request();

}

declare interface App {
    version: string;
    dev: boolean;
    home: string;
    path: string;
}

declare interface Dialog {
    error();

    info();

    save();

    warn();

    select()
}

declare interface Project {
    path: string;
    uuid: string;
    type: string;
}

declare interface Panel {
    open(pluginName: string);

    close();

    has();
}




