// https://blog.csdn.net/u014563989/article/details/75045052

//electron-packager . oxui --win --out presenterTool --arch=x64 --app-version 1.0.0 --overwrite --ignore=node_modules

var fs = require('fs'),
    textarea = document.getElementsByTagName('textarea')[0],
    button = document.getElementsByTagName('button')[0];

function writeFile() {
    var text = textarea.value;

    fs.writeFileSync('message.txt',
        text, 'utf8');
}

button.onclick = writeFile;