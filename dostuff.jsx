import countriesList from "./src/txt";

const countries = countriesList

const countryNames = countries.map(country => country.Country);

console.log(countryNames)