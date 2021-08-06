const mainDiv = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users =>{
    console.log(users);
    for (const user of users) {

        const userDiv = document.createElement('div');
        const userLink = document.createElement('a');

        console.log(user);
        const userTitle = document.createElement('h2');
        const userP = document.createElement('p');

        userTitle.innerText = `${user.id} - ${user.name}`;
        userP.innerText = `${user.phone}`;

        userLink.innerText = `Info about user`;
        userLink.href = `userDetails.html?user=${JSON.stringify(user)}`;
        userLink.target = `_blank`;

       userDiv.appendChild(userTitle);
       userDiv.append(userP, userLink);
       mainDiv.appendChild(userDiv)

    }
})