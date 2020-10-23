document.addEventListener('DOMContentLoaded', e => {

console.log('what the hell?')
const baseUrl = "http://localhost:3000/users/"
const baseUrlBikes = "http://localhost:3000/bicycles/"
const userBar = document.querySelector('#user-bar')


const getUsers = () => {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(renderUsers)
}
const renderUsers = users => {
    for(const user of users){
        renderUser(user)
    }
}
const renderUser = user => {
    const userBar = document.querySelector('#user-bar')
    const userSpan = document.createElement('span')
    userSpan.textContent = user.name
    userSpan.dataset.userId = user.id 
    userBar.append(userSpan)
    


    
}




const renderUserDetails = user => {
    document.querySelector('#name').textContent = user.name
    document.querySelector('#location').textContent = user.location
    document.querySelector('#bio').textContent = user.bio
    document.querySelector('#email').textContent = user.email
    document.querySelector('#email').innerHTML += "<br>"
    
    document.querySelector('#detailed-info').dataset.userId = user.id
}



const clickHandler = () => {
    userBar.addEventListener('click', e => {
        
        if(e.target.matches('#user-bar span')){
            const userId = e.target.dataset.userId

            fetch(baseUrl + userId)
            .then(resp => resp.json())
            .then(renderUserDetails)

            const bikeUl = document.querySelector('#bikes')
            bikeUl.innerHTML = `MY BIKES:`
            

            

        }

        const getBikes = () => {
            fetch(baseUrlBikes)
            .then(resp => resp.json())
            .then(renderBicycles)
        }
        const renderBicycles = bicycles => {
            for(const bicycle of bicycles){
            renderBicycle(bicycle)
            if(bicycle.user_id == e.target.dataset.userId){

                const bikeSpan = document.querySelector('#bikes')
                const bikeUl = document.createElement('ul')
                bikeUl.textContent += `BRAND: ${bicycle.brand}`
                bikeUl.innerHTML += "<br>"
                bikeUl.innerHTML += `MODEL: ${bicycle.model}`
                bikeUl.innerHTML += "<br>"
                bikeUl.innerHTML += `<button class="mInfo">More Info</button>`
                bikeUl.dataset.userId = bicycle.user_id
                bikeUl.dataset.bikeId = bicycle.id
                

                bikeSpan.append(bikeUl)
            }
            }
        
        }
        //const renderBicycle = bicycle =>{
        //    console.log(e.target.dataset.userId)
         //   if(bicycle.user_id === e.target.dataset.userId){
          //      document.querySelector('#bikes').textContent = bicycle.model
           // }
        //}
        const renderBicycle = bicycle => {
            for(const bike in bicycle){
                bike
            }
        }
        document.addEventListener('click', e => {
            if(e.target.matches('.mInfo')){

                
              bikeId = e.target.parentElement.dataset.bikeId
              fetch(baseUrlBikes + bikeId)
            .then(resp => resp.json())
            .then(bicycle => renderSpotlight(bicycle))
            const renderSpotlight = bicycle => {
                const info = document.querySelector('#bikes')
                info.innerHTML = `BRAND: ${bicycle.brand}`
                info.innerHTML += `<br>`
                info.innerHTML += `MODEL: ${bicycle.model}`
                info.innerHTML += `<br>`
                info.innerHTML += `SIZE: ${bicycle.size}cm`
                info.innerHTML += "<br>"
                info.innerHTML += `GEARSET: ${bicycle.gearset}`
                info.innerHTML += "<br>"
                info.innerHTML += `FRONT CHAINRINGS: ${bicycle.frontG}`
                info.innerHTML += "<br>"
                info.innerHTML += `REAR COGS: ${bicycle.rearG}`
                info.innerHTML += "<br>"
                info.innerHTML += `CONDITION: ${bicycle.condition}`
                info.innerHTML += "<br>"
                info.innerHTML += `<button class="deleteBike">Delete Bicycle</button>`
                info.innerHTML += "<br>"
                info.innerHTML += `<button class="editBike" data-bike-Id=${bicycle.id}>Edit Bicycle</button>`
                info.dataset.userId = bicycle.user_id
                info.dataset.bikeId = bicycle.id

            }
        }
        document.addEventListener('click', e => {
            if(e.target.matches('.deleteBike')){
            bikeId = e.target.parentElement.dataset.bikeId
            deleteData(bikeId, baseUrlBikes)
            


        }})
        document.addEventListener('click', e => {
            if(e.target.textContent === 'Edit Bicycle'){
                const button = e.target
            const info = document.querySelector('#bikes')
            info.innerHTML += `<form id='edit-bike-form' class="bike-form">
            <input type="hidden" value= "bikeId" id= "bikeId"/>Brand:
            <input type="text" name="brand" id="brand" />
            Model:
            <input type="text" name="model" id="model />
            Size:<input type="number" id="size" min='1' max='70' value="" />
            <br>
            <label for="gearset">Gearset:</label>
            <select id="gearset" id="gearset">
            <option value="Campagnolo">Campagnolo</option>
            <option value="Shimano">Shimano</option>
            <option value="SRAM">SRAM</option>
            </select>
            Front Chainring:<input type="number" id="frontG" min='1' max='3' value="" />
            Rear Cog:<input type="number" id="rearG" min='1' max='11' value="" />
            <br>
            <label for="condition">Condition:</label>
            <select id="condition" id="condition">
            <option value="new">New</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="poor">Poor</option>
            <option value-"parts">Parts</option>
            </select>
            <input type="submit" value="Submit" />


          </form>`
          const form = document.querySelector('#edit-bike-form')
          form.model.value = model
          form.brand.value = brand
          form.size.value = size
          form.gearset.value = gearset
          form.frontG.value = frontG
          form.rearG.value = rearG
          form.condition.value = condition
          console.log(button.dataset.bikeId)


          
          
            
                
          const submitHandler = () => { 

            const form = document.querySelector('#edit-bike-form')
            form.addEventListener('submit', e => {
            e.preventDefault()
            
          const model = form.model.value
          const brand = form.brand.value
          const size = form.size.value
          const gearset = form.gearset.value
          const frontG = form.frontG.value
          const rearG = form.rearG.value
          const condition = form.condition.value
          const bikeId = e.target.parentElement.dataset.bikeId

          const updatedBike = {brand: brand, model: model, size: size, gearset: gearset, frontG: frontG, rearG: rearG, condition: condition}
          const options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify(updatedBike)
        }
          
        fetch(baseURL + bikeId, options)
            .then(resp => resp.json())
            .then(_bike => {
                getBikes()
            })
        
                
            })
        }
        submitHandler ()
            
            


        }})
        })
        
        getBikes ()
    })
    
}


function deleteData(item, url) {
    return fetch(url + item, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }



getUsers ()
clickHandler()
})