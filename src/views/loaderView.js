const loader = document.getElementById("loader");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

export const loaderView = {
  showLoader,
  hideLoader,
};
