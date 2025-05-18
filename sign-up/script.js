const API = "https://6823b82b65ba05803397b364.mockapi.io/";
let accountInput = document.getElementById("account");
let emailInput = document.getElementById("email");
let submitBtn = document.getElementById("submit");
let password = document.getElementById("password");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (accountInput.value.length < 5) {
    alert("The account should be more than 4 character");
    return;
  }

  if (!emailInput.value.includes("@")) {
    alert("The Email should has @ symbol");
    return;
  }

  if (accountInput.value.length < 5) {
    alert("The account should be more than 4 character");
    return;
  }

  if (password.value.length < 7) {
    alert("The password should be more than 6 character");
    return;
  }

  fetch(`${API}users?username=${accountInput.value}`).then((response) => {
    
      fetch(`${API}users`, {
        method: "POST",
        body: JSON.stringify({
          username: accountInput.value,
          email: emailInput.value,
          password: password.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      window.location.href = "../sign-in/";
    // else {
    // Swal.fire({
    //     icon: "error",
    //     title: "The account already exits",
    //   });
    // }
  });
});
