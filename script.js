// localStorage.getItem("username")
//   ? (document.getElementById(
//       "welcome-user"
//     ).innerText = `Welcome ${localStorage.getItem("username")}`)
//   : (window.location.href = "./sign-in/");


  document.getElementById("logout").addEventListener("click", ()=>{
    localStorage.removeItem("username")
    window.location.href = "./"
  })