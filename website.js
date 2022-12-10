const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = ['IMG_churros.jpg', 'IMG_custard.jpg', 'IMG_fries.JPG', 'IMG_friets.jpg', 'IMG_gelato.jpg','IMG_pasta.jpg','IMG_pizza.jpg','IMG_cafe.jpg'];

/* Declaring the alternative text for each image file */
const alt = {'IMG_churros.jpg':'Churros',
'IMG_custard.jpg':'Custard', 
'IMG_fries.JPG':'Fries', 
'IMG_friets.jpg':'Friets', 
'IMG_gelato.jpg':'Gelato',
'IMG_pasta.jpg':'Pasta',
'IMG_pizza.jpg':'Pizza',
'IMG_cafe.jpg' :'Cafe'
};

/* Looping through images */
let fullpath = "xxx";
for ( const image of array){
    const newImage = document.createElement('img');
    fullpath = '../img/wesbite-images/' + image;
    newImage.setAttribute('src', fullpath);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage); 
    newImage.addEventListener('click', Event => {
        displayedImage.src = Event.target.src;
        displayedImage.alt = Event.target.alt;
    });
};

function mouseOver(){
    if(displayedImage == 'IMG_churros.jpg') {
        
    }
    else if(displayedImage == 'IMG_custard.jpg'){

    }
    else if(displayedImage == 'IMG_fries.JPG'){

    }
    else if(displayedImage == 'IMG_friets.JPG'){

    }
    else if(displayedImage == 'IMG_gelato.JPG'){

    }
}

