var util = require("./Utils");

function route(handle, pathname, response) { 
   if(!util.isFavicon(pathname)) {
      console.log("About to route a request for " + pathname);
      if(typeof handle[pathname] === 'function') { 
         handle[pathname](response);
      } else { 
        console.log("No request handler found for " + pathname);
        console.log(pathname + " isnt fucking supported.");
        response.writeHead(404, { "Content-Type" : "text/plain" } );
        response.writeHead("404 Not found bitch");
        response.end();
      } 
   }
}
exports.route = route; 
