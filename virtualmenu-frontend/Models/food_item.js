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


      
}