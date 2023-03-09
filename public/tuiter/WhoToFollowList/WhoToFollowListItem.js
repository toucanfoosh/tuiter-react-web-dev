const WhoToFollowListItem = (who) => {
  return `
  <div class="row p-2 justify-content-start">
  <!-- pfp -->
  <div class="col-2">
      <img src=${who.avatarIcon} class="rounded-circle wd-img-sq-50" alt="nick">
  </div>
  <!-- name and @ -->
  <div class="col-6 wd-color-text">
      <div>
          <span class="wd-font-bold ">${who.userName}</span>
          <i class="fa-solid fa-circle-check"></i>
      </div>
      <div>
          <span>@${who.handle}</span>
      </div>
  </div>
  <!-- follow button -->
  <div class="col-4 align-self-center">
      <button class="wd-follow-btn wd-font-bold">Follow</button>
  </div>
</div>
    `;
};

export default WhoToFollowListItem;