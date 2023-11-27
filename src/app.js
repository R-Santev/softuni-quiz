import page from "../page/page.mjs";
import { render } from "../lit-html/lit-html.js";
import { userService } from "./services/userService.js";
import { userHelper } from "./userHelper.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { browserView } from "./views/quizBrowserView.js";
import { contestView } from "./views/quizContestView.js";
import { detailsView } from "./views/quizDetailsView.js";
import { editView } from "./views/quizEditorView.js";
import { resultView } from "./views/quizResultView.js";
import { homeView } from "./views/homeView.js";
import { profileView } from "./views/profileView.js";
import { loaderMiddleware } from "./middlewares/loaderMiddleware.js";

const root = document.getElementById("content");
const userA = document.getElementById("user-nav");
const guestA = document.getElementById("guest-nav");

page(decorationContext);
page(loaderMiddleware);
page.redirect("/softuni-quiz", "/");
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logout);
page("/browse", browserView);
page("/contest", contestView);
page("/details/:id", detailsView);
page("/create/:id", editView);
page("/profile/:id", profileView);
page("/result", resultView);

page.start();
updateNav();

async function logout() {
  await userService.logout();
  updateNav();
  goTo("/");
}

function renderer(template) {
  render(template, root);
}

function updateNav() {
  const userData = userHelper.getUserData();
  if (userData) {
    userA.style.display = "inline";
    guestA.style.display = "none";
  } else {
    userA.style.display = "none";
    guestA.style.display = "inline";
  }
}

function goTo(path) {
  page.redirect(path);
}

const x = document.getElementById("snackbar");
function notify(message) {
  // Get the snackbar DIV
  x.innerText = message;
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function decorationContext(ctx, next) {
  ctx.render = renderer;
  ctx.updateNav = updateNav;
  ctx.goTo = goTo;
  ctx.notify = notify;

  next();
}
