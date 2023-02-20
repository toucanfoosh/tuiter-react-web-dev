import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
import pages from "./pages.js";

function exploreComponent() {
  $("#wd-explore").append(`
  <div class="container mt-2">
    <div class="row gx-5">
      <!-- left sidebar -->
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 wd-font-lg">
        ${NavigationSidebar(pages)}
      </div>
      <div class="col-xs-11 col-sm-10 col-md-10 col-lg-7 col-xl-6 wd-sidelines p-0">
        ${ExploreComponent()}
      </div>
      <div class="d-none d-lg-block col-lg-4 p-3">
        ${WhoToFollowList()}
      </div>
    </div>
  </div>
  `);
}
$(exploreComponent);
