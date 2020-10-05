class App {

    run() {
        this.getMenu()
    } 

    getMenu() {
        APIConnector.jsonData().then(this.appendMenu)
    }

    appendMenu(json) {
        let data = json.data
        let main = document.getElementById("container")

        data.forEach(function(h) {
            const heading = new Heading(h.attributes.name)
            main.innerHTML += `<div id = ${heading.name} > <h2> ${heading.name} </h2>` 
            let i = h.attributes.food_items 
            i.forEach(function(i){
                const f = new FoodItem(i.name, i.description, i.price, heading.name)
                main.innerHTML += `<p id = ${f.name} > ${f.name} </p> <p style="text-align:left;"> ${f.description} <span style="float:right;"> $${f.price} </span> </p>`
            }) 
        })  
    }

}