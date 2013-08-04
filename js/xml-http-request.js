/* --------------------------------------------------
  XMLHttpRequest (GET, POST)
-------------------------------------------------- */

// GET
var xhr = new XMLHttpRequest();
// Get data from <file-name> | true = asynchronous | false = synchronous
xhr.open('GET', '<file-name>', true);
// Check for data on every status change
xhr.onreadystatuschange = function () {
  if (xhr.readyState === 4) {
    var status = xhr.status;
    // Check for server status
    if ((status >= 200 && status < 300) || status === 304) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.status); // error
    }
  }
};
// Send empty data since this is a GET request
xhr.send(null);

// POST
var form = document.getElementById('yourform');
// On form submit hijack default behavior
form.addEventListener('submit', function (event) {
  var data = getRequestBody(),
  xhr = new XMLHttpRequest();
  // Post to a <file-name> | true = asynchronous | false = synchronous
  xhr.open('POST', '<file-name>', true);
  // Set request headers
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // Check for data on every status change
  xhr.onreadystatuschange = function () {
    if (xhr.readyState === 4) {
      var status = xhr.status;
      // Check for server status
      if ((status >= 200 && status < 300) || status === 304) {
        console.log(xhr.responseText);
      } else {
        console.log(xhr.status); // error
      }
    }
  };
  // Send data from the form
  xhr.send(data);
  // Prevent default behavior on submit
  event.preventDefault();
});
// Get data from the form
var getRequestBody = function () {
  var values = [];
  // Loop thru elements and encode key/value pairs
  for (var i = 0, l = form.elements.length; i < l; i = i + 1) {
    var el = form.elements[i],
    name = encodeURIComponent(el.name),
    value = encodeURIComponent(el.value),
    complete = name + '=' + value;
    values.push(complete);
  }
  // Return data as URI encoded string
  return values.join('&');
};