/* =========================
   NOVAMINE API
========================= */

const API_BASE_URL =
  "https://novamine-api-production-c742.up.railway.app";

const tg = window.Telegram.WebApp;

tg.expand();


/* =========================
   NOVAMINE CONFIGURATION
========================= */

const PACKAGES = {

  starter: {
    name: "Starter",
    price: 15000,
    stars: 50,
    reward: 50,
    badge: "PEMULA"
  },

  standard: {
    name: "Standard",
    price: 30000,
    stars: 100,
    reward: 100,
    badge: "POPULER"
  },

  basic: {
    name: "Basic",
    price: 90000,
    stars: 300,
    reward: 300,
    badge: "HEMAT"
  },

  pro: {
    name: "Pro",
    price: 210000,
    stars: 700,
    reward: 700,
    badge: "PRO"
  },

  premium: {
    name: "Premium",
    price: 450000,
    stars: 1500,
    reward: 1500,
    badge: "TERBAIK"
  }

};


/* =========================
   TELEGRAM USER
========================= */

const user =
  tg.initDataUnsafe?.user;

if (user) {

  document.getElementById("username").textContent =
    user.first_name;

}


/* =========================
   FORMAT RUPIAH
========================= */

function formatRupiah(value) {

  return new Intl.NumberFormat(
    "id-ID"
  ).format(value);

}


/* =========================
   GENERATE PACKAGE LIST
========================= */

const packageList =
  document.getElementById("packageList");


function renderPackages() {

  const header = packageList
    .querySelector(".mining-header");

  packageList.innerHTML = "";

  packageList.appendChild(header);


  Object.keys(PACKAGES).forEach(
    function (key) {

      const pkg = PACKAGES[key];


      const card =
        document.createElement("div");

      card.className = "package-card";


      if (key === "premium") {

        card.classList.add(
          "premium-package"
        );

      }


      card.innerHTML = `

        <div class="package-top">

          <h3>
            ${pkg.name}
          </h3>

          <span class="package-badge">
            ${pkg.badge}
          </span>

        </div>


        <div class="package-price">

          <strong>
            Rp${formatRupiah(pkg.price)}
          </strong>

          <span>
            / ${pkg.stars} ⭐
          </span>

        </div>


        <div class="package-reward">

          🎁 ${formatRupiah(pkg.reward)}
          NVM / hari

        </div>


        <button
          class="package-button"
          data-package="${key}">

          Pilih ${pkg.name}

        </button>

      `;


      packageList.appendChild(card);

    }
  );


  attachPackageButtons();

}


/* =========================
   PACKAGE DETAIL
========================= */

const packageDetail =
  document.getElementById(
    "packageDetail"
  );


function showPackageDetail(
  packageKey
) {

  const pkg =
    PACKAGES[packageKey];


  if (!pkg) return;


  document.getElementById(
    "detailPackageName"
  ).textContent =
    pkg.name;


  document.getElementById(
    "detailPackageBadge"
  ).textContent =
    pkg.badge;


  document.getElementById(
    "detailPrice"
  ).textContent =
    "Rp" + formatRupiah(pkg.price);


  document.getElementById(
    "detailStars"
  ).textContent =
    pkg.stars + " Stars";


  document.getElementById(
    "detailReward"
  ).textContent =
    formatRupiah(pkg.reward) +
    " NVM / hari";


  packageList.classList.add(
    "hidden"
  );


  packageDetail.classList.add(
    "active"
  );

}


/* =========================
   PACKAGE BUTTON
========================= */

function attachPackageButtons() {

  const buttons =
    document.querySelectorAll(
      ".package-button"
    );


  buttons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const packageKey =
            this.dataset.package;

          showPackageDetail(
            packageKey
          );

        }
      );

    }
  );

}


/* =========================
   BACK TO PACKAGES
========================= */

document
  .getElementById("backToPackages")
  .addEventListener(
    "click",
    function () {

      packageDetail.classList.remove(
        "active"
      );

      packageList.classList.remove(
        "hidden"
      );

    }
  );


/* =========================
   PAYMENT BUTTON
========================= */

const paymentButtons =
  document.querySelectorAll(
    ".payment-button"
  );


paymentButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        const paymentMethod =
          this.dataset.payment;


        if (paymentMethod === "stars") {

          alert(
            "Telegram Stars dipilih.\n\n" +
            "Sistem pembayaran Stars " +
            "akan kita hubungkan pada tahap berikutnya."
          );

        }


        if (paymentMethod === "bank") {

          alert(
            "Transfer Bank dipilih.\n\n" +
            "Sistem pembayaran manual " +
            "akan kita hubungkan pada tahap berikutnya."
          );

        }


        if (paymentMethod === "ewallet") {

          alert(
            "E-Wallet dipilih.\n\n" +
            "Sistem pembayaran manual " +
            "akan kita hubungkan pada tahap berikutnya."
          );

        }

      }
    );

  }
);


/* =========================
   PAGE NAVIGATION
========================= */

const navButtons =
  document.querySelectorAll(
    ".nav-item"
  );


const pages =
  document.querySelectorAll(
    ".page"
  );


function openPage(pageId) {

  pages.forEach(
    function (page) {

      page.classList.remove(
        "active"
      );

    }
  );


  navButtons.forEach(
    function (button) {

      button.classList.remove(
        "active"
      );

    }
  );


  const selectedPage =
    document.getElementById(
      pageId
    );


  if (selectedPage) {

    selectedPage.classList.add(
      "active"
    );

  }


  const selectedButton =
    document.querySelector(
      `.nav-item[data-page="${pageId}"]`
    );


  if (selectedButton) {

    selectedButton.classList.add(
      "active"
    );

  }

}


/* =========================
   NAVIGATION CLICK
========================= */

navButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        const pageId =
          this.dataset.page;

        openPage(pageId);

      }
    );

  }
);


/* =========================
   HOME → MINING
========================= */

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


/* =========================
   START
========================= */

renderPackages();
