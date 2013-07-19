var utils = require("./Utils");
var exec = require("child_process").exec;
var htmlhelper = require("./htmlhelper");

function printCall(handlerType) {
   console.log("Request handler '" + handlerType + "'was called.");
}

function start(response) { 
   printCall("start"); 
   //exec("ls -lah", function (error, stdout, stderr) { 
     // utils.writeMessage(response, stdout);
  // });
   var head = htmlhelper.head();
   var textbox = htmlhelper.textbox();
   var form = htmlhelper.form(textbox);
   var body = htmlhelper.body(form);
   var page = htmlhelper.htmlshell(head + body); 
   htmlhelper.writehtml(response, page);
}

function upload(response) { 
   printCall("upload");
   utils.writeMessage(response, "Uploading this bitch");
}

function girl(response) {
   printCall("girl");
   utils.writeMessage(response, "You know you want this dick"); 
}

exports.start = start; 
exports.upload = upload;
exports.girl = girl; 
 
