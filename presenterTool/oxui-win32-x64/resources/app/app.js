const {BrowserWindow,app} = require('electron')
 
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1500,
        height:800
    }); 
    mainWindow.loadURL('file://' + __dirname + '/doc/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

 