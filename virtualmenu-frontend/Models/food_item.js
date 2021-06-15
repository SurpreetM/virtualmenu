class FoodItem {
  constructor(name, description, price, heading, id) {
      this.name = name; 
      this.description = description; 
      this.price = price;
      this.heading = heading;
      this.id = id;
    }

    // STATIC METHODS

    static newFoodItem() {
      let foodItemSubmit = document.getElementById('food-item-form-submit')
      foodItemSubmit.addEventListener('click', function(event) {
          event.preventDefault()
          FoodItem.addFoodItem()  
      })
   }


   static addFoodItem() {
    let nameInput = document.getElementById("new-food-item-name").value
    let descriptionInput = document.getElementById("new-food-item-description").value
    let priceInput = document.getElementById("new-food-item-price").value
    let headingInput = document.getElementById("heading-options").value


    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify({
        "name": nameInput,
        "description": descriptionInput,
        "price": priceInput, 
        "heading": headingInput
      })
    }
    APIConnector.postFoodItem(configObj).then(function(object) {
      console.log(object)
      if (object.errors) {
        alert(`${object.errors[0]}`)
      } else {
          let headingSection = document.getElementById(`${headingInput}`)
          let headingDeleteButton = document.getElementById(`delete${headingInput}`)

          let objectName = object.data.attributes.name
          let objectDescription = object.data.attributes.description
          let objectPrice = object.data.attributes.price
          let objectHeading = object.data.attributes.heading.name
          let objectId = object.data.id


          let newFoodItem = new FoodItem (objectName, objectDescription, objectPrice, objectHeading, objectId)

          newFoodItem.appendFoodItem(headingSection)
          newFoodItem.appendDeleteButton()
          if (headingDeleteButton){
            headingDeleteButton.remove()
          }
        
          document.getElementById("new-food-item-form").reset()
          alert(`you are adding ${objectName} to ${objectHeading}`)
      }
    
    })
  }  
    
    // INSTANCE METHODS 

    appendFoodItem(heading) {
      let p = document.createElement('p')
      p.id = `${this.heading}.${this.name}`
      p.innerHTML += `${this.name} <p style="text-align:left;"> ${this.description} <span style="float:right;"> $${this.price} </span> </p>`
      heading.appendChild(p)
    }

    appendDeleteButton() {
      let item = document.getElementById(`${this.heading}.${this.name}`)
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
        
      }) 

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
          "id": this.id,
          "heading": this.heading
        })
      }        
      alert(`You are deleting the food item "${this.name}"`)
      let foodItemElement = document.getElementById(`${this.heading}.${this.name}`)
      let headingSection = document.getElementById(`${this.heading}`)
      
      APIConnector.deleteFoodItem(configObj, this.id).then(function(object){
        console.log(object)
        console.log(object.data.attributes.name)
        foodItemElement.remove()
        // rendered the removed food item's heading following the back end foodItem destroy function
        // create a new heading object in javascript to allow us to run the appendDeleteButton function 
        let heading = new Heading(object.data.attributes.name, object.data.attributes.id)
        if (object.data.attributes.food_items.length == 0) {
          heading.appendDeleteButton(headingSection)
        }
      })
    }


    


}