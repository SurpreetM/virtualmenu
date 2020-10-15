class FoodItem {
    constructor(name, description, price, heading, id) {
        this.name = name; 
        this.description = description; 
        this.price = price;
        this.heading = heading;
        this.id = id;
      }

      deleteFoodItem() {

        const configObj = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
            body: JSON.stringify({
            "name": this.name,
            "id": this.id
          })
        }
         
        alert(`You are deleting the food item "${this.name}"`)
        let foodItemElement = document.getElementById(this.name)
        foodItemElement.remove()
  
        APIConnector.deleteFoodItem(configObj, this.id)
  
      }

      static addFoodItem() {
        let name = document.getElementById("new-food-item-name").value
        let description = document.getElementById("new-food-item-description").value
        let price = document.getElementById("new-food-item-price").value
        let heading = document.getElementById("heading-options").value
        
        let foodItem = new FoodItem(name, description, price, heading)
        let headingSection = document.getElementById(`${foodItem.heading}`)
        foodItem.appendFoodItem(headingSection)
        foodItem.appendDeleteButton()

        alert(`you are adding ${foodItem.name} to ${headingSection.id}`)
      }

      appendFoodItem(heading) {
        let p = document.createElement('p')
        p.id = this.name
        p.innerHTML += `${this.name} <p style="text-align:left;"> ${this.description} <span style="float:right;"> $${this.price} </span> </p>`
        heading.appendChild(p)
      }

      appendDeleteButton() {
        let item = document.getElementById(this.name)
        let deleteFood = document.createElement('button')
        item.appendChild(deleteFood)
        deleteFood.type = 'button'
        deleteFood.textContent = "Delete"
        deleteFood.id = `delete${this.name}`

        // Delete Event Listener
        let foodItem = this
        deleteFood.addEventListener ('click', function(event) {
          event.preventDefault()
          foodItem.deleteFoodItem()
          alert(`This del button is working ${this.id}`)
        }) 

      }




      
}