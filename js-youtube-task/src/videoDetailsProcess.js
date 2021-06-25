async function getResult(videos) {
    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";
    for (let i = 0; i < videos.length; i++) {
        const idSuffix = "-"+(i+1);
        let video = document.getElementById("videoTemplate");
        const node = document.importNode(video.content, true);
 
        let videodetails = node.getElementById("videos");
        videodetails.id = "videos" + idSuffix; 

 
        let thumbnail = node.getElementById("thumbnail");
        thumbnail.src = videos[i].snippet.thumbnails.medium.url;
        thumbnail.id = "thumbnail" + idSuffix;
        thumbnail.style.width="100%";
        thumbnail.style.height="50%";
        thumbnail.style.margin="10px";
 
        let videoTitle = node.getElementById("videoTitle");
        videoTitle.id = "videoTitle" + idSuffix;
        videoTitle.innerHTML = videos[i].snippet.title;
        videoTitle.href = "http://www.youtube.com/watch?v=" + videos[i].id.videoId;
 
        let channelTitle = node.getElementById("channelTitle");
        channelTitle.id = "channelTitle" + idSuffix;
        channelTitle.textContent = videos[i].snippet.channelTitle;
 
        let videoDescription = node.getElementById("videoDescription");
        videoDescription.id = "videoDescription" + idSuffix;
        videoDescription.textContent = videos[i].snippet.description;
 
        let publishedDate = node.getElementById("publishedOn");
        publishedDate.id = "publishedOn" + idSuffix;
        publishedDate.textContent =' | ' + videos[i].snippet.publishedAt;
 
        let view = numFormatter(await getViewCount(videos[i].id.videoId));
        let viewCount = node.getElementById("views");
        viewCount.id = "views" + idSuffix;
        viewCount.textContent =' | ' + view + " views";
 
        let youtubeLink = "http://www.youtube.com/embed/"+videos[i].id.videoId+"?autoplay=1&mute=1&controls=0"
        let videoPreview = node.getElementById("videoPreview");
        videoPreview.id = "videoPreview" + idSuffix;
        videoPreview.src = youtubeLink;
        videoPreview.style.display= "none";
 
        videodetails.addEventListener("mouseenter", function(){
            this.children[0].style.display = "none";
            this.children[1].style.display = "block";
        })
 
        videodetails.addEventListener("mouseleave", function(){
            this.children[1].style.display = "none";
            this.children[0].style.display = "block";
        })
 
        searchResult.appendChild(node);
    }
}

