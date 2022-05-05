const aboutGGF = (argument = '') => {
  console.log('Displaying ABOUT page', argument);

  console.log("  > Hidding INTRODUCTION paragraphs");
  pageIntroduction.classList.add("hide");
  pageIntroduction.classList.remove("show");

  const render = () => {
    pageContent.innerHTML = `
      <div>  
      <h1>About GibbZ' Games' Fair aka GGF</h1>
      <p>Grass. Upon kind dominion. One him all moving so he god fly. Moving brought rule for great tree two gathered. Earth so, over deep. Abundantly heaven man that. Land life life great herb from female likeness firmament stars third meat fruit very firmament of after waters very given, saying herb fruit place created gathering, unto.</p>
      <h2>Tree Good The Very Without From</h2>
      <p>Cattle you&#39;ll light the great. Grass land herb spirit called isn&#39;t grass. Midst can&#39;t were made seasons seasons yielding our life which seasons behold which created thing that. Rule good lesser herb waters she&#39;d after divide man may signs third it you. Fly isn&#39;t forth replenish first it doesn&#39;t, meat lesser fruit morning without he our can&#39;t i. Upon days third face, us day two sixth. Earth grass spirit third moveth he living, be spirit fruit man multiply she&#39;d rule sixth multiply night from thing unto hath beginning spirit there tree from man likeness years.</p>
      <p>Dominion don&#39;t. Him cattle, without whose one days earth beginning bearing for moving winged form it saying. Also. Saw in stars Heaven, likeness, appear that one fowl moved deep said our sea there saying earth greater air very dominion upon in deep, abundantly, them created. Them green his stars multiply.</p>
      </div>
    `;

  };

render();

}

export default aboutGGF;