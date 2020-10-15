class App {

    run() {
        this.getMenu()
        this.newHeading()
        this.newFoodItem()
    } 

    getMenu() {
        APIConnector.jsonData().then(this.appendMenu)
    }

    appendMenu(json) {
        let data = json.data
        let main = document.getElementById("current-menu")
        let newFoodItemForm = document.getElementById("heading-options")

        data.forEach(function(h) {
            var heading = new Heading(h.attributes.name, h.id)

            let div = document.createElement('div')
            div.id = heading.name
            div.innerHTML = `<h2>${heading.name}</h2>`
            main.appendChild(div)

            let headingOption = document.createElement('option')
            headingOption.id = heading.name
            headingOption.innerHTML = heading.name
            newFoodItemForm.appendChild(headingOption)

 
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
                    const foodItem = new FoodItem(i.name, i.description, i.price, heading.name, i.id)
                    let p = document.createElement('p')
                    p.id = foodItem.name
                    p.innerHTML += `${foodItem.name} <p style="text-align:left;"> ${foodItem.description} <span style="float:right;"> $${foodItem.price} </span> </p>`
                    div.appendChild(p)
                    
                    let deleteFood = document.createElement('button')
                    p.appendChild(deleteFood)
                    deleteFood.type = 'button'
                    deleteFood.textContent = "Delete"
                    deleteFood.id = `delete${foodItem.name}`
                    
                    deleteFood.addEventListener ('click', function(event) {
                        event.preventDefault()
                        foodItem.deleteFoodItem()
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

    newFoodItem() {
        let foodItemSubmit = document.getElementById('food-item-form-submit')
        foodItemSubmit.addEventListener('click', function(event) {
            
            event.preventDefault()
            alert('I was clicked')
            
        })
    }


}