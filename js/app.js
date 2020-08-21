// This is the welcoming message for index page 
// Variable - textWrapper
//querySelector is a method. It returns the first element that matches a specified 
//CSS selector, which in this case is 
// class .ml3, it is listed in the css file where it's got its' options set
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
// innerHTML allows javascript code to manipulate the website when it's being run
// The text content is put in a span
// Span is directed to replace the letters one after another 
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// This is to specify the properties and add timimng
// I am using loop to have these letters continue replacing continuously
anime.timeline({loop: true})
  .add({
    // classes .ml3 and .letter are being targeted and that is declared here
    targets: '.ml3 .letter',
    // This is to set how transparent the letter will be in the moment of replacement
    opacity: [0,1],
    // The easing property sets the curve at which the letter is changing
    easing: "easeInOutQuad",
    // This is the speed of change
    duration: 2250,
    // This is used between queued events, so after the event is finished it will 
    // queued for a set amount of time
    delay: (el, i) => 150 * (i+1)
    // This is what happens to the text after a span
    // Opacity is set to 0 so it seems to appear and delays, this also used a 
    // different easing style
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // This is for contact me form
  // Adding pop up message
  // Click event used
  // Instructs to perform on a click
  $(".menu-activator").on("click", function() {
    //toggleClass is a method to hide and reveal the menu. Clicking on Send button will toggle the pop up message to reveal
    $("body").toggleClass("menu-active");
  });