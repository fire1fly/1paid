import tippy from "tippy.js";

export function header() {
  const notifBtn = document.querySelector(".notif-btn");
  const notifContent = document.querySelector(".notif-content") || '';
  notifBtn && tippy(notifBtn, {
    content: notifContent,
    trigger: 'click',
    interactive: true,
    placement: 'bottom-end',
    animation: 'shift-away'
  });

  const mobileNotifBtn = document.querySelector(".hm .notif-btn");
  const mobileNotifContent = document.querySelector(".hm .notif-content") || '';
  mobileNotifBtn && tippy(mobileNotifBtn, {
    content: mobileNotifContent,
    trigger: 'click',
    interactive: true,
    placement: 'bottom',
    animation: 'shift-away'
  });

  const profileBtn = document.querySelector(".h-profile-btn-open");
  const profileContent = document.querySelector(".h-profile-content") || '';
  profileBtn && tippy(profileBtn, {
    content: profileContent,
    trigger: 'click',
    interactive: true,
    placement: 'bottom-end',
    animation: 'shift-away',
    offset: [10, 20],
    onShow: () => {
      profileBtn.classList.add('_open');
    },
    onHide: () => {
      profileBtn.classList.remove('_open');
    },
  })

  const mobileProfileBtn = document.querySelector(".hm-profile-btn");
  const mobileProfileContent = document.querySelector(".hm-profile-content") || '';
  mobileProfileBtn && tippy(mobileProfileBtn, {
    content: mobileProfileContent,
    trigger: 'click',
    interactive: true,
    placement: 'bottom',
    animation: 'shift-away',
    offset: [10, 20],
  })
}