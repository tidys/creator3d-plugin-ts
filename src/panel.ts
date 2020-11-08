import * as Fs from "fs"
import * as Path from 'path'

let template = Fs.readFileSync(Path.join(__dirname, 'panel.html'), 'utf-8')
let methods = {
    onData() {
        console.log('onData')
    }
};
export {template, methods}
