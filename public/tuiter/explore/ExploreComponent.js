import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <!-- searchbar and settings -->
    <div class="p-2 row wd-ma">
      <!-- searchbar border -->
      <label for="search-input" class="col-11 ps-4">
        <div class="row wd-searchbar p-2">
          <div class="col-1 text-end wd-font-lg pt-1">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="col-11 text-start pt-1 ps-0">
            <input
              type="text"
              class="wd-search-input"
              placeholder="Search Tuiter"
              id="search-input"
            />
          </div>
        </div>
      </label>
      <!-- settings -->
      <div class="col-1 wd-font-lg wd-center pt-2">
        <a href="../settings/index.html">
          <i class="fa-solid fa-gear wd-icon-outline"></i>
        </a>
      </div>
    </div>
    <!-- topic tabs -->
    <div class="p-2 pe-4 pb-0 row text-center wd-ma">
      <!-- for you -->
      <a href="for-you.html" class="col">
        <div>
          <span class="wd-font-bold wd-color-text">For you</span>
          <!-- topic underline -->
          <div class="wd-topic-underline"></div>
        </div>
      </a>
      <!-- trending -->
      <a href="trending.html" class="col">
        <div>
          <span class="wd-font-bold wd-color-subtext">Trending</span>
        </div>
      </a>
      <!-- news -->
      <a href="news.html" class="col">
        <div>
          <span class="wd-font-bold wd-color-subtext">News</span>
        </div>
      </a>
      <!-- sports -->
      <a href="sports.html" class="col">
        <div>
          <span class="wd-font-bold wd-color-subtext">Sports</span>
        </div>
      </a>
      <!-- entertainment -->
      <a href="entertainment.html" class="d-none d-md-block col">
        <div>
          <span class="wd-font-bold wd-color-subtext">Entertainment</span>
        </div>
      </a>
    </div>
    <!-- headline image -->
    <div class="position-relative">
      <img
        src="../images/Landscape-Color.jpg"
        class="img-fluid p-0"
        alt="landscape color"
      />
      <div>
        <h3 class="position-absolute bottom-0 wd-start-1 wd-color-bg">
          SpaceX's Starship
        </h3>
      </div>
    </div>
    ${PostSummaryList()}
  
    `;
};
export default ExploreComponent;
