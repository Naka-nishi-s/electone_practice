const electron = require("electron");

electron.app.on("ready", () => {
  const browserWindow = new electron.BrowserWindow();

  browserWindow.loadFile("./test.html");
});
