class Heading {
    constructor(name, id) {
        this.name = name;
        this.id = id      
    }

    deleteHeading() {

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
       
      alert(`You are deleting a the heading "${this.name}"`)
      let headingElement = document.getElementById(this.name)
      headingElement.remove()

      APIConnector.deleteHeading(configObj, this.id)

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


}