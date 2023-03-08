let postsArray = []

function renderPosts () {
    let html = ''
    for(let post of postsArray){
    html += `<h1> ${post.title} </h1>
                <p> ${post.body} <p>
                <div class="bar"></div>
    `
    document.querySelector('#content').innerHTML = html
}}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    }) 



document.getElementById('post').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const postBody = document.getElementById('post-body').value
    const data = {
        title: title,
        body:postBody
    }

    const options = {method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                            'Content-Type': 'application/json'
    }}

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
        })


    document.getElementById('post-body').value = ''
    document.getElementById('title').value = ''
})