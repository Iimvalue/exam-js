const API = "https://6823b82b65ba05803397b364.mockapi.io/";
let accountInput = document.getElementById("account");
let emailInput = document.getElementById("email");
let submitBtn = document.getElementById("submit");
let password = document.getElementById("password");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(`${API}users`)
    .then((response) => {
      // if (!response.ok)
      //   return Swal.fire({
      //     icon: "info",
      //     title: "The account or password is incorrect",
      //   });

      return response.json();
    })
    .then((data) => {
      let accountInput = document.getElementById("account");
      let password = document.getElementById("password");


      console.log(data);
      
      data.forEach((user) => {
        if (
          user.username == accountInput.value &&
          user.password == password.value
        ) {
          localStorage.setItem("username", user.username);
          window.location.href = "../";
        }
      });
      Swal.fire({
        icon: "info",
        title: "The account or password is incorrect",
      });
    });
});
