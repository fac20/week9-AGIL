import { login, getUser } from "./api.js";
// Creating global variables
// loginForm variable is created and assigned the value returned from running the loginform() function
const loginForm = loginForm();
const welcome = h("main", {});
const logout = logoutButton();

// renders inital page with login and signup buttons
const app = document.querySelector("#app");
app.append(loginForm);


// Function to verify/authenticate user
const token = window.localStorage.getItem("user-token");
if (token) {
    getUser(token).then((user) => {
        const message = h("span", {}, `Greetings Earthling ${user.name}!`);
        welcome.innerHTML = "";
        welcome.append(message, logout);
        loginForm.replaceWith(welcome);
    });
}

function displayLogin() {
    return h(
        "form", {
        id: "loginForm", // correct id??
        onsubmit: (event) => {
            event.preventDefault();
            const email = event.target.elements.email.value;
            const password = event.target.elements.password.value;
            login(email, password).then((user) => {
                window.localStorage.setItem("user-token", user.access_token);

                const message = h("span", {}, `Greetings Earthling ${user.name}!`);
                welcome.innerHTML = "";
                welcome.append(message, logout);
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

function LogoutButton() {
    return h(
        "button",
        {
            onclick: () => {
                window.localStorage.removeItem("token");
                welcome.replaceWith(loginForm);
            },
        },
        "Log out"
    );
}