function HTMLshell(internals) {
  return '<html>' + internals + '</html>'; 
}   

function Head() {
   return '<head>'+
   '<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
   '</head>';

}
function Body(internals) { 
   return '<body>'+
      internals 
      + '</body>';
}

function Form(internals) {
   return '<form action="/upload" method="post">'
   + internals + 
    '</form>';
}

function Textbox(){
   return  '<textarea name="text" rows="20" cols="60"></textarea>'+ 
      '<input type="submit" value="Submit text" />';
}

function WritePage(response, page) { 
   response.write(page);
   response.end();
}

function WriteHtml(response, page) {
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write(page);
   response.end();
}

function dump(){
   return '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/upload" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+ '<input type="submit" value="Submit text" />'+ '</form>'+
      '</body>'+
      '</html>';
}
exports.htmlshell = HTMLshell;
exports.head = Head;
exports.body = Body; 
exports.form = Form;
exports.textbox = Textbox;
exports.writePage = WritePage;
exports.writehtml = WriteHtml; 

