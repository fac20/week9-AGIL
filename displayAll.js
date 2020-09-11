const app = document.querySelector(".app")
import { request } from "./api.js";
import {h} from "./create-element.js"

const allDestinations = displayAllHtml();

export default function displayAll(){
    app.innerHTML = "";
    app.append(allDestinations);

};

function displayAllHtml(){
    return request("https://destinationapiagil.herokuapp.com/")
        .then(res => {
            let section = h("section", {class: "allDestinations"} )

            console.log(res);
                // res is an array of objects
                res.map((result) => {
                    const card = h("div", {class: "card"},
                         h("h2", {}, `Destination: ${result.text_content}`),
                         h("p", {},  `flight duration: ${result.flight_time}`),
                         h("p", {},  `flight cost: ${result.flight_cost}`)
                         )
                    section.append( h("h2", {class: "destinations"}, card));
                })
                // create add destination button
                // create log out button
                app.append(section);
        })                  
 
}