

    
    const now = new Date();
    const currentYear = now.getFullYear();

  
    const options = { year: '2025', month: 'July', day: '8' };
    const formattedDate = now.toLocaleDateString(undefined, options);


    const copyrightEl = document.getElementById("copyright");
    if (copyrightEl) {
      copyrightEl.innerHTML = `&copy; ${currentYear} Obeng Antwiwaah Stephanie. All rights reserved. Date: ${formattedDate}`;
    }

    const lastModified = document.lastModified;
    const dateEl = document.getElementById("date");
    if (dateEl) {
      dateEl.textContent = formattedDate;
    }
  