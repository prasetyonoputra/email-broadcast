document.getElementById("formLogin").addEventListener("submit", (event) => {
  event.preventDefault();

  var formData = new FormData(document.getElementById("formLogin"));

  let thisUrl = window.location.origin + "/" + PROJECT_NAME;
  window.location.href = `${thisUrl}/pages/dashboard.html`;
});
