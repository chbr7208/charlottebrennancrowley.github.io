const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = ['pic1.JPG', 'pic2.JPG', 'pic3.JPG', 'pic4.JPG', 'pic5.JPG'];

/* Declaring the alternative text for each image file */
const alt = {'pic1.JPG':'Michigan',
'pic2.JPG':'Wisconsin', 
'pic3.JPG':'Boulder Fall 1', 
'pic4.JPG':'Boulder Fall 2', 
'pic5.JPG':'Boulder Fall 3'};

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