document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {  
    fetch('http://localhost:3000/food_items') 
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            appendData(json)
        })
    }

    function appendData(json) {
        var main = document.getElementById("test")
        for (var i = 0; i < json.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = json[i].name
            main.appendChild(div)
        }
    }