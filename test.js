function tobeyBob(e) {
  const imgItem = e.currentTarget;
  document.getElementById('displayImage').src =
    `images/artwork/${imgItem.getAttribute('imgNo')}.png`;
}
  document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById('22');
    for (let i = 1; i <= 8; i++) {
      let img = document.createElement('img');
      img.setAttribute('imgNo', i); 
      img.src = `images/thumb/2022/${i}.png`;
      img.addEventListener('click', tobeyBob);
      gallery.prepend(img);
  }   
    var gallery = document.getElementById('23');
    for (let i = 9; i <= 20; i++) {
      let img = document.createElement('img');
      img.setAttribute('imgNo', i); 
      img.src = `images/thumb/2023/${i}.png`;
      img.addEventListener('click', tobeyBob);
      gallery.prepend(img);
  }   
    var gallery = document.getElementById('24');
    for (let i = 21; i <= 26; i++) {
      let img = document.createElement('img');
      img.setAttribute('imgNo', i); 
      img.src = `images/thumb/2024/${i}.png`;
      img.addEventListener('click', tobeyBob);
      gallery.prepend(img);
  }   
    var gallery = document.getElementById('25');
    for (let i = 27; i <= 30; i++) {
      let img = document.createElement('img');
      img.setAttribute('imgNo', i); 
      img.src = `images/thumb/2025/${i}.png`;
      img.addEventListener('click', tobeyBob);
      gallery.prepend(img);
  }   

});



