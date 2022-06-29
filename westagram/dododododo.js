const id = document.getElementById("userId");
const pw = document.getElementById("userPw");
const submit = document.getElementById("btn");
const login = document.getElementById(".login");

const checkIdPw = () => {
  if (id.valce.length > 0 && pw.value.length > 0) {
    submit.ariaDisabled = false;
    submit.classList.add("focus");
  } else {
    submit.disabledv = true;
    submit.classList.remove("focus");
  }
};

login.addEventListener("keyup", checkIdPw);
