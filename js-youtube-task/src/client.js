const API_KEY = "AIzaSyCfZcViApcE7hq3_BXP5HXZaFbv4-Y4eDc"
var maxResults = 15;

async function getDataFromAPI(query) {
    var URL = "https://www.googleapis.com/youtube/v3/search?key=" + API_KEY +
        "&type=video&maxResults=" + maxResults + "&q=" + query + "&part=snippet";
        console.log(URL);
    var data = await getURLData(URL);
    return data.items;
}

async function getViewCount(videoId) {
    var URL = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + videoId + "&key=" + API_KEY;
    var data = await getURLData(URL);
    return data.items[0].statistics.viewCount;
}

async function getURLData(URL) {
    return await (await fetch(URL)).json();
}