const tg = window.Telegram.WebApp;

tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById("username").textContent =
    user.first_name;
}

document
  .getElementById("openButton")
  .addEventListener("click", function () {

    alert("NovaMine Miner siap! ⛏️");

  });
