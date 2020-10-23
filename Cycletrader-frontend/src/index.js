document.addEventListener('DOMContentLoaded', e => {

console.log('what the hell?')
const baseUrl = "http://localhost:3000/users/"
const baseUrlBikes = "http://localhost:3000/bicycles/"
const userDet = document.querySelector('#detailed-info')

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
    document.querySelector('#detailed-info').dataset.userId = user.id
}



const clickHandler = () => {
    document.addEventListener('click', e => {
        if(e.target.matches('#user-bar span')){
            const userId = e.target.dataset.userId

            fetch(baseUrl + userId)
            .then(resp => resp.json())
            .then(renderUserDetails)

            const bikeUl = document.querySelector('#bikes')
            bikeUl.innerHTML = ``
            

            

        }

        const getBikes = () => {
            fetch(baseUrlBikes)
            .then(resp => resp.json())
            .then(renderBicycles)
        }
        const renderBicycles = bicycles => {
            for(const bicycle of bicycles){
            renderBicycle(bicycle)
            console.log(bicycle)
            if(bicycle.user_id == e.target.dataset.userId){
                const bikeUl = document.querySelector('#bikes')
                const bikeIns = document.createElement('li')
                bikeIns.textContent = bicycle.model
                bikeUl.append(bikeIns)}
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
                console.log(bike)
            }
        }
        getBikes ()
    })
    
}




getUsers ()
clickHandler()
})