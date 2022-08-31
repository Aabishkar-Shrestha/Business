
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  } 
}
// Scroll to top 
        // function scrollToTop() {
        //     window.scrollTo(0, 0);
        // }