// 
//  app.js
//  screnSize
//  
//  Created by addiel on 2012-03-04.
//  Copyright 2012 addiel. All rights reserved.
// 

//
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({
	backgroundColor:'#fff'
});



var ancho = Titanium.Platform.displayCaps.platformWidth;
var alto = Titanium.Platform.displayCaps.platformHeight;

var botonAncho = Titanium.UI.createButton({
	title:'ancho',
	top:'30%'
});
win.add(botonAncho);
botonAncho.addEventListener('click', function(e){
	alert (ancho + ' pixeles de ancho');
});

var botonAlto = Titanium.UI.createButton({
	title:'alto',
	top:'60%'
});
win.add(botonAlto);
botonAlto.addEventListener('click', function(e){
	alert (alto + ' pixeles de alto');
});

win.open();