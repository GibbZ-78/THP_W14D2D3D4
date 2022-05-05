const homePage = (argument = '') => {

  console.log('Displaying HOME page', argument);

  console.log("  > Showing INTRODUCTION paragraphs");
  pageIntroduction.classList.remove("hide");
  pageIntroduction.classList.add("show");

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => {
        let myTmpHTML = `<article class="cardGame">
          <img src='${article.background_image}' width='200px'/>
          <h1>${article.name}</h1>`;
        console.table(article.platforms);
        let myTmpPlatforms = article.platforms.map((myPlatform) => (
          `<span class='${myPlatform.platform.slug}'></span>`
        ));
        myTmpHTML += myTmpPlatforms.join("\n");
        myTmpHTML += `<a href='#pagedetail/${article.id}'>See details</a>
        </article>`;
        return myTmpHTML;
      });
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const displayResultsHeader = (totalResults, before, after) => {
      let myHeader = document.getElementById("listHeader");
      myHeader.innerHTML=`
      <span><a href='${before}'><< </a></span>
      <span>Number of results: ${totalResults}</span>
      <span><a href='${after}'> >></a></span>
      `;
    }

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResultsHeader(responseData.count,responseData.previous, responseData.next);
          displayResults(responseData.results);
        });
    };

    let currentYEar = new Date().getFullYear();
    let mySortOrder = "released";
    console.log(`  > Using ${currentYEar} as the current year for upcoming games' releases`);

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=${currentYEar}-01-01,${currentYEar}-12-31&ordering=${mySortOrder}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div id="listHeader" class="list-heading"></div>
        <div class="articles grid">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default homePage;