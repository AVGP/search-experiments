// console.log a message that was received from the main thread
self.onmessage = function(evt) {
  console.log('[Worker] received msg', evt.data);
  self.postMessage({type: 'echo', msg: evt.data});
}

// begin the actual work: Send URLs of cat pictures to the main thread
// the first one is sent immediately
fetch('https://cat-api-237122.appspot.com/cats/')
.then(function (res) { return res.json(); })
.then(function (cats) {
  // immediately after the promise
  self.postMessage({type: 'img', url: 'https://cat-api-237122.appspot.com/img/13.jpg'});     
  cats.forEach(function (cat, index) {
    // deferred
    setTimeout(function() {
      self.postMessage({type: 'img', url: 'https://cat-api-237122.appspot.com/' + cat.url});     
    }, index * 1500);
  })
});