'use strict'
// Imports.
const { app, BrowserWindow } = require('electron')
require('dotenv').config()

/*
 * Creating the window
 */

// Global variable for window object.
let win
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
	win.loadURL(`file://${__dirname}/${process.env.theme}.html`)
})


