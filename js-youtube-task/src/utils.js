var videosPerPage = 3;
function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else {
        return num;
    }
}

function getVideoIndex(pageNumber) {
    return (pageNumber - 1) * videosPerPage;
}

function getTotalPages(totalVideos) {
    let totalPages = totalVideos / videosPerPage;
    if (totalVideos % videosPerPage > 0) {
        totalPages++;
    }
    return parseInt(totalPages);
}