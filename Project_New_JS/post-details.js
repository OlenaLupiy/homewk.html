const postsDetails = new URL(location).searchParams.get('post');

const post = JSON.parse(postsDetails);

const postDiv = document.getElementById('postDetail');
postDiv.innerText = `${post.userId} - ${post.id} - ${post.title} - ${post.body}`;

// const commentsDiv = document.createElement('div');
// document.body.appendChild(commentsDiv);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments =>{
        console.log(comments);
        const commentsDiv = document.getElementById('commentDiv');
        commentsDiv.innerText ='';

        for (const comment of comments) {
            console.log(comment);
            const commentDiv = document.createElement('div');
            commentDiv.innerText = `${comment.name} - ${comment.body}`;
            commentsDiv.appendChild(commentDiv);
            commentDiv.style.background = 'silver';
            commentDiv.style.margin = '5px'
        }
    })

