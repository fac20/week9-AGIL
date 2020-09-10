import h from "./create-element.js";
import displayAll from "./displayAll.js";
import request from "./api.js";

// renders inital page with login and signup buttons
const app = document.querySelector(".app");

// Creating global variables
// loginForm variable is created and assigned the value returned from running the loginform() function
const loginForm = createLoginForm();
const welcome = h("main", {});
// const logout = logoutButton();


// Function to verify/authenticate user
// const token = window.localStorage.getItem("user-token");
// if (token) {
//     getUser(token).then((user) => {
//         const message = h("span", {}, `Greetings Earthling ${user.name}!`);
//         welcome.innerHTML = "";
//         welcome.append(message, logout);
//         loginForm.replaceWith(welcome);
//     });
// }


function displayLogin(){
    app.innerHTML="";
    app.append(loginForm)
}

function createLoginForm() {
    return h(
        "form", {
        id: "loginForm", // correct id??
        onsubmit: (event) => {
            event.preventDefault();
            const email = event.target.elements.email.value;
            const password = event.target.elements.password.value;
            login(email, password)
            .then((token) => {
                console.log(token);
                window.localStorage.setItem("user-token", token.access_token);

                const message = h("span", {}, `Greetings Earthling!`);
                welcome.innerHTML = "";
                welcome.append(message);
                loginForm.replaceWith(welcome);
            });
        },
    },
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
    h("button", {}, "Log in")
);
}


function login(email, password) {
    return request("https://destinationapiagil.herokuapp.com/login", { // is /login correct?
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "content-type": "application/json" },
    })
}


// function LogoutButton() {
//     return h(
//         "button",
//         {
//             onclick: () => {
//                 window.localStorage.removeItem("token");
//                 welcome.replaceWith(loginForm);
//             },
//         },
//         "Log out"
//     );
// }

export { displayLogin};