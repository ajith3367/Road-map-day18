// Define Countries API endpoint
const countriesAPI = "https://restcountries.com/v3.1/name/";

// Event listener for getting country information
document.getElementById("getCountryBtn").addEventListener("click", async () => {
  const country = document.getElementById("countryInput").value;
  const response = await fetch(`${countriesAPI}${country}`);
  const data = await response.json();
  if (data.length > 0) {
    const countryData = data[0];
    const countryInfo = `
          <h2>${countryData.name.common}</h2>
          <p>Capital: ${countryData.capital}</p>
          <p>Population: ${countryData.population}</p>
          <p>Region: ${countryData.region}</p>
          <p>Subregion: ${countryData.subregion}</p>
          <img src="${countryData.flags.png}" alt="${countryData.name.common} Flag" style="max-width: 200px;">
        `;
    document.getElementById("countryInfo").innerHTML = countryInfo;
  } else {
    document.getElementById("countryInfo").innerText = "Country not found";
  }
});
