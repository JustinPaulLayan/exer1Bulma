
import '../sass/main.scss';
// Listen for click on the document
document.addEventListener('click', function (event) {
  
    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('toggle')) return;
    // Get the target content
    
    let content = document.querySelector(event.target.getAttribute('data-href'));
    if (!content) return;
    
    // Prevent default link behavior
    event.preventDefault();
    
    // If the content is already expanded, collapse it and quit
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    // Get all open accordion content, loop through it, and close it
    let accordions = document.querySelectorAll('.content.active');
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle our content
    content.classList.toggle('active');
    //content.classList.button('is-open');
  })