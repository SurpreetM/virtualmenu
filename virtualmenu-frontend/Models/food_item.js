class FoodItem {
    constructor(name, description, price, heading) {
        this.name = name; 
        this.description = description; 
        this.price = price;
        this.heading = heading;
      }


      // Old to delete
      static populateMenu() {
        const data = getFoodItems()
        var main = document.getElementById("fooditems")
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = data[i].name
            main.appendChild(li)
        }
      }

      static getFoodItems() {
        fetch("http://localhost:3000/headings")
        .then(res => res.json())
        .then(results => results.data)
      }
}