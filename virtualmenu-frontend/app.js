class App {

    run() {
        this.getMenu()
        Heading.newHeading()
        FoodItem.newFoodItem()
    } 

    getMenu() {
        APIConnector.jsonData().then(this.appendMenu)
    }

    appendMenu(json) {
        let data = json.data
        let main = document.getElementById("current-menu")
        //let newFoodItemForm = document.getElementById("heading-options")

        data.forEach(function(h) {
            let heading = new Heading(h.attributes.name, h.id)
            let headingSection = document.createElement('div')
            heading.appendHeading(headingSection, main)

            
            //headingSection.id = heading.name
            //headingSection.innerHTML = `<h2>${heading.name}</h2>`
            //main.appendChild(headingSection)

            //let headingOption = document.createElement('option')
            //headingOption.id = heading.name
            //headingOption.innerHTML = heading.name
            //newFoodItemForm.appendChild(headingOption)

 
            let i = h.attributes.food_items 
            if (i.length < 1) {
                heading.appendDeleteButton(headingSection)
                //let deleteButton = document.createElement('button')
                //deleteButton.type = 'button'
                //deleteButton.textContent = "Delete"
                //deleteButton.id = `delete${heading.name}`
                //headingSection.appendChild(deleteButton)
                //deleteButton.addEventListener ('click', function(event) {
                //    event.preventDefault()
                //    heading.deleteHeading()
                //})  
                
            } else {
                i.forEach(function(i) {
                    const foodItem = new FoodItem(i.name, i.description, i.price, heading.name, i.id)
                    foodItem.appendFoodItem(headingSection)
                    foodItem.appendDeleteButton()
                    //let p = document.createElement('p')
                    //p.id = foodItem.name
                    //p.innerHTML += `${foodItem.name} <p style="text-align:left;"> ${foodItem.description} <span style="float:right;"> $${foodItem.price} </span> </p>`
                    //div.appendChild(p)
                    
                    //let deleteFood = document.createElement('button')
                    //p.appendChild(deleteFood)
                    //deleteFood.type = 'button'
                    //deleteFood.textContent = "Delete"
                    //deleteFood.id = `delete${foodItem.name}`
                    
                    //deleteFood.addEventListener ('click', function(event) {
                    //    event.preventDefault()
                    //   foodItem.deleteFoodItem()
                    //})  
                })
            }          
        })  
    }


     


}