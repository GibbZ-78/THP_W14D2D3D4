import "../stylesheets/gibbz.scss";
import routes from "./routes.js";
import myFooterContent from "./footer.js";

function callRoute() {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split('/');

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || '';
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
}

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());

document.getElementsByTagName("footer")[0].innerHTML = myFooterContent();