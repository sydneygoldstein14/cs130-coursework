const makeBigger = () => {
   document.querySelector('.content').style.fontSize = '3.4em';
   document.querySelector('.content').style.backgroundColor = 'hotpink';
   document.querySelector('.content').innerHTML = 'Hello!';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize = '1.4em';
   document.querySelector('.content').style.backgroundColor = 'white';
   document.querySelector('.content').innerHTML = 'Goodbye!';
};




document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
