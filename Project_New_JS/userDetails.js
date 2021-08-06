const userDetail = new URL(location).searchParams.get('user');

const user = JSON.parse(userDetail);


const userAll = document.getElementById('userAll');
const userAllTitle = document.createElement('h2');
const userAllP = document.createElement('p');
const userAllAddressP = document.createElement('p');
const userAllCompanyAddress = document.createElement('h3')

userAllTitle.innerText = `${user.id} - ${user.name} - ${user.username}`;
userAllP.innerText = `${user.email}`;
userAllAddressP.innerText = `${user.address.street} - ${user.address.suite} - ${user.address.city} - ${user.address.geo.lng} - 
${user.address.geo.lat}`;
userAllCompanyAddress.innerText = `${user.company.name} - ${user.company.catchPhrase} - ${user.company.bs}`;

userAll.append(userAllTitle, userAllP, userAllAddressP, userAllCompanyAddress);

const userPostTitle = document.createElement('button');
// userPostTitle.classList.add('btn')
 userAll.appendChild(userPostTitle)
userPostTitle.innerText = 'Post of current user';

userPostTitle.onclick = function (){
   fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
       .then(value => value.json())
       .then(posts =>{
           console.log(posts);
           const divOfPosts = document.getElementById('userPost')
           divOfPosts.innerText = '';
           for (const post of posts) {
               console.log(posts.title)
               const divOfPost = document.createElement('div');

                divOfPost.innerText = `${post.title}`;

               divOfPosts.appendChild(divOfPost);


               const postLink = document.createElement('a');
               postLink.innerText = 'See post details';
               divOfPost.appendChild(postLink);
               postLink.href =`post-details.html?post=${JSON.stringify(post)}`;
               postLink.target =`blank`

           }
       })
}
