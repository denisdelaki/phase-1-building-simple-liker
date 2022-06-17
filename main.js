// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
//grab the like=glyph reference and add event listener
const likeHeart = document.querySelectorAll(".like-glyph");
for (const like of likeHeart) {
  like.addEventListener("click", handleLikes);
}
//create a function to handle likes 
function handleLikes(e) {
  const likedHeart = e.target;
  mimicServerCall("Url")
    .then(() => {
      if ( likedHeart.innerText === EMPTY_HEART) {
        likedHeart.innerText = FULL_HEART;
        likedHeart.className = "activated-heart";
      } else {
        likedHeart.innerText = EMPTY_HEART;
        likedHeart.className = "";
      }
    })
    //create an error rection 
    .catch(error => {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}