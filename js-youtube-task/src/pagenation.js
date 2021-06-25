var videosPerPage = 15;
var currentPage = 1;
//var videos = undefined;

// document.getElementById("searchButton").addEventListener("click", videoSearch);
// async function videoSearch() {
//     var query = document.getElementById("search").value;
//     videos = await getDataFromAPI(query);
//     pagenation(videos.length);
//     var initialVideoIndex = getVideoIndex(currentPage);
//     getResult(videos.slice(initialVideoIndex, initialVideoIndex + videosPerPage));
// }
function pagenation(totalVideos) {
    let pagination = document.getElementById("paginationController");
    pagination.innerHTML = "";
    let totalPages = getTotalPages(totalVideos);

    for (let pageCount = 0; pageCount < totalPages; pageCount++) {
        let pageNumberTemplate = document.getElementById("paginationTemplete");
        let node = document.importNode(pageNumberTemplate.content, true);
        let page = node.getElementById("page");
        page.id = "page" + (pageCount + 1);
        page.textContent = pageCount + 1;
        if (pageCount == 0) {
            page.classList.add("active");
        }
        pagination.appendChild(page);
    }
    addEventListenersToPages(pagination);
}

function addEventListenersToPages(pagination) {
    let pages = pagination.children;
    for (let i in pages) {
        let page = pages[i];
        if (typeof page == "object") {
            page.addEventListener("click", function (event) {
                let pageNumber = this.id.charAt(4);
                let initialVideoIndex = getVideoIndex(pageNumber);
                getResult(videos.slice(initialVideoIndex, initialVideoIndex + videosPerPage));
                let previousPage = document.getElementById("page" + currentPage);
                previousPage.classList.remove("active");
                currentPage = pageNumber;
                document.getElementById("page" + pageNumber).classList.add('active');
            });
        }
    }
}




