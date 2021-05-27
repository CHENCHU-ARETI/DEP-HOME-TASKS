describe("client must return expected JSON object on API call", () => {
    it("api videos should be retrived to a search keyword", async () => {
        let videosMockObject = {
            items: [
                {
                    id: {},
                    snippent: []
                }
            ]
        }
        let query = "";
        spyOn(window, "getURLData").and.returnValue(videosMockObject);
        var data = await getDataFromAPI(query);
        expect(data).toEqual(videosMockObject.items);
    });
    it("api videos view count should be retrived from statistics part through videoId", async () => {
        let videosMockObject = {
            items: [
                {
                    id: {},
                    statistics: {
                        viewCount: 2000
                    }
                }
            ]
        }
        let videoId = "";
        spyOn(window, "getURLData").and.returnValue(videosMockObject);
        var viewCount = await getViewCount(videoId);
        expect(viewCount).toEqual(2000);
    })
})