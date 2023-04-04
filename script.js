const slide = document.querySelectorAll(".slides");

var counter = 0;

// code for puuting each image on left side and over flow(main)

slide.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});

// onclick function of button

const goPrev = () => {
  counter--;    
 
  slideImage();
};

const goNext = () => {  
  counter++;
 
  slideImage();
};

// code for sliding images (main)

const slideImage = () => {
  slide.forEach((slides) => {
    slides.style.transform = `translateX(-${counter * 100}%)`
  });
};
