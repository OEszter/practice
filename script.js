console.log('loaded')

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

function makeHtmlFromCountryData(countryData) {
	return `
		<li>${countryData.name.common}</li>
	`
}

function renderHtmlToDom(html) {
	rootElement.insertAdjacentHTML("beforeend", `<ul>${html}</ul>`)
}

async function init() {
	const countriesData = await fetchData("https://restcountries.com/v3.1/all")
	console.log(countriesData)

	countriesHtml = ""

	countriesData.forEach(countryData => {
		countryHtml = makeHtmlFromCountryData(countryData)
		console.log(countryHtml)
		countriesHtml += countryHtml
	});

	renderHtmlToDom(countriesHtml)

	const deutschlandData = await fetchData("https://restcountries.com/v3.1/name/deutschland")
	console.log(deutschlandData)
}

init()

console.log("teszt")