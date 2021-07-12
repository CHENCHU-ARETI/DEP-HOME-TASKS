document
  .getElementById("getNewsButton")
  .addEventListener("click", async function () {
    let e = await (async function (e) {
      return (
        await (async function (e) {
          return await (
            await fetch(
              "https://newsapi.org/v2/top-headlines?country=us&apiKey=9a283a1657d8452ea8f1710a789139b4"
            )
          ).json();
        })()
      ).articles;
    })();
    (document.getElementById("footer").style.display = "flex"),
      (async function (e) {
        document.getElementById("getNewsButton").style.display = "none";
        let t = document.getElementById("searchResult");
        t.innerHTML = "";
        for (let n = 0; n < e.length; n++) {
          let o = document.getElementById("newsTemplate");
          const l = document.importNode(o.content, !0);
          (l.getElementById("thumbnail").src = e[n].urlToImage),
            (l.getElementById("newsTitle").innerHTML = e[n].title),
            (l.getElementById("contueButton").href = e[n].url),
            (l.getElementById("newsContent").innerHTML = e[n].content),
            (l.getElementById("newsDescription").innerHTML = e[n].description),
            (l.getElementById("author").innerHTML = "| Author: " + e[n].author),
            (l.getElementById("publishedAt").innerHTML =
              "| Published at: " + e[n].publishedAt),
            (l.getElementById("source").innerHTML =
              "Source: " + e[n].source.name),
            t.appendChild(l);
        }
      })(e),
      console.log(e);
  });
