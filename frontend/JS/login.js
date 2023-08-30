import { url_backend } from "./url.js";
import { fetchLogin, fetchCatchSession } from "./utils/fetchDatas.js";


window.addEventListener("DOMContentLoaded", async () => {
  const sessionVerify = await fetchCatchSession(`${url_backend}/api/data`)
  if (sessionVerify) {
    let currentURL = window.location.href
    let filterURL = currentURL.split("/")
    filterURL.pop()
    let urlnew = filterURL.join("/");
    // window.location.href = urlnew + "/dashboard.html"
    console.log("session")
  }else {
    return sessionVerify;
  }
})




/**
 * Funcion para enviar data hacia el endpoint donde administra el login
 */

// ? function fetch para traer datos

let $butonSubmitLogin = document.querySelector(".btn-login");
let $formLogin = document.querySelector(".form-login");

$formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
});

$butonSubmitLogin.addEventListener("click", async () => {
  let $dataInputEmail = document.querySelector(".input-email");
  let $dataInputPassword = document.querySelector(".input-password");
  let data = {
    email: $dataInputEmail.value,
    password: $dataInputPassword.value,
  };

  let response = await fetchLogin(data, `${url_backend}/api/login`);
  
  if (response === 200) {
    let currentURL = window.location.href
    let filterURL = currentURL.split("/")
    filterURL.pop()
    let urlnew = filterURL.join("/");
    // window.location.href = urlnew + "/dashboard.html"
  } else if (response === 404) {
    alert("error, no colocaste bien tus datos")
  }
});
