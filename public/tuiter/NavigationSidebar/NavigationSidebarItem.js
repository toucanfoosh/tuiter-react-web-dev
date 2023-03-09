const NavigationSidebarItem = (page) => {
  return `
    <!-- home -->
    <a href=${page.link}>
        <div class="wd-color-text row mt-3 ${
          page.active === true ? "wd-font-bold" : ""
        }"">
            <div class="col-sm-12 col-xl-3 text-center">
                ${page.icon}
            </div>
            <div class="d-none d-xl-inline col-xl-9">
                <span>${page.name}</span>
            </div>
        </div>
    </a>
    `;
};

export default NavigationSidebarItem;
