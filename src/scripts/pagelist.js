const pageList = (argument = '') => {

  console.log('Display LIST page', argument);

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <img src='${article.background_image}' width='200px'/>
          <h1>${article.name}</h1>
          <h2>${article.released}</h2>
          <a href="#pagedetail/${article.id}">${article.id}</a>
          <p>Mark: ${article.rating} / ${article.rating_top}</p>
          <p>Play time: ${article.playtime} hours</p>
        </article>`
      ));
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

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div id="listHeader" class="list-heading"></div>
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default pageList;