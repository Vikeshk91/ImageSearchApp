const accessKey ="YceRGSLTLEhnDke0AuRcmmsoHIAU33zesBpCkAr1-tQ";

const searchForm =document.getElementById("search-form");
const searchBox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const searchMoreBtn =document.getElementById("search-more-btn");

// YceRGSLTLEhnDke0AuRcmmsoHIAU33zesBpCkAr1-tQ

let page =1; 
let keyword= "";

async function searchImages(){
    keyword =searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;
    console.log(`Fetching URL: ${url}`);
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayImages(data.results);
    } catch (error) {
        console.error("Error fetching data from Unsplash API:", error);
    }
     
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page =1;
    searchImages();
})

function displayImages(images) {
    searchResult.innerHTML = "";
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.small;
        searchResult.appendChild(imgElement);
    });
}
/*const accessKey = "YceRGSLTLEhnDke0AuRcmmsoHIAU33zesBpCkAr1-tQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("search-more-btn");

let page = 1;
let keyword = "";

async function searchImages() {
    keyword = searchBox.value.trim();
    if (!keyword) {
        console.error("Search keyword is empty");
        return;
    }

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    console.log(`Fetching URL: ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayImages(data.results);
    } catch (error) {
        console.error("Error fetching data from Unsplash API:", error);
    }
}

function displayImages(images) {
    searchResult.innerHTML = "";
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.small;
        searchResult.appendChild(imgElement);
    });
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});*/

