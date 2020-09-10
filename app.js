import {displaySignup, signup} from "./signUp.js"
import {displayLogin, login} from "./login.js"
import { h } from "./create-element.js"

const app = document.querySelector(".app");

function displayIndex () {
    app.append(createIndex());
}

displayIndex();

function createIndex() {
    return h("section", {}, 
        h("img", {src: "images/alien.png", class: "alien", alt: "Alien with world in it's hands"}, ),
        h("button", {
            class: "login",
            onclick: () => 
                displayLogin()
        },"Log in"
        ),
        h("button", {
            class: "signup",
            onclick: () => 
                displaySignup()
            
        }, "Sign up")
    )
}




