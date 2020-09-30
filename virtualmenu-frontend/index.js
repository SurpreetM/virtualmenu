document.addEventListener( "DOMContentLoaded", function () {
    addHeadings()
    addFoodItems()
  } );
  
  
  function addFoodItems() {  
    fetch('http://localhost:3000/food_items') 
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            appendFoodItems(json)
        })
    }

    function appendFoodItems(json) {
        var main = document.getElementById("fooditems")
        for (var i = 0; i < json.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = json[i].name
            main.appendChild(li)
        }
    }

    function addHeadings() {  
        fetch('http://localhost:3000/headings') 
            .then(function(response) {
                return response.json();
            })
            .then(function(json){
                appendHeadings(json)
            })
        }
    
        function appendHeadings(json) {
            var main = document.getElementById("heading")
            for (var i = 0; i < json.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = json[i].name
                main.appendChild(div)
            }
        }