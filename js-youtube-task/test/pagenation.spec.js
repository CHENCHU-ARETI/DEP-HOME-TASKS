describe("pagenation should work",()=>{
    beforeEach(() => {
        var parser = new DOMParser();
        let str = __html__['index.html'];
        var doc = parser.parseFromString(str, 'text/html');
        document.body.innerHTML = doc.body.innerHTML;
    });
    afterEach(() => {
        document.body.innerHTML = '';
    });
    it("pagenating the doc",async ()=>{
        await pagenation(31);
        expect(document.getElementById("paginationController").children.length).toBe(3);
        expect(document.getElementById("page1").classList.contains("active")).toBe(true);

        
    });

    it('should change styling of selected page', async()=>{
       spyOn(window,'getResult');
       await pagenation(31);
       document.getElementById("page2").dispatchEvent(new Event('click'));
       expect(document.getElementById("page2").classList.contains("active")).toBe(true);
       expect(document.getElementById("page1").classList.contains("active")).toBe(false);
    
    });
})