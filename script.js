console.log('loaded')

console.log(window.location)
console.log(new URLSearchParams(window.location.search).get("callingCode"))
const callingCode = new URLSearchParams(window.location.search).get("callingCode")

if (callingCode) {
	console.log(`fetch: https://countryapi.io/api/callingcode/${callingCode}`)
} else {
	console.log("fetch all countries data")
}
//kell majd fetch-elni is!

const rootElement = document.querySelector("#root")
rootElement.insertAdjacentHTML("beforeend", "loaded")

async function fetchData(url) {
	// console.log("starting fetchData")
	const response = await fetch(url)
	// console.log(response)
	const data = await response.json()
	// console.log(data)
	return data
	console.log("finishing fetchData")
}

function makeHtmlFromCurrencies(currencies) {
	const currencyKeys = Object.keys(currencies)

	currencyHtml = ""
	
	currencyKeys.forEach(currencyKey => currencyHtml += `
		<li>
			${currencyKey}
			${currencies[currencyKey].name}
			${currencies[currencyKey].symbol}
		</li>
	`)

	return `<ol>${currencyHtml}</ol>`
}

/* Object.keys(countryData.currencies).map(currName => `${countryData.currencies[currName].name} ${currName} ${countryData.currencies[currName].symbol}`) */

function makeHtmlFromCountryData(countryData) {
	return `
		<li>
			<h3>${countryData.name.common}<h3>
			<p>currencies: ${countryData.currencies ? makeHtmlFromCurrencies(countryData.currencies) : "has no official currencies"}</p>
		</li>
	`
}

function renderHtmlToDom(html) {
	rootElement.insertAdjacentHTML("beforeend", `<ul>${html}</ul>`)
}

async function init() {
	const countriesData = await fetchData("https://restcountries.com/v3.1/all")
	// console.log(countriesData)

	countriesHtml = ""

	countriesData.forEach((countryData) => {
		countryHtml = makeHtmlFromCountryData(countryData)
		// console.log(countryHtml)
		countriesHtml += countryHtml
	});

	renderHtmlToDom(countriesHtml)

	const deutschlandData = await fetchData("https://restcountries.com/v3.1/name/deutschland")
	// console.log(deutschlandData)
}

init()

// console.log("teszt")