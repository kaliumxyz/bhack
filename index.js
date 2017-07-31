'use strict'
// Imports.
const { app, BrowserWindow } = require('electron')


/*
 * Creating the window
 */

// Global variable for window object.
const win
const windowConfig = {
	frame: false,
	fullscreen: true,
	thickFrame: false,
	fullscreenable: true,
}

// Don't do anything till the app is ready.
app.once('ready', _ => {
	// The window must be assigned to a variable else the gc will eat it.
	 win = new BrowserWindow(windowConfig)
})


