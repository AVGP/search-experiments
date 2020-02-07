var waitMS = 100;
// console.log a message that was received from the main thread
self.onmessage = function(evt) {
  console.log('[Worker] received msg', evt.data);
  waitMS = evt.data.delay || 1000;
  self.postMessage({type: 'echo', msg: evt.data});
  // load more cats!
  console.log('[Worker] Async load - using delay ' + waitMS);
  for(var i=0; i<5;i++) {
    (function(index) {
      setTimeout(function() {
        console.log('[Worker] Sent img #' + (20 + index));
        self.postMessage({ type: 'img', url: 'https://cat-api-237122.appspot.com/img/' + (index + 20) + '.jpg'});     
      }, index * waitMS);
    })(i);
  }
  
}

// begin the actual work: Send URLs of cat pictures to the main thread
// the first one is sent immediately
console.log('[Worker] Sync load - using delay ' + waitMS);
self.postMessage({ type: 'img', url: 'https://cat-api-237122.appspot.com/img/13.jpg'});     
for(var i=0; i<5;i++) {
  (function(index) {
    setTimeout(function() {
      console.log('[Worker] Sent img #' + index);
      self.postMessage({ type: 'img', url: 'https://cat-api-237122.appspot.com/img/' + (index + 1) + '.jpg'});     
    }, index * waitMS);
  })(i);
}
