function sleep(milliseconds) { 
   var startTime = new Date().getTime();
   while( new Date().getTime() < startTime + milliseconds );
}

function isfavicon(routeName) {
   if (routeName == "/favicon.ico"){
     return true;
   } else { 
      return false;
   }
}

function displayRecieved(routeName) {
   if(!isfavicon(routeName)) { 
      console.log("Request for " + routeName + " recieved.");
   }
}

function writeHeadWithMessage(response, message){
   response.writeHead(200, { "Content-Type" : "text/plain"});
   if(message){
      response.write(message);
   }
   response.end();
}

exports.sleep = sleep;
exports.display = displayRecieved;
exports.isFavicon = isfavicon;
exports.writeMessage = writeHeadWithMessage;
