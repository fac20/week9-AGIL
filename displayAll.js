// displayAll()
// Fetch pall the posts from the API 
// Insert them into template ? 
// Append to page 
const app = document.querySelector(".app")
import { request } from "./api.js";
import {h} from "./create-element.js"

const allDestinations = displayAllHtml();

function displayDestinations() {
    return request("https://destinationapiagil.herokuapp.com/", {
      method: "GET",
      headers: { "content-type": "application/json" }
    });
}

export default function displayAll(){
    app.innerHTML = "";
    app.append(allDestinations);

};

function displayAllHtml(){
    return h("section", {class: "allDestinations"}, 

    displayDestinations()
        .then(res =>{
            console.log(res)
                // res is an array of objects
                res.map(result => {return h("div", {class: "destination"}, result)} )                        
        })
    )
}