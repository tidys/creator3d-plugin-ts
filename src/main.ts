let methods = {
    onTest() {
        console.log('hello plugin ts!');
    },
    openPanel() {
        Editor.Panel.open('plugin-ts.panel')
    }
};
let load = function () {
    console.log('onLoad plugin-ts');
};
export {methods, load};

