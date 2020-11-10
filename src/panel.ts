import * as Fs from "fs"
import * as Path from 'path'
import {debug} from "webpack";

let template = '<div id="app"><panel></panel></div>';
// let style = Fs.readFileSync(Path.join(__dirname, 'panel.css'), 'utf-8')
let $ = {app: '#app'};
let methods = {
    onData() {
        console.log('onData')
    }
};
// @ts-ignore
debugger
const paneView = require('./panel-view.js')
let ready = function () {
    const Vue = require('vue/dist/vue')
    new Vue({
        // @ts-ignore
        el: this.$.app,
        components: {
            panel: paneView,
        }
    });
};
export {template, methods, $, ready}

