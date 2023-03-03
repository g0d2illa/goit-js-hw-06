const formEl = document.querySelector(".login-form");
const formMail = formEl.firstElementChild.firstElementChild;
const formPass = formEl.firstElementChild.nextElementSibling.firstElementChild;
const formBtn = formEl.lastElementChild;

formBtn.addEventListener("click", onformEl);

function onformEl() {
  if (formMail.value !== "" && formPass.value !== "") {
    formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const userData = {
        mail: formMail.value,
        pass: formPass.value,
      };
      console.log(userData);
      event.target.reset();
    });
  } else {
     alert("Fill all form data!");
  }
}
