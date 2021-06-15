class App {

    run() {
        this.getMenu()
        Heading.newHeading()
        FoodItem.newFoodItem()
    } 

    getMenu() {
        APIConnector.jsonData().then(json => this.appendMenu(json))
    }

    appendMenu(json) {
        let data = json.data
        let main = document.getElementById("current-menu")

        data.forEach(function(h) {
            let heading = new Heading(h.attributes.name, h.id)
            let headingSection = document.createElement('div')
            heading.appendHeading(headingSection, main)
 
            let i = h.attributes.food_items 
            if (i.length < 1) {
                heading.appendDeleteButton(headingSection)
                
            } else {
                i.forEach(function(i) {
                    const foodItem = new FoodItem(i.name, i.description, i.price, heading.name, i.id)
                    foodItem.appendFoodItem(headingSection)
                    foodItem.appendDeleteButton()
                    
                })
            }          
        })  
    }


     


}