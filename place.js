document.addEventListener('DOMContentLoaded', () => {
  
  const tempC = Number(document.getElementById('temp').textContent); 
  const windKmh = Number(document.getElementById('wind').textContent); 
  const windchillEl = document.getElementById('windchill');


  
  function calculateWindChill(T, v) { return 13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16); }

  
  if (tempC <= 10 && windKmh > 4.8) {
    const wc = calculateWindChill(tempC, windKmh);
    windchillEl.textContent = `${wc.toFixed(1)} °C`;
  } else {
    windchillEl.textContent = 'N/A';
  }

  
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified || 'Unknown';
});