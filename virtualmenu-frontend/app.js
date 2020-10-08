class App {

    run() {
        this.getMenu()
        this.newHeading()
        this.deleteHeading()
        
    } 

    getMenu() {
        APIConnector.jsonData().then(this.appendMenu)
    }

    appendMenu(json) {
        let data = json.data
        let main = document.getElementById("current-menu")

        data.forEach(function(h) {
            var heading = new Heading(h.attributes.name)
            let div = document.createElement('div')
            div.id = heading.name
            div.innerHTML = `<h2>${heading.name}</h2>`
            main.appendChild(div)
 
            let i = h.attributes.food_items 
            if (i.length < 1) {
                let removeHeadingOptions = document.getElementById("delete-heading-options")
                let option = document.createElement('option')
                option.id = heading.name 
                option.innerHTML = heading.name
                removeHeadingOptions.appendChild(option)

                let deleteButton = document.createElement('button')
                deleteButton.type = 'button'
                deleteButton.textContent = "Delete"
                deleteButton.id = `delete${heading.name}`
                div.appendChild(deleteButton)
                deleteButton.addEventListener ('click', function(event) {
                    event.preventDefault()
                    //alert(`Are you sure you want to delete ${heading.name}`)
                    heading.deleteHeading()  
                })
                
            } else {
                i.forEach(function(i){
                    const f = new FoodItem(i.name, i.description, i.price, heading.name)
                    let p = document.createElement('p')
                    p.id = f.name
                    p.innerHTML += `${f.name} <p style="text-align:left;"> ${f.description} <span style="float:right;"> $${f.price} </span> </p>`
                    div.appendChild(p)
                })
            }          
        })  
    }


    newHeading() {
        let headingSubmit = document.getElementById('heading-form-submit')
        headingSubmit.addEventListener('click', function(event) {
            event.preventDefault()
            Heading.addHeading()    
        })
    }

    deleteHeading() {
        let headingDelete = document.getElementById('heading-form-remove')
        headingDelete.addEventListener('click', function(event) {
            event.preventDefault()
            const form = document.getElementById("delete-heading-form")
            const heading = new Heading(form[0].value)
            // alert(`Are you sure you want to delete ${heading.name}`)
            heading.deleteHeading()
        })
    }
    


}