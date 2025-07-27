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

      const toggleBtn =
      document .getElementsById("menu-toggle");
      const navMenu=
      document.querySelector("#nav li");

      toggleBtn.addEventListener("click", ()=> {
        navMenu.classList.toggle("show");
      });