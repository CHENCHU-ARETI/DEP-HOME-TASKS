describe("Formatter Function", function () {
    it("Formatter should work with views count in thousands ", () => {
        expect(numFormatter(18000)).toEqual("18.0K");
    });
    it("Formatter should work with views count in millions", () => {
        expect(numFormatter(18000000)).toEqual("18.0M");
    });
    it("Formatter should work with views count in hundreds", () => {
        expect(numFormatter(880)).toEqual(880);
    });
});

describe("Getting initial video index of current page", () => {
    it("getVideoIndex should return initial video index for the current page", () => {
        expect(getVideoIndex(4)).toEqual(45);
    });
});

describe("Getting total number of pages for current search", () => {
    it("getTotalPages should retun total number of pages for current session for exact fit", () => {
        expect(getTotalPages(60)).toEqual(4);
    });

    it("getTotalPages should retun total number of pages for current session for execced page fit", () => {
        expect(getTotalPages(63)).toEqual(5);
    });
});