var utils = require("./Utils");
var exec = require("child_process").exec;
var htmlhelper = require("./htmlhelper");

function printCall(handlerType) {
   console.log("Request handler '" + handlerType + "'was called.");
}

function start(response) { 
   printCall("start"); 
   //exec("ls -lah", function (error, stdout, stderr) { 
     // utils.writeMessage(respnse, stdout);
  // });
   var textbox = htmlhelper.textbox();
   var form = htmlhelper.form(textbox);
   var page = htmlhelper.createcyborg(form, "My Pimp Page");
   htmlhelper.writePage(response, page);
}

function upload(response) { 
   printCall("upload");
   utils.writeMessage(response, "Uploading this bitch");
}

function girl(response) {
   printCall("girl");
   utils.writeMessage(response, "You know you want this"); 
}

exports.start = start; 
exports.upload = upload;
exports.girl = girl; 
 
