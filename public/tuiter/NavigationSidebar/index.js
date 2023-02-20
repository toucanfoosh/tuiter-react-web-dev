import NavigationSidebarItem from "./NavigationSidebarItem.js";
const NavigationSidebar = (pages) => {
  return `
            <!-- tuiter -->
            <div class="row">
                <a href="../home/index.html"
                    class="wd-tuit-logo wd-color-blue col justify-content-center justify-content-lg-start">
                    <div class="wd-text-center wd-text-lg-start">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </a>
            </div>
            ${pages
                .map((page) => {
                    return NavigationSidebarItem(page)})
                    .join("")}
            <!-- make tuit button -->
            <button class="wd-tuit-btn mt-3 wd-font-lg">Tuit</button>
    `;
};
export default NavigationSidebar;
