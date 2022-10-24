const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alt = {'pic1.jpg':'Michigan',
'pic2.jpg':'Wisconsin', 
'pic3.jpg':'Boulder Fall 1', 
'pic4.jpg':'Boulder Fall 2', 
'pic5.jpg':'Boulder Fall 3'};

/* Looping through images */
let fullpath = "xxx";
for ( const image of array){
    const newImage = document.createElement('img');
    fullpath = '../img/A9img/' + image;
    newImage.setAttribute('src', fullpath);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage); 
    newImage.addEventListener('click', Event => {
        displayedImage.src = Event.target.src;
        displayedImage.alt = Event.target.alt;
    });
};

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });