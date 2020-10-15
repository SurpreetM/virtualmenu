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
       
      alert(`You are deleting the heading "${this.name}"`)
      let headingElement = document.getElementById(this.name)
      headingElement.remove()

      APIConnector.deleteHeading(configObj, this.id)

    }

    static addHeading() {
      const headingName = document.getElementById("new-heading-name").value
      if (!headingName) {
        alert(`The name cannot be blank`)
      } else {
          const heading = new Heading(headingName)
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