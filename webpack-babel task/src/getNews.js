const API_KEY = "9a283a1657d8452ea8f1710a789139b4";
let URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
export default async function videoSearch() {
    let news = await getDataFromAPI(URL);
    document.getElementById("footer").style.display = "flex";
    getResult(news);
    console.log(news);
}

async function getDataFromAPI(url) {
    var data = await getURLData(url);
    return data.articles;
}

async function getURLData(url) {
    return await (await fetch(url)).json();
}
async function getResult(news) {
    let temp = document.getElementById("getNewsButton");
    temp.style.display = "none";
    let searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";
    for (let i = 0; i < news.length; i++) {
        let newsData = document.getElementById("newsTemplate");
        const node = document.importNode(newsData.content, true);

        let thumbnail = node.getElementById("thumbnail");
        thumbnail.src = news[i].urlToImage;

        let newsTitle = node.getElementById("newsTitle");
        newsTitle.innerHTML = news[i].title;

        let continueRead = node.getElementById("contueButton");
        continueRead.href = news[i].url;

        let newsContent = node.getElementById("newsContent");
        newsContent.innerHTML = news[i].content;

        let newsDescription = node.getElementById("newsDescription");
        newsDescription.innerHTML = news[i].description;

        let author = node.getElementById("author");
        author.innerHTML = '| Author: ' + news[i].author;

        let publishedAt = node.getElementById("publishedAt");
        publishedAt.innerHTML = '| Published at: ' + news[i].publishedAt;

        let source = node.getElementById("source");
        source.innerHTML = 'Source: ' + news[i].source.name;


        searchResult.appendChild(node);
    }
}