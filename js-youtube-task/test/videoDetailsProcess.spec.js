describe("videoDetailsProcess getResult method should work", () => {
    const videoData = [
        {
            "kind": "youtube#searchResult",
            "etag": "BqCqlaCvd_JQFx6gDZv8nnimLg8",
            "id": {
                "kind": "youtube#video",
                "videoId": "3BRe1LjdT1A"
            },
            "snippet": {
                "publishedAt": "2021-05-20T15:42:26Z",
                "channelId": "UCVXCo0W9pk2dDkEBNLhTt7A",
                "title": "IPL UPDATE: BCCI COMES UP WITH NEW PROPOSAL TO COMPLETE THE IPL | Sports Tak",
                "description": "Infinix Hot 10S with 48MP Triple Cam and 90Hz Display. Get it at a special first day price of ₹9499. Sale begins 27th May, 12 Noon. Only on Flipkart.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3BRe1LjdT1A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3BRe1LjdT1A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3BRe1LjdT1A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sports Tak",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-20T15:42:26Z"
            }
        }
    ];

    beforeEach(() => {
        var parser = new DOMParser();
        let str = __html__['index.html'];
        var doc = parser.parseFromString(str, 'text/html');
        document.body.innerHTML = doc.body.innerHTML;
    });
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it("appends video data correctly to document",async ()=> {
        await getResult(videoData);
        expect(document.getElementById("videos-1")).toBeDefined();
        expect(document.getElementById("videos-1").children.length).toBe(3);
        expect(document.getElementById("thumbnail-1").src).toBe(videoData[0].snippet.thumbnails.medium.url);
        //expect(document.getElementById("videoTitle-1")).toBeDefined();
        expect(document.getElementById("videoTitle-1").innerHTML).toBe(videoData[0].snippet.title);
        expect(document.getElementById("videoTitle-1").href).toBe("http://www.youtube.com/watch?v="+videoData[0].id.videoId);
        //expect(document.getElementById("channelTitle-1")).toBeDefined();
        expect(document.getElementById("channelTitle-1").textContent).toBe(videoData[0].snippet.channelTitle);
        //expect(document.getElementById("videoDescription-1")).toBeDefined();
        expect(document.getElementById("videoDescription-1").textContent).toBe(videoData[0].snippet.description);
        //expect(document.getElementById("publishedOn-1")).toBeDefined();
        expect(document.getElementById("publishedOn-1").textContent).toBe(" | " + videoData[0].snippet.publishedAt);
        expect(document.getElementById("videoPreview-1").src).toBe("http://www.youtube.com/embed/" + videoData[0].id.videoId + "?autoplay=1&mute=1&controls=0" );
    });

    it("mouse enter and leave check", async ()=>{
        await getResult(videoData);

        expect(document.getElementById("videos-1")).toBeDefined();
        document.getElementById("videos-1").dispatchEvent(new Event("mouseenter"));
        expect(document.getElementById("thumbnail-1").style.display).toBe("none");
        expect(document.getElementById("videoPreview-1").style.display).toBe("block");

        document.getElementById("videos-1").dispatchEvent(new Event("mouseleave"));
        expect(document.getElementById("thumbnail-1").style.display).toBe("block");
        expect(document.getElementById("videoPreview-1").style.display).toBe("none");

    });

})