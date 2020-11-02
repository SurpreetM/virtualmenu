
class APIConnector {
    static jsonData() {
        return (
            fetch("http://localhost:3000/headings") 
            .then(response => response.json())
            )  
    }

    static postHeading(configurationObject) {
        return fetch("http://localhost:3000/headings", configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

    static postFoodItem(configurationObject) {
        return fetch("http://localhost:3000/food_items", configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

    static deleteHeading(configurationObject, id) {
        return fetch(`http://localhost:3000/headings/${id}`, configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }

    static deleteFoodItem(configurationObject, id) {
        return fetch(`http://localhost:3000/food_items/${id}`, configurationObject)
        .then(resp => resp.json())
        .catch(error => console.log(error))
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

