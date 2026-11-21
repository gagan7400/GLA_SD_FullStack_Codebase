//2 ,59,18  without laptop 
let api = "http://universities.hipolabs.com/search?limit=10&country=india"
let input = document.querySelector("input");
let searchfun = () => {
    let data = fetch(`http://universities.hipolabs.com/search?limit=10&country=${input.value}`);
    data.then((res) => { return res.json() })
        .then((result) => {
            showdata(result);
            console.log(result)
        })
        .catch((err) => { console.log(err) })
}
input.addEventListener("keyup", debounce(searchfun, 200))

function debounce(fn, delay) {
    let timer = "";
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}


function showdata(data) {
    let box = document.querySelector(".universities");
    box.innerHTML = "";
    data.map((v, i) => {
        box.innerHTML += `<div>
            <p> name :${v.name} </p>
            <p> country :${v.country} </p>
            <p> domain :${v.domains[0]} </p>
            <p> state :${v["state-province"]} </p>
            <a href="${v.web_pages[0]} target="_blank">Website </a>
            </div>`
    })
}