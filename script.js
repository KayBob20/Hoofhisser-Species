//     -----------------
//     Main Content Start
// -----------------

// Define a function to update background position based on scroll
function updatePositions() {
  const stickyTop = document.querySelector('.sticky').getBoundingClientRect().top;

//   // Check if the top position of the sticky element is at the top of the viewport
//   if (stickyTop === 0) {
//       // If sticky top equals 0, set background attachment to fixed for the specified elements
//       document.querySelector('.spacer').style.backgroundAttachment = 'fixed';
//       document.querySelector('.box1').style.backgroundAttachment = 'fixed';
//       document.querySelector('.box2').style.backgroundAttachment = 'fixed';
//       document.querySelector('.grid1').style.backgroundAttachment = 'fixed';
//       document.querySelector('.grid2').style.backgroundAttachment = 'fixed';
//       document.querySelector('.grid4').style.backgroundAttachment = 'fixed';
//       document.querySelector('.sticky').style.backgroundAttachment = 'fixed';
//       document.querySelector('.nav-links-wrapper').style.backgroundAttachment = 'fixed';
//   } else {
//       // If sticky top does not equal 0, reset background attachment to default for the specified elements
//       document.querySelector('.spacer').style.backgroundAttachment = 'scroll';
//       document.querySelector('.box1').style.backgroundAttachment = 'scroll';
//       document.querySelector('.box2').style.backgroundAttachment = 'scroll';
//       document.querySelector('.grid1').style.backgroundAttachment = 'scroll';
//       document.querySelector('.grid2').style.backgroundAttachment = 'scroll';
//       document.querySelector('.grid4').style.backgroundAttachment = 'scroll';
//       document.querySelector('.sticky').style.backgroundAttachment = 'scroll';
//       document.querySelector('.nav-links-wrapper').style.backgroundAttachment = 'scroll';
//   }

  const scrolled = window.pageYOffset;
  const backgroundPositionY = -20 - scrolled * 0.2; // Adjust translation speed as needed

  const translateGlacier = scrolled * 0.1; // Adjust translation speed as needed
  const translateGround = scrolled * 0.08; // Adjust translation speed as needed
  const translateMountainX = -scrolled * 0.05; // Adjust left translation speed as needed
  const translateMountainY = scrolled * 0.05; // Adjust downward translation speed as needed

  const scale = 1 - scrolled * 0.0005; // Adjust scale speed as needed

  // Apply smooth transition to update background position
  // requestAnimationFrame(() => {
  //     document.body.style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.spacer').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.box1').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.box2').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.grid1').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.grid2').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.grid4').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.sticky').style.backgroundPositionY = backgroundPositionY + 'px';
  //     document.querySelector('.nav-links-wrapper').style.backgroundPositionY = backgroundPositionY + 'px';
  // });

  // Apply smooth transition to update element positions
  requestAnimationFrame(() => {
      document.querySelector('#glacier').style.transform = `translateX(${translateGlacier}px)`;
      document.querySelector('#ground').style.transform = `translateY(${translateGround}px)`;
      document.querySelector('#mountain-1').style.transform = `translate(${translateMountainX}px, ${translateMountainY}px)`;
      document.querySelector('#logo').style.transform = `scale(${scale})`;
  });
}

// Call the function on DOMContentLoaded event
window.addEventListener('DOMContentLoaded', updatePositions);

// Call the function on scroll event
window.addEventListener('scroll', updatePositions);

      window.addEventListener('DOMContentLoaded', function() {
  adjustLayout();

  window.addEventListener('resize', adjustLayout);
});

function adjustLayout() {
  var contentWidth = document.querySelector('.content').offsetWidth;
  var spacer = document.querySelector('.spacer');
  var maxContentWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-content-width'), 10);

  if (contentWidth >= maxContentWidth) {
      spacer.style.gridTemplateColumns = '1fr ' + maxContentWidth + 'px 1fr'; // Set middle column to maxContentWidth
  } else {
      spacer.style.gridTemplateColumns = ''; // Revert to default styling
  }
}

//     -----------------
//     Main Content End
// -----------------

//     -----------------
//     Navbar Start
// -----------------

// selectors
const themeToggleBtn = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelectorAll('.nav-links li');

// Initial theme
const theme = localStorage.getItem('theme');

// Apply initial theme
if (theme && theme === 'dark-mode') {
  document.body.classList.add('dark-mode');
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'block';
} else {
  sunIcon.style.display = 'block';
  moonIcon.style.display = 'none';
}

// handlers
const handleThemeToggle = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    localStorage.removeItem('theme');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
};

const handleHamburgerMenu = () => {
const navItemContainer = document.querySelector('.nav-item-container');
navItemContainer.classList.toggle('visible');
};

 // events
 themeToggleBtn.addEventListener('click', handleThemeToggle);
 hamburgerMenu.addEventListener('click', handleHamburgerMenu);
// Get the button element
var scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.documentElement.scrollTop > 300) {
  scrollBtn.classList.add('scroll-fade');
} else {
  scrollBtn.classList.remove('scroll-fade');
}
}

// Function to scroll back to the top when the button is clicked
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: 'smooth' // Smooth scrolling behavior
});
}

//     -----------------
//     Navbar End
// -----------------

        // -----------------
        // Search Start
        // -----------------
    
        const suggestions = [
          { label: "Home", words: ["start", "homepage"], href: "home.html" },
          { label: "FAQ", words: ["help", "question"], href: "faq.html" },
          { label: "Complete Item List", words: ["item", "scale", "myo egg"], href: "item-list.html" }
        ];
    
        const searchInput = document.getElementById('searchInput');
        const autocompleteItems = document.getElementById('autocompleteItems');
        const clearButton = document.getElementById("clearButton");
    
        searchInput.addEventListener('input', function() {
          const inputValue = this.value.toLowerCase();
          autocompleteItems.innerHTML = '';
    
          const matches = suggestions.filter(suggestion =>
            suggestion.label.toLowerCase().includes(inputValue) || suggestion.words.some(word => word.toLowerCase().includes(inputValue))
          );
    
          matches.forEach(suggestion => {
            const item = document.createElement('div');
            item.innerHTML = `<a href="${suggestion.href}" class="btn-link"><button class="suggestions-btn">${suggestion.label}</button></a>`;
            autocompleteItems.appendChild(item);
          });
    
          autocompleteItems.style.display = matches.length && inputValue !== '' ? 'block' : 'none';
          
          // Show the clear button if the input field is not empty, otherwise hide it
          if (inputValue.trim() !== "") {
              clearButton.style.display = "block";
          } else {
              clearButton.style.display = "none";
          }
        });
    
        searchInput.addEventListener('focus', function() {
          if (searchInput.value !== '') {
            autocompleteItems.style.display = 'block';
          }
        });
    
        searchInput.addEventListener('blur', function() {
          if (searchInput.value === '') {
            // If the input value is empty, hide the autocomplete dropdown immediately
            autocompleteItems.style.display = 'none';
          } else {
            // If the input value is not empty, delay hiding the autocomplete dropdown to allow click event processing
            setTimeout(() => {
              autocompleteItems.style.display = 'none';
            }, 150);
            
            // Clear the input value when it loses focus
            this.value = '';
            // Hide the clear button
            clearButton.style.display = 'none';
          }
        });
    
        // -----------------
        // Search End
        // -----------------