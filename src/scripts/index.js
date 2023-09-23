window.onload = (event) => {
  // let thisUrl = window.location.origin + "/" + PROJECT_NAME;
  // window.location.href = `${thisUrl}/pages/login.html`;
};

let selectedSideMenu = document.getElementsByClassName("selectedSideMenu");
Array.from(selectedSideMenu).forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    clearDivSection();

    let idDivSection;

    if (element.textContent == "Index") {
      idDivSection = "indexDiv";
    } else if (element.textContent == "Profile") {
      idDivSection = "profileDiv";
    } else if (element.textContent == "Devices") {
      idDivSection = "devicesDiv";
    } else if (element.textContent == "Send Message") {
      idDivSection = "sendMessagesDiv";
    } else if (element.textContent == "Autoreply") {
      idDivSection = "autoreplyDiv";
    } else if (element.textContent == "Outbox") {
      idDivSection = "outboxDiv";
    } else if (element.textContent == "Reccuring") {
      idDivSection = "reccuringDiv";
    } else if (element.textContent == "Phonebooks") {
      idDivSection = "phonebooksDiv";
    } else if (element.textContent == "Templates") {
      idDivSection = "templatesDiv";
    } else if (element.textContent == "Captures") {
      idDivSection = "capturesDiv";
    } else if (element.textContent == "Messages") {
      idDivSection = "messagesDiv";
    } else if (element.textContent == "Subscribers") {
      idDivSection = "subscribersDiv";
    } else if (element.textContent == "REST API") {
      idDivSection = "restApiDiv";
    }

    document.getElementById(idDivSection).style.display = "block";
  });
});

function resetDivSection() {
  let contentSection = document.getElementsByClassName("contentSection");

  Array.from(contentSection).forEach((element) => {
    if (element.id != "indexDiv") {
      element.style.display = "none";
    }
  });
}

function clearDivSection() {
  let contentSection = document.getElementsByClassName("contentSection");

  Array.from(contentSection).forEach((element) => {
    element.style.display = "none";
  });
}
