// displayAll()
// Fetch pall the posts from the API 
// Insert them into template ? 
// Append to page 
const app = document.querySelector(".app");
import  request from "./api.js";
import {h} from "./create-element.js";

const allDestinations = displayAllHtml();

function displayDestinations() {
    return request("https://destinationapiagil.herokuapp.com/", {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
    .then(res => {
        console.log(res)
        return res
    })
}

export default function displayAll(){
    app.innerHTML = "";
    app.append(allDestinations);

};

async function displayAllHtml(){
    const cardContainer =  h("section", {class: "allDestinations"})

    const destinations =
      await displayDestinations() 
        .then(res =>{
            console.log(res)
                // res is an array of objects
                return res.map(result => {
                    console.log(result)
                    return h("div", {class: "destination"}, result.flight_cost)
                
                } )                      
        })


    console.log(destinations)


    
}