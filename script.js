console.log('loaded')

const rootElement = document.querySelector('#root')
rootElement.insertAdjacentHTML('beforeend', 'loaded')

async function fetchData() {
    console.log("starting fetchData")
    const response = await fetch('https://restcountries.com/v3.1/all') //await = várj addig, míg meg nem jön a válasz. Nem azonnal lefutó és befejeződő a futás. Elkezdi lefutni, de addig nem megy tovább, míg be nem fejezi a futást. Addig csak Promise-a van. Amíg nem végez, ez a rész háttérbe szorul.
    console.log(response)
    const data = await response.json() //csomagoljuk ki a választ a json() segítségével. Ez egy Promise-t ad vissza válaszként. Mert eltart egy ideig, míg feldolgozza az adatokat. Ezért itt is kell egy await = álljunk meg, és várjuk meg, mi lesz ebből a Promise jsonunkból.
    console.log(data)
    console.log("finising fetchData")

    console.log("starting dom manipulation")
    data.forEach(country => rootElement.insertAdjacentHTML('beforeend', country.name.common)); //kiírja az összes országot

    
}

fetchData()
console.log("teszt")