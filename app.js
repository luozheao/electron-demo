const {BrowserWindow,app} = require('electron')
 
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1500,
        height:900
    }); 
    mainWindow.loadURL('file://' + __dirname + '/doc/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

 