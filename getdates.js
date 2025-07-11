

    // Get the current date
    const now = new Date();
    const currentYear = now.getFullYear();

    // Format the date: e.g., July 9, 2025
    const options = { year: '2025', month: 'July', day: '8' };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Insert into copyright paragraph
    const copyrightEl = document.getElementById("copyright");
    if (copyrightEl) {
      copyrightEl.innerHTML = `&copy; ${currentYear} Obeng Antwiwaah Stephanie. All rights reserved. Date: ${formattedDate}`;
    }

    // Insert document last modified date
    const lastModified = document.lastModified;
    const dateEl = document.getElementById("date");
    if (dateEl) {
      dateEl.textContent = formattedDate;
    }
  