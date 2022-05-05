const homePage = (argument = '') => {

  console.log('Displaying HOME page', argument);

  console.log("  > Showing INTRODUCTION paragraphs");
  pageIntroduction.classList.remove("hide");
  pageIntroduction.classList.add("show");

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => {
        let myTmpHTML = `<article class="cardGame grid-item">
          <img src="${(article.background_image ? article.background_image : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg')}" width="200px"/>
          <p class="game-name">${article.name}</p>
          <p class="release-date">${article.released}</p>`;
        //console.table(article.platforms);
        let myTmpPlatforms = article.platforms.map((myPlatform) => (
          `<div class='platform ${myPlatform.platform.slug}' data-platform=''></div>`
        ));
        //console.log(myTmpPlatforms);
        myTmpHTML += "<div class='flex-start'>\n" + myTmpPlatforms.join("\n") + "</div>\n";
        myTmpHTML += "<hr />\n";
        myTmpHTML += `<a href='#pagedetail/${article.id}' class='animated-link'>See details</a>
        </article>`;
        return myTmpHTML;
      });
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const displayResultsHeader = (myURL, myArgument,totalResults, before, after) => {
      let myHeader = document.getElementById("listHeader");
      let myBefore = before ? before.split("page=")[1]: "";
      let myAfter = after ? after.split("page=")[1]: "";
      myHeader.innerHTML=`
      <span><a href='' id='previousGame'> <i class="bi bi-caret-left-square"></i></a></span>
      <span>Number of results: ${totalResults}</span>
      <span><a href='' id='nextGame'> <i class="bi bi-caret-right-square"></i></a></span>
      `;
      // previousGame.addEventListener("click",fetchList(myURL, myArgument, myBefore));
      // nextGame.addEventListener("click",fetchList(myURL, myArgument, myAfter));
    }

    const fetchList = (url, argument, myPage=1) => {
      const finalURL = argument ? `${url}&page=${myPage}&search=${argument}` : `${url}&page=${myPage}`;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResultsHeader(url, argument, responseData.count,responseData.previous, responseData.next);
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
        <div id="listHeader" class="list-heading-2nd"></div>
        <div class="articles" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default homePage;