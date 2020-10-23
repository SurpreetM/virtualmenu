class Heading {
    constructor(name, id) {
        this.name = name;
        this.id = id      
    }

    // STATIC METHODS

    static newHeading() {
      let headingSubmit = document.getElementById('heading-form-submit')
      headingSubmit.addEventListener('click', function(event) {
          event.preventDefault()
          Heading.addHeading()    
      })
    }


    static addHeading() {
      let nameInput = document.getElementById("new-heading-name").value
          const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
              body: JSON.stringify({
              "name": nameInput
            })
          }
          APIConnector.postHeading(configObj).then(function(object){
            console.log(object)
            let main = document.getElementById("current-menu") 
            let newHeadingSection = document.createElement("div")
            if (object.errors) {
              alert(object.errors)
            } else {
              let objectName = object.data.attributes.name
              let objectId = object.data.id
              alert(`You are adding the new heading "${objectName}"`)
              let newHeading = new Heading(objectName, objectId) 
              newHeading.appendHeading(newHeadingSection, main)
              newHeading.appendDeleteButton(newHeadingSection)

              document.getElementById("new-heading-form").reset()
            }           
          }) 
    }

    // INSTANCE METHODS

    appendHeading(div, parentSection) {
      div.id = this.name
      div.innerHTML = `<h2>${this.name}</h2>`
      parentSection.appendChild(div)
      // add heading to new food item form (drop down options)
      let headingOption = document.createElement('option')
      let newFoodItemForm = document.getElementById("heading-options")
            headingOption.id = this.name
            headingOption.innerHTML = this.name
            newFoodItemForm.appendChild(headingOption)
    }

    appendDeleteButton(headingSection) {
      let deleteButton = document.createElement('button')
      deleteButton.type = 'button'
      deleteButton.textContent = "Delete Heading"
      deleteButton.id = `delete${this.name}`
      headingSection.appendChild(deleteButton)
      

      let heading = this
      deleteButton.addEventListener ('click', function(event) {
          event.preventDefault()
          heading.deleteHeading()
      }) 
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
    
      APIConnector.deleteHeading(configObj, this.id).then(function(object) {
        console.log(object)
        headingElement.remove()
      })
    }

}