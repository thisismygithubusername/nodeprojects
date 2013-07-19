function HTMLshell(internals) {
  return '<html>' + internals + '</html>'; 
}   

function Head() {
   return '<head>'+
   '<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
   '</head>';

}
function Body(internals) { 
   return '<body><div class="container">' 
      + internals + '</div></body>';
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

function CyborgHead(pagetitle){
   return    '<head><title>' + pagetitle +'</title>' +
     '<meta name="viewport" content="width=device-width">' + 
     '<link rel="stylesheet" href="//app.divshot.com/themes/cyborg/bootstrap.css">' +
     '<link rel="stylesheet" href="//app.divshot.com/css/bootstrap-responsive.css">'+
     '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>'+
     '<script type="text/javascript" src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>'
     + '</head>';
}

function createCyborgwithbody(body, title){
   var head = CyborgHead(title);
   var body = Body(body);
   return HTMLshell(head + body);
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
exports.createcyborg = createCyborgwithbody;



