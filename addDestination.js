const { default: h } = require("./create-element");
const { default: displayAll } = require("./displayAll");

function displayDestinationForm(){
    return h(
        "form", {
        id: "addDestination", // correct id??
        onsubmit: (event) => {
            event.preventDefault();
            const username = event.target.elements.username.value;
            const destination = event.target.elements.destination.value;
            submitDestination(username, destination)
            displayAll()
        },
    },
    h("label", { for: "username" }, "Username"),
    h("input", {
        id: "username",
        type: "username",
        name: "username",
        placeholder: "username",
    }),
    h("label", { for: "destination" }, "Destination"),
    h("input", {
        id: "destination",
        type: "destination",
        name: "destination",
        placeholder: "destination",
        "aria-label": "destination",
    }),
    h("button", {}, "Submit Destination")
);
}
