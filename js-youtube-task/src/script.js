var videosPerPage = 3;
var currentPage = 1;
window.videos = undefined;

document.getElementById("searchButton").addEventListener("click", videoSearch);
async function videoSearch() {
    var query = document.getElementById("search").value;
    videos = await getDataFromAPI(query);
    pagenation(videos.length);
    var initialVideoIndex = getVideoIndex(currentPage);
    getResult(videos.slice(initialVideoIndex, initialVideoIndex + videosPerPage));
}