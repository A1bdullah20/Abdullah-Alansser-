
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
// Move between sections
function highlightSection() {
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSectionId = "";

  const scrollPos = window.scrollY + 150;

  sections.forEach((section, index) => {
    const offsetTop = section.offsetTop;
    const offsetBottom = offsetTop + section.offsetHeight;

    //  If I am between the beginning and the end of the section
    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
      currentSectionId = section.id;
    }

    // If I am at the end of the page, activate the last section.
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      index === sections.length - 1
    ) {
      currentSectionId = section.id;
    }
  });

  // Color the button
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
    if (targetId === currentSectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Turn on color on hover
window.addEventListener("scroll", highlightSection);

// Turn on coloring when the page loads directly.
window.addEventListener("load", highlightSection);


// Menu for phone 
function showsidebar(){
 const sidebar = document.querySelector('.sidebar')
 sidebar.style.display = 'flex'
}

function hidesidebar(){
const sidebar = document.querySelector('.sidebar')
 sidebar.style.display = 'none'

}

 // Animate On Scroll Library
   AOS.init();