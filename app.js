const tg = window.Telegram.WebApp;

tg.expand();


/* =========================
   TELEGRAM USER
========================= */

const user = tg.initDataUnsafe?.user;

if (user) {

  document.getElementById("username").textContent =
    user.first_name;

}


/* =========================
   PAGE NAVIGATION
========================= */

const navButtons =
  document.querySelectorAll(".nav-item");

const pages =
  document.querySelectorAll(".page");


function openPage(pageId) {

  pages.forEach(function (page) {

    page.classList.remove("active");

  });


  navButtons.forEach(function (button) {

    button.classList.remove("active");

  });


  const selectedPage =
    document.getElementById(pageId);

  if (selectedPage) {

    selectedPage.classList.add("active");

  }


  const selectedButton =
    document.querySelector(
      `.nav-item[data-page="${pageId}"]`
    );

  if (selectedButton) {

    selectedButton.classList.add("active");

  }

}


/* NAVIGATION CLICK */

navButtons.forEach(function (button) {

  button.addEventListener(
    "click",

    function () {

      const pageId =
        this.dataset.page;

      openPage(pageId);

    }

  );

});


/* HOME BUTTON TO MINING */

const miningButton =
  document.querySelector(
    ".primary-button[data-page='mining']"
  );

if (miningButton) {

  miningButton.addEventListener(
    "click",

    function () {

      openPage("mining");

    }

  );

}
