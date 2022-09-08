const container = document.getElementById('placeholder')
function showPhoto(photo) {
  const img = new Image()
  img.src = 'https://placekitten.com/200/300'//photo.url
  container.appendChild(img)
  return Promise.resolve(photo.url);
}
const promises = fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(photos => { 
    const promises = photos.map(showPhoto)
    Promise.all(promises)
    .then(() => {
        document.title = 'ACME Inc'  
    })    
  })