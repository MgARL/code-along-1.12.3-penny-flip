// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0
let headPercentage = 0
let tailsPercentage = 0
let totalFlips = totalHeads + totalTails
defaultMessage = "Let's get Rolling!"
// let image = ['/assets/images/penny-heads.jpg', '/assets/images/penny-tails.jpg']
let images = [
    {
        imagePath: '/assets/images/penny-heads.jpg',
        message: 'You Flipped Heads',
        side: 'heads'
    },
    {
        imagePath: '/assets/images/penny-tails.jpg',
        message: 'You Flipped Tails',
        side: 'tails'
    }
]


document.querySelector("#flip").addEventListener('click', function(){
    //get random image Object
    let randomImage =  images[Math.floor(Math.random() * images.length)];
    // set image src to flipped coin
     document.querySelector('#penny-image').setAttribute('src', randomImage.imagePath);
     document.querySelector('.message-container').innerText = randomImage.message;

     if (randomImage.side === "heads"){
          totalHeads++
          document.querySelector('#heads').textContent = totalHeads;
     } else {
         totalTails++
         document.querySelector('#tails').textContent = totalTails;
     }
     totalFlips = totalHeads + totalTails
     headPercentage = Math.round((totalHeads / totalFlips) * 100);
     tailsPercentage = Math.round((totalTails / totalFlips) * 100);

     document.querySelector('#heads-percent').textContent = headPercentage + '%';
     document.querySelector('#tails-percent').textContent = tailsPercentage + '%';

     console.log(headPercentage, tailsPercentage)
})

document.querySelector('#clear').addEventListener('click', function(){
totalHeads = 0
totalTails = 0
headPercentage = 0
tailsPercentage = 0
totalFlips = 0

document.querySelector('#heads').textContent = totalHeads
document.querySelector('#heads-percent').textContent = headPercentage + '%'
document.querySelector('#tails').textContent = totalTails
document.querySelector('#tails-percent').textContent = tailsPercentage + '%'
document.querySelector('.message-container').textContent = defaultMessage
})