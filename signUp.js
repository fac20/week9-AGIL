import h from "./create-element.js";

const app = document.querySelector(".app");

const signupEl = createSignUpForm();

function displaySignup() {
    app.innerHTML="";
  app.append(signupEl);
}


function createSignUpForm() {
    return h(
        "form",
        {
          id: "signupForm",
          onsubmit: (event) => {
            event.preventDefault();
            const username = document.querySelector("#username").value;
            const age = document.querySelector("#age").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            console.log(username, age, email, password);
            signup(username, age, email, password);
          },
        },
        h("label", { for: "username" }, "Username"), 
        h("input", {
          id: "username",
          type: "username",
          name: "username",
          placeholder: "username",
        }),
        h("label", { for: "age" }, "Age"),
        h("input", {
          id: "age",
          type: "age",
          name: "age",
          placeholder: "age",
        }),
        h("label", { for: "email" }, "Email"),
        h("input", {
          id: "email",
          type: "email",
          name: "email",
          placeholder: "Email",
        }),
        h("label", { for: "password" }, "Password"),
        h("input", {
          id: "password",
          type: "password",
          name: "password",
          placeholder: "Password",
          "aria-label": "Password",
        }),
        h("button", {}, "Sign Up")
      );
}


function signup(username, age, email, password) {
    return fetch("https://destinationapiagil.herokuapp.com/signup", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body:  JSON.stringify({username, age, email, password})
    })
    .then(token => {
      console.log(token)
      window.localStorage.setItem("access_token", token)
      displayAll()
    })
    .catch(error => console.error(error))
}

export { displaySignup, signup };