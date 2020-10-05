
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

    getAllFoodItems() {
        APIConnector.headingsJson().then(this.appendFoodItems)
    }



    appendHeadings(json) {
        let data = json.data
        let main = document.getElementById("container")

        data.forEach(function(e) {
            const heading = new Heading(e.attributes.name)
            main.innerHTML += `<div id = ${heading.name} > <h2> ${heading.name} </h2>` 
            let i = e.attributes.food_items 
            i.forEach(function(i){
                main.innerHTML += `<p id = ${i.name} > ${i.name} </p>`
            }) 
        })  
    }

}

class Heading {
    constructor(name) {
        this.name = name; 
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

