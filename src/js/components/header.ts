import tippy from "tippy.js";
import 'tippy.js/animations/shift-away.css';


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

  const profileBtn = document.querySelector(".hp-btn-open");
  const profileContent = document.querySelector(".hp-content") || '';
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
}