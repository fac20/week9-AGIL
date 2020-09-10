import h from "./create-element.js";

function displaySignUp() {
    return h(
        "form",
        {
          id: "signupForm",
          onsubmit: (event) => {
            event.preventDefault();
            const username = event.target.elements.value;
            const age = event.target.elements.value;
            const email = event.target.elements.email.value;
            const password = event.target.elements.password.value;
            signup(username, age, email, password)
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


function signup() {
    
}