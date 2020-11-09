import * as Fs from "fs"
import * as Path from 'path'

import Vue from 'vue'

let template = '<div id="app"></div>';
// let style = Fs.readFileSync(Path.join(__dirname, 'panel.css'), 'utf-8')
let $ = {app: '#app'};
let methods = {
    onData() {
        console.log('onData')
    }
};

let ready = function () {
    new Vue({
        // @ts-ignore
        el: this.$.app,
        render: h => h()
    });
};
export {template, methods, $, ready}
