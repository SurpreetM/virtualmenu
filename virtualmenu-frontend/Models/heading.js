class Heading {
    constructor(name) {
        this.name = name; 
    }

    static addHeading() {
      const form = document.getElementById("new-heading-form")
      if (!form[0].value) {
        alert(`The name cannot be blank`)
      } else {
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
      } 
    }

    deleteHeading() {
      alert(`You have deleted ${heading.name}`)
      //const configObj = {
        //method: "DELETE",
        //headers: {
          //"Content-Type": "application/json",
          //"Accept": "application/json"
        //},
          //body: JSON.stringify({
          //"name": heading.name
        //})
      //}
      //APIConnector.postHeading(configObj).then(function(object){
        //alert(`You have delete ${heading.name}`)
      //})

    }

    

}