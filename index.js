// Add your code here
function submitData(userName, userEmail){

    const userDets = {name: userName, email: userEmail}
    const myFetch = fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify(userDets),  
    })

   .then(resp => resp.json())
   .then(user => document.body.textContent = user.id)
   .catch(e => document.body.textContent = e.message)
    return myFetch
}