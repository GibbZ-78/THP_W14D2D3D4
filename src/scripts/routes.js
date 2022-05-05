import homePage from "./homepage.js";
import pageList from "./pagelist.js";
import pageDetail from "./pagedetail.js";
import aboutGGF from "./about.js";

const routes = {
  '': homePage,
  'pagelist': pageList,
  'pagedetail': pageDetail,
  'about': aboutGGF,
};

export default routes;