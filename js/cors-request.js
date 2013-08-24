/**
  * Create CORS object
  */
function createCORSrequest(method, url) {
  
  // Create XHR object
  var xhr = new XMLHttpRequest();
  
  if ('withCredentials' in xhr) {
  
    // XMLHTTPRequest2 object
    xhr.open(method, url, true);
    
  } else if (typeof XDomainRequest != 'undefined') {
  
    // XDomainRequest object for IE
    xhr = new XDomainRequest();
    xhr.open(method, url);
    
  } else {
  
    // CORS not supported by browser
    xhr = null;
    
  }
  
  return xhr;
}

/**
  * Make CORS request
  */
function makeCORSrequest() {
  
  // Set URL to CORS enabled server
  // ColdFusion example: <cfheader name="Access-Control-Allow-Origin" value="*">
  var url = 'http://www.domain.com';
  
  // Create CORS request
  var xhr = createCORSRequest('GET', url);
  
  // CORS not supported 
  if (!xhr) {
    console.log('Not supported');
    return;
  }
  
  // On successful request
  xhr.onload = function() {
    console.log(xhr.responseText);
  };
  
  // On error
  xhr.onerror = function() {
    console.log('Error making the request.');
  };
  
  // Send request
  xhr.send();
}
