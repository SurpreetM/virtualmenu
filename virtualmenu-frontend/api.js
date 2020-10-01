
class APIConnector {
    static headingsJson() {
        return (
            fetch("http://localhost:3000/headings") 
            .then(response => response.json())
        )
    }

}

class App {

    run() {
        this.getAllHeadings()
    } 

    getAllHeadings() {
        APIConnector.headingsJson().then(this.appendHeadings)
    }

    // Need to create a headings class. 
    // Change this loop to a for each loop and create a new heading object each time
    // Fix up the naming conventions 
    appendHeadings(json) {
        let data = json.data
        var main = document.getElementById("container")
        for (var i = 0; i < data.length; i++) {
                var heading = document.createElement("p");
                heading.innerHTML += `<h2 id = ${data[i].attributes.name}> ${data[i].attributes.name} </h2>`
                main.appendChild(heading)
        }
    }


}


// To Delete (old functions)
function populateFoodItems() {  
    fetch('http://localhost:3000/food_items') 
        .then(response => response.json())
        .then(json => appendFoodItems2(json))
}

function appendFoodItems2(json) {
    let data = json.data
    var main = document.getElementById("fooditems")
    for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = data[i].attributes.name
            main.appendChild(li)
    }


}

