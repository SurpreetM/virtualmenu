class App {

    run() {
        this.getMenu()
        this.newHeading()
    } 

    getMenu() {
        APIConnector.jsonData().then(this.appendMenu)
    }

    appendMenu(json) {
        let data = json.data
        let main = document.getElementById("current-menu")

        data.forEach(function(h) {
            const heading = new Heading(h.attributes.name)
            let div = document.createElement('div')
            div.id = heading.name
            div.innerHTML = `<h2>${heading.name}</h2>`
            main.appendChild(div)
 
            let i = h.attributes.food_items 
            if (i.length < 1) {
                let deleteButton = document.createElement('button')
                deleteButton.textContent = "Delete"
                div.appendChild(deleteButton)
            } else {
                i.forEach(function(i){
                    const f = new FoodItem(i.name, i.description, i.price, heading.name)
                    let p = document.createElement('p')
                    p.id = f.name
                    p.innerHTML += `${f.name} <p style="text-align:left;"> ${f.description} <span style="float:right;"> $${f.price} </span> </p>`
                    div.appendChild(p)
                })
            }          
        })  
    }


    newHeading() {
        let headingSubmit = document.getElementById('heading-form-submit');
        headingSubmit.addEventListener('click', function(event) {
            event.preventDefault()
            Heading.addHeading()    
        })
    }

}