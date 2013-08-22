/**
  * Sender
  * 
  * Requires:
  * <iframe
  *  src=""//www.destination-domain.com/post-message-listener.html"
  *  tabindex="-1"
  *  style="display:none; visibility:hidden"
  *  height="0"
  *  width="0"
  *  id="post-message-iframe"
  * ></iframe>
  */
  
window.onload = function() {
  var domain = "http://www.destination-domain.com";
  var iframe = document.getElementById('post-message-iframe').contentWindow;
  
  var message = '';
  
  iframe.postMessage(message, domain);
  
  window.addEventListener('message', function(event) {
    if (event.origin !== domain) return;
    console.log('response: ', event.data);
  }, false);
};

/**
  * Receiver
  */
window.addEventListener('message', function(event) {
  if (event.origin !== "http://www.sender-domain.com") return;
  var data = (localStorage.id !== undefined) ? localStorage.id : '';
  event.source.postMessage(data, event.origin);
}, false);
