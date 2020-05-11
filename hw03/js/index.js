
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    activeCard = e.target;
    console.log(activeCard);

    // open the carousel:
    // adding the active class:
    document.querySelector('.preview').className = "preview active";

    // replace the image (so it doesnt just show the featured daisy image that we gave in html)
    // now when you click an image, the same image pops up
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}

// PART 2
// attaches click to just first card:
// document.querySelector('.card').onclick = showPhoto;

// attaches click to all cards:
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
}



// PART 3: Close functionality
const close = () => {
  console.log('Close me');
  document.querySelector('.preview').className = "preview";
}

document.querySelector('#close').onclick = close;

// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).
    console.log(activeCard.nextElementSibling);
      activeCard = activeCard.nextElementSibling;
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}

document.querySelector('.next').onclick = next;
document.querySelector('.featured_image').onclick = next;




// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).

const previous = () => {
    console.log(activeCard.previousElementSibling);
    activeCard = activeCard.previousElementSibling;
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
}

document.querySelector('.prev').onclick = previous;
document.querySelector('.featured_image').onclick = previous;
