class Heading {
    constructor(name) {
        this.name = name; 
    }

    static addHeading() {
      //if (form[0].value.isEmpty) {
        //alert(`The name cannot be blank`)
      //} else {
          const form = document.getElementById("new-heading-form")
          const heading = new Heading(form[0].value)
          const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
              body: JSON.stringify({
              "name": heading.name
            })
          }
          APIConnector.postHeading(configObj).then(function(object){
            let main = document.getElementById("current-menu") 
            main.innerHTML += `<div id = ${heading.name} > <h2> ${heading.name} </h2>`
            alert(`You are adding the new heading "${heading.name}"`)
            form.reset()
          })
      //} 
    }

}