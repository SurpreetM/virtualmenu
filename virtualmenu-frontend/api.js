
class APIConnector {
    static get = () =>  {
        return (
            fetch("http://localhost:3000/food_items") 
            .then(response => response.json())
        )
    }

}

class App {

    run = () => {
        this.getAllFoodItems()
    } 

    getAllFoodItems = () => {
        APIConnector.get().then(this.appendFoodItems)
    }

    appendFoodItems = json => {
        let data = json.data
        var main = document.getElementById("fooditems")
        for (var i = 0; i < data.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = data[i].attributes.name
                main.appendChild(li)
        }
    }


}

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

