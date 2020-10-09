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
            var heading = new Heading(h.attributes.name, h.id)
            let div = document.createElement('div')
            div.id = heading.name
            div.innerHTML = `<h2>${heading.name}</h2>`
            main.appendChild(div)
 
            let i = h.attributes.food_items 
            if (i.length < 1) {
                let deleteButton = document.createElement('button')
                deleteButton.type = 'button'
                deleteButton.textContent = "Delete"
                deleteButton.id = `delete${heading.name}`
                div.appendChild(deleteButton)
                deleteButton.addEventListener ('click', function(event) {
                    event.preventDefault()
                    heading.deleteHeading()
                })  
                
            } else {
                i.forEach(function(i) {
                    const f = new FoodItem(i.name, i.description, i.price, heading.name, i.id)
                    let p = document.createElement('p')
                    p.id = f.name
                    p.innerHTML += `${f.name} <p style="text-align:left;"> ${f.description} <span style="float:right;"> $${f.price} </span> </p>`
                    div.appendChild(p)
                    
                    let deleteFood = document.createElement('button')
                    p.appendChild(deleteFood)
                    deleteFood.type = 'button'
                    deleteFood.textContent = "Delete"
                    deleteFood.id = `delete${f.name}`
                    
                    deleteFood.addEventListener ('click', function(event) {
                        event.preventDefault()
                        f.deleteFoodItem()
                    })  
                })
            }          
        })  
    }


     newHeading() {
        let headingSubmit = document.getElementById('heading-form-submit')
        headingSubmit.addEventListener('click', function(event) {
            event.preventDefault()
            Heading.addHeading()    
        })
    }


}