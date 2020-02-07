var list = document.querySelector('ul');

if (window.Worker) {
  var delay = parseInt(new URLSearchParams(window.location.search).get('delay'), 10);
  var worker = new Worker('worker.js?cachebust=' + new Date().getTime());  
  worker.addEventListener('message', function handleMsg(evt) {
    if (evt.data.type === 'img') {
      console.log('[Main] Image received. URL to load: ' + evt.data.url);
      appendImage(evt.data.url, list);      
    } else {
      console.log('Received from worker: ', evt.data);
    }
  });
  console.log('[Main] Set up worker', worker);
  worker.postMessage({msg: 'Hello, worker!', delay: delay });
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
