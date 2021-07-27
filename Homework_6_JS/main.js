// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         let targetBox = document.getElementsByClassName('target')[0];
//         for (const post of posts) {
//             let userDiv = document.createElement('div');
//             let titlePost = document.createElement('h2');
//             let pPost = document.createElement('p');
//             titlePost.innerText = `${post.id} - ${post.title}`;
//             pPost.innerText = `${post.body}`
//
//             targetBox.appendChild(userDiv);
//             userDiv.append(titlePost, pPost)
//         }
//     })

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            let commentTitle = document.createElement('h3');
            let commentText = document.createElement('p');
            commentTitle.innerText = `${comment.id} - ${comment.name}`;
            commentDiv.appendChild(commentTitle);
            commentText.innerText = `${comment.body}`;

            commentDiv.append(commentText);
            document.body.appendChild(commentDiv)
        }
    })









