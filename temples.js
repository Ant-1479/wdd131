
window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-link');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
});



const now = new Date();
    const currentYear = now.getFullYear();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);


    const copyrightEl = document.getElementById("copyright");
    if (copyrightEl) {
      copyrightEl.innerHTML = `&copy; ${currentYear} Obeng Antwiwaah Stephanie. All rights reserved. Date: ${formattedDate}`;
    }

    
    const lastModified = document.lastModified;
    const dateEl = document.getElementById("date");
    if (dateEl) {
      dateEl.textContent = `Last Modified: ${lastModified}`;}

     