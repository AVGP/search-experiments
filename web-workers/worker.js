// console.log a message that was received from the main thread
self.onmessage = function(evt) {
  console.log('[Worker] received msg', evt.data);
  self.postMessage({type: 'echo', msg: evt.data});
}

// begin the actual work: Send URLs of cat pictures to the main thread
// the first one is sent immediately
self.postMessage({ type: 'img', url: 'https://cat-api-237122.appspot.com/img/13.jpg'});     
for(var i=0; i<11;i++) {
  (function(index) {
    setTimeout(function() {
      self.postMessage({ type: 'img', url: 'https://cat-api-237122.appspot.com/img/' + (index + 1) + '.jpg'});     
    }, index * 1500);
  })(i);
}