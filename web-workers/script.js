var list = document.querySelector('ul');

if (window.Worker) {
  var worker = new Worker('worker.js?cachebust=' + new Date());  
  worker.addEventListener('message', function handleMsg(evt) {
    console.log('[Main] Image received. ' + evt.data.url);
    if (evt.data.type === 'img') {
      appendImage(evt.data.url, list);      
    } else {
      console.log('Received from worker: ', evt.data);
    }
  });
  console.log('[Main] Set up worker', worker);
  worker.postMessage('Hello, worker!');
} else {
  console.error('Workers not supported');
  document.querySelector('p').textContent = 'Sorry, your browser does not support Web Workers :(';
}

function appendImage(imgSrc, list) {
  var item = document.createElement('li');
  var img = new Image();
  img.src = imgSrc;
  item.appendChild(img);
  list.appendChild(item);  
}
